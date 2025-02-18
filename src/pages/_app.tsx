import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./theme";
import '@/styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
