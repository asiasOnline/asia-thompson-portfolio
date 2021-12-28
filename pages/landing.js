import Head from 'next/head';
import Image from 'next/image';
import { Box, Grid, GridItem, Heading, Text, Button } from '@chakra-ui/react';
import emoji from 'emoji-dictionary';

import homeIllustration from '../public/personal-illustrations/standing-with-laptop-illustration.svg';
import homeBackground from '../public/decor-backgrounds/blue-triangle-abstract-background.svg';

// HomePageText - Displays the text elements on the landing page
const HomePageText = ( {head1, text1, text2, text3, buttontext } ) => (
  <Box>
    <Heading>{head1}</Heading>
    <Text>{text1}</Text>
    <Text>{text2}{emoji.getUnicode(":sun_behind_small_cloud:")}</Text>
    <Text>{text3}</Text>
    <Button>
      {buttontext}
    </Button>
  </Box>
)

// HomeImagery - Displays the imagery on the landing page
const HomeImagery = () => (
  <Box>
    <Box position="absolute">
      <Image
        src={homeBackground}
        width={500}
        height={460}
      />
    </Box>
    <Box>
      <Image
        src={homeIllustration}
        width={230}
        height={500}
      />
    </Box>
  </Box>
)

// Home - The main component to display the Home page elements
export default function LandingPage() {
  return (
    <Box>
      <Head>
        <title>Asia B the Techie Portfolio</title>
      </Head>
      <Grid  w="90vw"
      templateColumns="repeat(2, 1fr)">
        <GridItem colSpan={1}>
          <HomePageText
              head1="Hi!"
              text1="My name is Asia!"
              text2="I'm a UX/UI Designer and a Full Stack Developer 
              working in Southern California"
              text3="I am also a..."
              buttontext="Let's Work Together"
            />
          </GridItem>
          <GridItem>
            <HomeImagery />
          </GridItem>
      </Grid>
    </Box> 
  )
}