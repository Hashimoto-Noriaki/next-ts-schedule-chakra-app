import { LoginInfoType, LoginUserType } from "../../types/login";

export const login = async (info: LoginInfoType): Promise<LoginUserType> => {
  return new Promise((resolve, reject) => {
    const { email, password } = info;
    if (email === "dog@example.com" && password === "pochi") {
      resolve({ id: 1, name: "ポチ" });
    } else {
      reject(new Error("ログインに失敗しました"));
    }
  });
};
