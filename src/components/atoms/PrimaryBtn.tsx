import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

export const PrimaryBtn = ({ children }: PropsType) => {
  return (
    <Button
      bg="lime.800"
      color="white"
      p="8"
      fontSize="lg"
      borderRadius="lg"
      _hover={{ bg: "lime.700" }}
    >
      {children}
    </Button>
  );
};