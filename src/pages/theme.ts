import { extendTheme } from "@chakra-ui/react";
import { theme as baseTheme } from "@chakra-ui/theme";

const customTheme = extendTheme({
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    lime: {
      100: "#D9F99D",
      200: "#BEF264",
      300: "#A3E635",
      400: "#84CC16",
      500: "#65A30D",
      600: "#4D7C0F",
      700: "#3F6212",
      800: "#365314",
      900: "#1A2E05",
    },
  },
});

export default customTheme;
