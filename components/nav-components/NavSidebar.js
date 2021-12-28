import { Box, Flex} from "@chakra-ui/react"


// NavSidebar - Displays the desktop side navigation for the portfolio 
export default function NavSidebar({ onClose, ...rest }) {
    return (
        <Box
          w={{ base: "full", md: 40 }}
          pos="fixed"
          h="full"
          bg="red.50"
          {...rest}
        >

        </Box>
    );
}