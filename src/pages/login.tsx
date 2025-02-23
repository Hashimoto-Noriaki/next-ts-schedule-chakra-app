import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { NotLoginLayout } from "../components/templates/NotLoginLayout";
import { Box, Text, Input, VStack,Alert, AlertIcon } from "@chakra-ui/react";
import { PrimaryBtn } from "../components/atoms/PrimaryBtn";
import { loginUserState } from "../components/atoms/loginUserState";
import { login } from "./api/login";
import { LoginInfoType } from "../types/login";

export default function LoginPage() {
  const router = useRouter();
  const setLoginUser = useSetRecoilState(loginUserState); 
  const [loginInfo, setLoginInfo] = useState<LoginInfoType>({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  // 入力値をstateに反映する関数
  const changeLoginInfo = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
  
    try {
      const user = await login(loginInfo); // ✅ 非同期でログインを待機
      setLoginUser(user); // ✅ Recoil にユーザー情報を保存
      router.push("/calendar"); // ✅ ログイン成功後にカレンダーへ遷移
    } catch (error) {
      console.error("ログインエラー:", error);
      setErrorMessage("ログインに失敗しました");
    }
  };
  
  return (
    <NotLoginLayout>
      {/* ✅ VStack の代わりに Box を form にする */}
      <Box as="form" onSubmit={handleLogin} w="500px" bg="white" borderRadius="lg" shadow="lg" py="10" px="6">
        <VStack spacing="6">
          {/* タイトル */}
          <Text fontSize="3xl" fontWeight="bold" color="lime.800" textAlign="center">
            ログイン
          </Text>

          {/* エラーメッセージ */}
          {errorMessage && (
            <Alert status="error" borderRadius="md">
              <AlertIcon />
              {errorMessage}
            </Alert>
          )}

          {/* メールアドレス入力 */}
          <Box w="80%">
            <Input
              name="email"
              type="text"
              placeholder="メールアドレス"
              size="lg"
              border="2px solid"
              borderColor="lime.800"
              borderRadius="md"
              p="2"
              _hover={{ borderColor: "lime.800" }}
              value={loginInfo.email}
              onChange={changeLoginInfo}
            />
          </Box>

          {/* パスワード入力 */}
          <Box w="80%">
            <Input
              name="password"
              type="password"
              placeholder="パスワード"
              size="lg"
              border="2px solid"
              borderColor="lime.800"
              borderRadius="md"
              p="2"
              _hover={{ borderColor: "lime.800" }}
              value={loginInfo.password}
              onChange={changeLoginInfo}
            />
          </Box>
          {/* ログインボタン */}
          <PrimaryBtn type="submit">ログイン</PrimaryBtn>
        </VStack>
      </Box>
    </NotLoginLayout>
  );
}
