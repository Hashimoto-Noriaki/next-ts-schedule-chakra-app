import { PrimaryBtn } from "@/components/atoms/PrimaryBtn";
import { NotLoginLayout } from "@/components/templates/NotLoginLayout";
import { Box,Text} from "@chakra-ui/react";
import { useRouter } from "next/router";

export const TopPage = () => {
    const router = useRouter();
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
            <PrimaryBtn onClick={() => router.push("/login")}>ログイン</PrimaryBtn>
        </Box>
    </NotLoginLayout>
    )
}