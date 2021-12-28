import Head from 'next/head';
import Image from 'next/image';
import { Box, Flex, VStack, Heading, Text, IconButton, Link} from '@chakra-ui/react';
import { 
    BsTwitter, 
    BsLinkedin, 
    BsGithub, 
    BsDribbble 
} from 'react-icons/bs';
import emoji from 'emoji-dictionary';

//Resource Imports
import avatarImage from '../public/images/avatar-image.jpg';
import websiteDownImage from '../public/decor-backgrounds/website-down-scene.svg';

// Header Component - Displays the header text
const Header = ( {head1, text1} ) => (
    <Box>
      <Heading>{head1}{emoji.getUnicode(":blush:")}</Heading>
      <Text>{text1}</Text>
    </Box>
  )

// Avatar Image Component - Displays the avatar image
const AvatarImage = () => (
    <Box>
       <Image
         src={avatarImage}
         alt="Picture of Asia B"
         width={120}
         height={120}
       /> 
    </Box>
)

// Social Media Link Component - Displays a nav icon that acts as an external social media link
const SocialMediaLink = ( {href, altText, icon} ) => (
    <Box>
        <Link href={href} isExternal>
            <IconButton
            size="lg"
            variant="ghost"
            aria-label={altText}
            icon={icon}
            />
        </Link>
    </Box>
)

// SiteDownIllustration 
const SiteDownIllustration= () => (
    <Box>
        <Image
          src={websiteDownImage}
          alt="Website Down Illustration"
          width={360}
          height={356}
        />
    </Box>
)

export default function SiteDown() {
    return (
        <>
            <Head>
                <title>Asia B the Techie Portfolio</title>
            </Head>
            
            {/* Container Box - Contains the elements that make up the site down page content*/}
            <VStack pt="8">
                <Header 
                  head1="Currently this portfolio is getting a revamp...will be back up soon!"
                  text1="Until then here are some of my socials if you want to check them out!"
                />
                {/* Container Box = Contains the avatar image and a box to contain the social media links */}
                <Flex>
                    <AvatarImage />
                    {/* Flex Box - Contains the social media links */}
                    <Flex>
                        <SocialMediaLink
                            href="https://twitter.com/AsiaBtheTechie"
                            altText="Twitter Link"
                            icon={<BsTwitter/>}
                        />
                        <SocialMediaLink
                            href="https://www.linkedin.com/in/asiabthetechie/"
                            altText="Linkedin Link"
                            icon={<BsLinkedin/>}
                        />
                        <SocialMediaLink
                            href="https://github.com/asiabthetechie"
                            altText="GitHub Link"
                            icon={<BsGithub/>}
                        />
                        <SocialMediaLink
                            href="https://dribbble.com/asiabthetechie"
                            altText="Dribbble Link"
                            icon={<BsDribbble/>}
                        />
                    </Flex>
                </Flex>
                <SiteDownIllustration />
            </VStack>
        </>
    )
}