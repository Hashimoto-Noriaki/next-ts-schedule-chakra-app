import { PrimaryBtn } from "@/components/atoms/PrimaryBtn";
import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";

export const TopPage = () => {
  return (
    <Box 
        position="relative"
        h="100vh"
        bgGradient="linear(to-r, lime.100, lime.200)"
    >
        <Box 
            as="header"
            position="fixed"
            right="0"
            left="0"
            top="0"
            py="4"
            bg="white"
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
        <Box 
            as = "main"
            textAlign="center" 
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            h="100%"
        >
            <Text fontWeight="bold" fontSize="7xl" className="logo" pt="8">
                スケジュール管理APP
            </Text>
            <Text fontSize="5xl" pt="10vh">
                お互いのスケジュールを管理するアプリです。
            </Text>
            {/* コンテンツエリア */}
            <Box pt="20vh">
                <PrimaryBtn>ログイン</PrimaryBtn>
            </Box>
        </Box>
    </Box>
  )
}
