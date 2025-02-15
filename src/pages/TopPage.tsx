import { Box, Flex, HStack, Link, Text, Button } from "@chakra-ui/react";

export const TopPage = () => {
  return (
    <Box 
      position="relative" 
      h="100vh"
      bgGradient="linear(to-r, lime.100, lime.200)"
    >
      {/* ヘッダー */}
      <Box
        as="header"
        position="fixed"
        top="0"
        left="0"
        right="0"
        bg="white"
        py="4"
        zIndex="10"
      >
        <Flex
          mx="auto"
          px="6"
          align="center"
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

      {/* メインコンテンツ */}
      <Box
        as="main"
        pt="80px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        h="100%"
      >
        {/* タイトル */}
        <Text fontSize="7xl" fontWeight="bold" className="logo">
          スケジュール管理APP
        </Text>

        {/* 説明文 */}
        <Text pt="10vh" fontSize="5xl">
          お互いのスケジュールを管理するアプリです
        </Text>

        {/* ログインボタン */}
        <Box pt="20vh">
          <Button bg="lime.800" color="white" p="8" fontSize="lg" borderRadius="lg" _hover={{ bg: "lime.700" }}>
            ログイン
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
