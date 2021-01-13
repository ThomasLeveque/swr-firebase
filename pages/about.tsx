import Head from 'next/head';
import { NextPage } from 'next';
import { Heading, Spinner } from '@chakra-ui/react';

import useCollection from '../hooks/useCollection';
import TotoItem from '../components/toto-item';

// Client-side only
const AboutPage: NextPage = () => {
  const { data: totos } = useCollection('totos');

  return (
    <>
      <Head>
        <title>SWR Firebase - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading as="h1" mb={3}>
        About
      </Heading>
      {totos ? (
        totos.map((toto: any) => <TotoItem key={toto.id} {...toto} />)
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default AboutPage;
