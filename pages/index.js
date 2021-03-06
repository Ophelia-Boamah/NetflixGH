import Head from "next/head";
import { Box } from "@chakra-ui/core";
import Landing from "../components/Home/Landing";
import Enjoy from "../components/Home/Enjoy";
import Download from "../components/Home/Download";
import Watch from "../components/Home/Watch";
import FAQ from "../components/Home/FAQ";
import Footer from "../components/Home/Footer";

export default function Home() {
  return (
    <Box w="100%">
      <Head>
        <title>NetflixGh</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Landing />
      <Enjoy />
      <Download />
      <Watch />
      <FAQ />
      <Footer />
    </Box>
  );
}
