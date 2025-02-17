import { ReactNode }  from 'react'
import { Button } from  "@chakra-ui/react";

type PropsType = {
    children: ReactNode;
    onClick?:() => void;
}

export const PrimaryBtn = ({children, onClick}: PropsType) => {
  return (
    <Button 
        bg="lime.800"
        color="white" 
        p="8" 
        borderRadius="lg" 
        fontSize="20" _hover={{ bg: "lime.700" }}
        onClick={onClick}
        >
            { children }
    </Button>
  )
}