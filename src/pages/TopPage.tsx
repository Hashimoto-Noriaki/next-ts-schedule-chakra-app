import { Box, Flex, HStack, Link, Spacer, Text } from "@chakra-ui/react";

export const TopPage = () => {
  return (
    <Box>
        <Flex as="header" p="4">
            <Text fontSize="xl" fontWeight="bold">
                スケジュール管理App
            </Text>
            <Spacer />
            <HStack spacing="6">
                <Link href="#" fontSize="md" _hover={{ textDecoration: "underline" }}>
                    利用方法
                </Link>
                <Link href="#" fontSize="md" _hover={{ textDecoration: "underline" }}>
                    ログイン
                </Link>
            </HStack>
        </Flex>
    </Box>
  )
}
