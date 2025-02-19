import { LoginInfoType, LoginReturnType } from "../../types/login";

export const login = (info: LoginInfoType): LoginReturnType => {
  const { email, password } = info;
  if (email === "dog@example.com" && password === "pochi") {
    return { id: 1, name: "ポチ" };
  } else {
    throw new Error("ログインに失敗しました");
  }
};



// export const login = async (info: LoginInfoType): Promise<LoginReturnType> => {
//   const { email, password } = info;
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (email === "test@example.com" && password === "password") {
//         resolve({ id: 1, name: "sample太郎" });
//       } else {
//         reject(new Error("ログインに失敗しました"));
//       }
//     }, 1000);
//   });
// };
