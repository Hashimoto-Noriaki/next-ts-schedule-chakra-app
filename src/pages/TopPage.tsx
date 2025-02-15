import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";

export const TopPage = () => {
  return (
    <Box position="relative">
        <Box 
            as="header"
            position="fixed"
            right="0"
            left="0"
            top="0"
            py="4"
        >
            <Flex
                justify="space-between"
                px="6"
            >
                {/* ロゴ */}
                <Text fontSize="xl" fontWeight="bold"className="logo" >
                    スケジュール管理App
                </Text>
                {/* ナビゲーション */}
                <HStack spacing="6" pr="6">
                    <Link href="#" fontSize="md" _hover={{ textDecoration: "underline" }}>
                        利用方法
                    </Link>
                    <Link href="#" fontSize="md" _hover={{ textDecoration: "underline" }}>
                        ログイン
                    </Link>
                </HStack>
            </Flex>
        </Box>
        {/* コンテンツエリア */}
        <Box textAlign="center" pt="80px">
            <Text fontWeight="bold" fontSize="30">
                ようこそ！スケジュール管理APPへ
            </Text>
        </Box>
    </Box>
  )
}
