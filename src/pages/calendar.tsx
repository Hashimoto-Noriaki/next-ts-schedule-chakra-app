import { useRecoilValue } from "recoil";
import { loginUserState } from "../components/atoms/loginUserState";
import { Box, Text, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function CalendarPage() {
  const loginUser = useRecoilValue(loginUserState);
  const router = useRouter();

  useEffect(() => {
    if (loginUser.id === 0) {
      router.push("/login");
    }
  }, [loginUser, router]);

  return (
    <Flex
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-r, lime.100, lime.200)"
    >
      <Box
        p="8"
        bg="white" // ✅ テキストボックスの背景色
        borderRadius="lg"
        boxShadow="lg"
        textAlign="center" // ✅ テキストを中央に配置
      >
        <Text fontSize="3xl" fontWeight="bold" color="lime.700">カレンダー</Text>
        <Text fontSize="lg" color="gray.600">ID: {loginUser.id}</Text>
        <Text fontSize="lg" color="gray.600">名前: {loginUser.name}</Text>
      </Box>
    </Flex>
  );
}
