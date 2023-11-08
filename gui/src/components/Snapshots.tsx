import {
    CallMade,
    CallReceived,
    ExpandMore,
    NoteAdd,
  } from "@mui/icons-material";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Badge,
    Box,
    CircularProgress,
    Grid,
    Stack,
    Typography,
    } from "@mui/material";
import { invoke } from "@tauri-apps/api/tauri";
import { createElement, useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import truncateEthAddress from "truncate-eth-address";
import { Address, formatEther, formatGwei } from "viem";
import { useTransaction, useWaitForTransaction } from "wagmi";


import { useEventListener } from "@/hooks";
import { useNetworks, useWallets } from "@/store";
import { Paginated, Pagination, Tx } from "@/types";
import { AddressView, ContextMenu, Panel } from "./";


export function Snapshots() {
    /*! 
    const account = useWallets((s) => s.address);
    const chainId = useNetworks((s) => s.current?.chain_id);

    const [pages, setPages] = useState<Paginated<Tx>[]>([]);
  
    const loadMore = useCallback(() => {
      let pagination: Pagination = {};
      const last = pages?.at(-1)?.pagination;
      if (!!last) {
        pagination = last;
        pagination.page = (pagination.page || 0) + 1;
      }

    useEffect(() => {
      if (pages.length == 0) loadMore();
    }, [pages, loadMore]);
  
    const reload = () => {
      setPages([]);
    };
  
    useEventListener("txs-updated", reload);
    useEffect(reload, [account, chainId]);
  
    if (!account || !chainId) return null;
      */


    function recordSnapshot(){      
      invoke('create_snapshot', { invokeMessage: 'Hello!' })
      //}).then();
    };

    return (
      <Panel>
        <>
            <div>HELLOOO</div>
            <button
              onClick={() => recordSnapshot()}
            >BUTTON print</button>
        </>
      </Panel>
    );
  }