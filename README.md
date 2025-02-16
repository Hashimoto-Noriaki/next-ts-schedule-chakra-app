This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```tsx
import { Box, Flex, HStack, Link, Text, Button } from "@chakra-ui/react";

export const TopPage = () => {
  return (
    <Box 
        position="relative"
        h="100vh"
        bgGradient="linear(to-r,lime.100,lime.200)"
    >
        <Box 
            as="header"
            position="fixed"
            right="0"
            left="0"
            top="0"
            bg="white"
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
        <Box
            as = "main"
            pt="80px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
        >
            {/* タイトル */}
            <Text fontWeight="bold" fontSize="70" className="logo">
                スケジュール管理APP
            </Text>
            {/* 説明文 */}
            <Text pt="10vh" fontSize="5xl">
                お互いのスケジュールを管理するアプリです
            </Text>

            {/* ログインボタン */}
            <Box pt="10">
                <Button bg="lime.800" color="white" p="8" fontSize="lg" borderRadius="lg" _hover = {{ bg: "lime.600" }}>
                    ログイン
                </Button>
            </Box>

        </Box>
    </Box>
  )
}
```