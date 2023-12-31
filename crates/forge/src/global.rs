use std::path::PathBuf;

use iron_broadcast::InternalMsg;
use iron_settings::Settings;
use iron_types::GlobalState;
use once_cell::sync::Lazy;
use tokio::sync::RwLock;

use crate::manager::Forge;

pub(crate) static FORGE: Lazy<RwLock<Forge>> = Lazy::new(Default::default);

pub async fn init() -> crate::Result<()> {
    tokio::spawn(async { receiver().await });

    let settings = Settings::read().await;
    let mut forge = FORGE.write().await;

    if let Some(ref path) = settings.inner.abi_watch_path {
        forge.watch(path.clone().into()).await?;
    }

    Ok(())
}

async fn receiver() -> ! {
    let mut rx = iron_broadcast::subscribe_internal().await;

    loop {
        if let Ok(msg) = rx.recv().await {
            use InternalMsg::*;

            if let SettingsUpdated = msg {
                let settings = Settings::read().await;
                let mut forge = FORGE.write().await;

                let new_path: Option<PathBuf> =
                    settings.inner.abi_watch_path.clone().map(Into::into);

                // if path didn't change, skip
                if forge.watch_path == new_path {
                    continue;
                }

                if let Some(path) = new_path.clone() {
                    let _ = forge.watch(path).await;
                } else {
                    let _ = forge.unwatch().await;
                }
            }
        }
    }
}
