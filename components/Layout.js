import { Box, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react';

import NavHeader from "./nav-components/NavHeader.js";
import NavSidebar from './nav-components/NavSidebar.js';

// Layout - Creates the default layout for the portfolio
export default function Layout({children}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    {/*Layout Box - The container for all content displayed on the page*/}
    return (
        <Box minW="100vw" minH="100vh" bg="#FFFFFF">
            {/* Desktop Nav Sidebar - Displays on larger devices but not on mobile devices*/}
            <NavSidebar
              onClose={() => onClose}
              display={{ base: "none", md: "block" }}
            />
            <Drawer
              autoFocus={false}
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              returnFocusOnClose={false}
              onOverlayClick={onClose}
              size="full"
            >
                <DrawerContent>
                    {/*Mobile Nav Sidebar - Displays the sidebar for mobile screens when the hamburger icon is clicked*/}
                    <NavSidebar onClose={onClose} />
                </DrawerContent>
            </Drawer>

            {/* Mobile Nav Header - Displays the mobile header for mobile screens but not on larger screens*/}
            <NavHeader display={{ base: 'flex', md: 'none' }} onOpen={onOpen}/>
            
            {/* Content Box - Page content is displayed as {children} showing up to the right of the desktop sidebar and under the mobile header */}
            <Box maxW="1920" ml={{ base: 0, md: 40 }} p="4">
                {children}
            </Box>
        </Box>
    )
}
