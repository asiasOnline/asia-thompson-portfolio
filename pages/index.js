import Head from 'next/head';
import { Box } from '@chakra-ui/react';

// Page and Component Imports
import SiteDown from "./site-down";

// Home - Displays the Landing or Sitedown component based on the development process
export default function Home() {

  {/*Home Content - Container for the landing page content*/}
  return (
    <>
      <Head>
        <title>Asia B the Techie Portfolio</title>
      </Head>
      <Box>
        <SiteDown />
      </Box>
    </> 
  )
}
