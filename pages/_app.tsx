import '../styles/globals.css';

import { AppProps } from 'next/app';
import Link from 'next/link';
import { ChakraProvider, Link as ChakraLink, Box, Container } from '@chakra-ui/react';

const Nav = () => {
  return (
    <Box
      as="nav"
      bg="white"
      w="100%"
      height={16}
      px={4}
      mb={8}
      color="black"
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
    >
      <Link href="/" passHref>
        <ChakraLink p={2}>Home</ChakraLink>
      </Link>
      <Link href="/about" passHref>
        <ChakraLink p={2}>About</ChakraLink>
      </Link>
    </Box>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS>
      <Box backgroundColor="gray.200" h="100vh">
        <Nav />
        <Container as="main" maxW="6xl">
          <Component {...pageProps} />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
