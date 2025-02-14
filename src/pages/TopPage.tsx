import { Box, Flex, Spacer, Text, HStack, Link } from "@chakra-ui/react";

export const TopPage = () => {
  return (
    <Box>
      {/* ヘッダー */}
      <Flex as="header" p="4" align="center">
        {/* 左側のロゴ */}
        <Text fontSize="xl" fontWeight="bold">
          スケジュール管理APP
        </Text>
        <Spacer />
        {/* 右側のナビゲーション */}
        <HStack spacing="6">
          <Link href="#" fontSize="md" _hover={{ textDecoration: "underline" }}>
            ご利用方法
          </Link>
          <Link href="#" fontSize="md" _hover={{ textDecoration: "underline" }}>
            ログイン
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};
