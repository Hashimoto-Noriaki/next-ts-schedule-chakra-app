import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import customTheme from "./theme";
import '@/styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
