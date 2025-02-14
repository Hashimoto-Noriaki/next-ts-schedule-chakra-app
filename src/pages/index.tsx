import { Box,Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Text textAlign="center" fontSize="50" fontWeight="700" textDecoration="underline">
        Next.jsでChakraUIの練習
      </Text>
    </Box>
  );
}
