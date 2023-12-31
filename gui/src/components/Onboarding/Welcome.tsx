import { Button, Link, Stack, Typography } from "@mui/material";

import { StepProps } from ".";

export function WelcomeStep({ onSubmit }: StepProps) {
  return (
    <Stack alignItems="flex-end" spacing={3}>
      <Typography variant="h6" component="h1" alignSelf="start">
        Welcome
      </Typography>
      <Typography component="p">
        Iron is an Ethereum wallet for developers. Check out{" "}
        <Link
          underline="hover"
          href="https://mirror.xyz/iron-wallet.eth"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          our website
        </Link>{" "}
        to learn more, or check out the&nbsp;
        <Link
          underline="hover"
          href="https://mirror.xyz/iron-wallet.eth"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          source code on Github
        </Link>
        .
        <br />
        Contributors are welcome!
      </Typography>
      <Button variant="contained" type="submit" onClick={onSubmit}>
        Next
      </Button>
    </Stack>
  );
}
