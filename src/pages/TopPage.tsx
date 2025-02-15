import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";

export const TopPage = () => {
  return (
    <Box position="relative">
      {/* ヘッダー */}
      <Box
        as="header"
        position="fixed"
        top="0"
        left="0"
        right="0"
        py="4"
      >
        <Flex
          px="6"
          alignItems="center"
          justify="space-between"
        >
          {/* ロゴ */}
          <Text fontSize="xl" fontWeight="bold" className="logo">
            スケジュール管理APP
          </Text>

          {/* ナビゲーション（右寄せ） */}
          <HStack spacing="6" color="lime.800" pr="6">
            <Link href="#" fontSize="md" _hover={{ textDecoration: "underline" }}>
              利用方法
            </Link>
            <Link href="#" fontSize="md" _hover={{ textDecoration: "underline" }}>
              ログイン
            </Link>
          </HStack>
        </Flex>
      </Box>

      {/* コンテンツエリア (ヘッダーの下に適切な余白を追加) */}
      <Box pt="80px" textAlign="center">
        <Text fontSize="2xl" fontWeight="bold">
          ようこそ！スケジュール管理APPへ
        </Text>
      </Box>
    </Box>
  );
};
