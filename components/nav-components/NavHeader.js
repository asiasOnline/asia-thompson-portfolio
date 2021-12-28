import { Flex } from "@chakra-ui/react";

// NavHeader - Displays the mobile header navigation for the portfolio 
export default function Header({ onOpen, ...rest }) {
    return(
        <Flex
          height="20"
          ml={{ base: 0, md: 60 }}
          px={{ base: 4, md: 24 }}
          position="sticky"
          top="0"
          zIndex="1"
          bg="red.50"
          {...rest}
        >
            
        </Flex>
    )
}