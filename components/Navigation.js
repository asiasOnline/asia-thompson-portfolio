import NextLink from 'next/link';
import Image from 'next/image';
import { Box,
        Flex,
        Link,
        Button,
        IconButton,
        Modal,
        ModalOverlay,
        ModalHeader,
        ModalContent,
        ModalCloseButton,
        ModalBody,
        useDisclosure
} from '@chakra-ui/react';
import { BsTwitter,
        BsLinkedin,
        BsBehance,
        BsGithub, 
} from 'react-icons/bs';

import logo from '../public/asia-b-the-techie-logo.svg';
import lightModeIndicator from '../public/custom-icons/light-mode-indicator.svg';

// Logo - Displays the SVG Computer Logo
const Logo = () => (
    <Box>
        <NextLink href="/" passHref>
            <Link>
                <Image
                    src={logo}
                    height={48}
                    width={48}
                    alt="Asia B the Techie Logo"
                />
            </Link>
        </NextLink>
    </Box>
)

const LightDarkModeSwitch = () => (
    <Image
        height={40}
        width={40}
        src={lightModeIndicator}
        alt="Light Mode Switch"
    />
)

const NavLink = ( {navUrl, navText} ) => (
    <Box>
        <NextLink href={navUrl} passHref>
            <Link>{navText}</Link>
        </NextLink>
    </Box>
)

const ResumeModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button 
            onClick={onOpen}
            variant="link">
                Resume
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Asia B the Techie Resume</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Resume Goes Here :)
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

const SocialMediaLink = ( {altText, icon } ) => (
    <Box>
        <IconButton
            size="lg"
            variant="ghost"
            aria-label={altText}
            icon={icon}
        />
    </Box>
)

const Navigation = () => (
    <Flex
        bg="red.50"
        w="124px"
        h="100vh"
        pos="sticky"
        top="0"
        left="0"
        flexDir="column"
        justifyContent="space-between">
        <nav>
            <Logo />
            <LightDarkModeSwitch />
            <Box>
                <NavLink 
                    navUrl="/portfolio"
                    navText="My Work"
                />
                <NavLink 
                    navUrl="/skills"
                    navText="Skill Set"
                />
                <NavLink 
                    navUrl="/contact"
                    navText="Contact Me"
                />
                <NavLink 
                    navUrl="/about"
                    navText="About Me"
                />
                <ResumeModal />
            </Box>
            <Box>
                <SocialMediaLink
                    altText="Twitter Link"
                    icon={<BsTwitter />}
                />
                <SocialMediaLink
                    altText="Linkedin Link"
                    icon={<BsLinkedin />}
                />
                <SocialMediaLink
                    altText="Behance Link"
                    icon={<BsBehance />}
                />
                <SocialMediaLink
                    altText="GitHub Link"
                    icon={<BsGithub />}
                />
            </Box>
        </nav>
    </Flex>
)

export default Navigation