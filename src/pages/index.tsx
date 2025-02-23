import { Box,Text} from  "@chakra-ui/react";

export default function Home() {
  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
  >
    <Text fontSize="50px" fontWeight="700" textDecoration="underline">
      Next.jsで練習
    </Text>
  </Box>
  )
}