import Head from 'next/head';
import { NextPage } from 'next';
import { Heading, Spinner } from '@chakra-ui/react';

import useCollection from '@hooks/useCollection';
import TotoItem from '@components/toto-item';
import { Toto } from '@data-types/toto.types';

// Client-side only
const AboutPage: NextPage = () => {
  const { data: totos } = useCollection<Toto>('totos');

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
        totos.map((toto) => <TotoItem key={toto.id} toto={toto} />)
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default AboutPage;
