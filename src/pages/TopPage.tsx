import { PrimaryBtn } from "../components/atoms/PrimaryBtn";
import { NotLoginLayout } from "../components/templates/NotLoginLayout";
import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const TopPage = () => {
  const router = useRouter();

  return (
    <NotLoginLayout>
      <Box textAlign="center">
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
          <PrimaryBtn onClick={() => router.push("/login")}>ログイン</PrimaryBtn>
        </Box>
      </Box>
    </NotLoginLayout>
  );
};