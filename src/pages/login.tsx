import { NotLoginLayout } from "../components/templates/NotLoginLayout";
import { Box, Text, Input, VStack } from "@chakra-ui/react";
import { PrimaryBtn } from "../components/atoms/PrimaryBtn";

export default function LoginPage() {
  return (
    <NotLoginLayout>
      <Box textAlign="center">
        {/* タイトル */}
        <Text fontSize="5xl" fontWeight="bold">
          ログイン
        </Text>

        {/* フォーム */}
        <VStack spacing="6" mt="8" w="sm">
          <Input placeholder="メールアドレス" size="lg" w="100%"/>
          <Input placeholder="パスワード" type="password" size="lg" w="100%"/>
          <PrimaryBtn>ログイン</PrimaryBtn>
        </VStack>
      </Box>
    </NotLoginLayout>
  );
}
