import { PrimaryBtn } from "@/components/atoms/PrimaryBtn";
import { NotLoginLayout } from "@/components/templates/NotLoginlayout";
import { Box,Text } from "@chakra-ui/react";

export const TopPage = () => {
  return (
    <NotLoginLayout>
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
    </NotLoginLayout>
  )
}