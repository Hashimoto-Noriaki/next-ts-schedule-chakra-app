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
              placeholder="メールアドレス"
              size="lg"
              border="4px solid"
              borderColor="lime.800"
              borderRadius="md"
              p="2"
              _hover={{ borderColor: "lime.800" }} //Chakra UI の Input はデフォルトでホバー時に色が変わるスタイル (_hover スタイル) が適用
            />
          </Box>

          {/* パスワード入力 */}
          <Box w="80%">
            <Input
              type="password"
              placeholder="パスワード"
              size="lg"
              border="4px solid"
              borderColor="lime.800"
              borderRadius="md"
              p="2"
              _hover={{ borderColor: "lime.800" }}//Chakra UI の Input はデフォルトでホバー時に色が変わるスタイル (_hover スタイル) が適用
            />
          </Box>

          {/* ログインボタン */}
          <PrimaryBtn>ログイン</PrimaryBtn>
        </VStack>
      </Box>
    </NotLoginLayout>
  );
}
