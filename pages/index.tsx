import Head from 'next/head';
import { NextPage, GetServerSideProps } from 'next';
import { Heading, Spinner } from '@chakra-ui/react';

import useCollection from '../hooks/useCollection';
import { fetchCollection } from '../lib/fetchers-admin';
import TotoItem from '../components/toto-item';

const dbOptions = { orderBy: ['value', 'asc'] };

type HomePageProps = {
  initialTotos: any;
};

// Server-side + Client-side
const HomePage: NextPage<HomePageProps> = ({ initialTotos }) => {
  const { data: totos } = useCollection('totos', dbOptions, {
    initialData: initialTotos
  });

  return (
    <>
      <Head>
        <title>SWR Firebase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading as="h1" mb={3}>
        Coucou
      </Heading>
      {totos ? (
        totos.map((toto: any) => <TotoItem key={toto.id} {...toto} />)
      ) : (
        <Spinner />
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const initialTotos = await fetchCollection('totos', dbOptions);
  return {
    props: {
      initialTotos
    }
  };
};

export default HomePage;
