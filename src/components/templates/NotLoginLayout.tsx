import { ReactNode } from 'react'
import { Box,Flex,HStack,Link,Text,} from "@chakra-ui/react";  

type PropsType = {
    children: ReactNode;
}

export const NotLoginLayout = ({ children}: PropsType) => {
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
            { children }
        </Box>
    </Box>
  )
}
