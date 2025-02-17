import { NotLoginLayout } from "../components/templates/NotLoginLayout";
import { Box, Text, Input, VStack } from "@chakra-ui/react";
import { PrimaryBtn } from "../components/atoms/PrimaryBtn";

export default function LoginPage() {
  return (
    <NotLoginLayout>
      <Box
        w="500px"
        bg="white"
        borderRadius="lg"
        shadow="lg"
        py="10"
        px="6"
      >
        <VStack as="form" spacing="6">
          {/* タイトル */}
          <Text fontSize="3xl" fontWeight="bold" color="lime.800" textAlign="center">
            ログイン
          </Text>

          {/* メールアドレス入力 */}
          <Box w="80%">
            <Input
              type="text"
              placeholder="email"
              size="lg"
              border="4px solid"
              borderColor="lime.800"
              borderRadius="md"
              p="2"
            />
          </Box>

          {/* パスワード入力 */}
          <Box w="80%">
            <Input
              type="password"
              placeholder="password"
              size="lg"
              border="4px solid"
              borderColor="lime.800"
              borderRadius="md"
              p="2"
            />
          </Box>

          {/* ログインボタン */}
          <PrimaryBtn>ログイン</PrimaryBtn>
        </VStack>
      </Box>
    </NotLoginLayout>
  );
}
