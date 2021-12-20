import NextLink from 'next/link';
import Image from 'next/image';
import { Box,
        Flex,
        Link,
        Text,
        IconButton,
} from '@chakra-ui/react';
import { BsFillSunFill, 
        BsFillMoonStarsFill, 
        BsTwitter,
        BsLinkedin,
        BsBehance,
        BsGithub, 
} from 'react-icons/bs';

import logo from '../public/asia-b-the-techie-logo.svg';

const Navigation = () => (
    <Flex
        bg="red.50"
        w="124px"
        h="100vh"
        pos="sticky"
        top="0"
        left="0"
        flexDir="column"
        justifyContent="space-around">
        <nav>
            <Image
                src={logo}
                height={48}
                width={48}
                alt="Asia B the Techie Logo"
            />
            <NextLink href="/" passHref>
                <Link>Home</Link>
            </NextLink>
            <NextLink href="/portfolio" passHref>
                <Link>My Work</Link>
            </NextLink>
            <NextLink href="/skills" passHref>
                <Link>Skill Set</Link>
            </NextLink>
            <NextLink href="/contact" passHref>
                <Link>Contact Me</Link>
            </NextLink>
        </nav>
    </Flex>
)

export default Navigation