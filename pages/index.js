import Head from 'next/head';
import { Heading, Spinner } from '@chakra-ui/react';

import useCollection from '../hooks/useCollection';
import { fetchCollection } from '../lib/fetchers-admin';
import TotoItem from '../components/toto-item';

// Server-side + Client-side
const HomePage = ({ initialTotos }) => {
  const { data: totos } = useCollection(
    'totos',
    { orderBy: ['value', 'asc'] },
    { initialData: initialTotos }
  );

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
        totos.map((toto) => <TotoItem key={toto.id} {...toto} />)
      ) : (
        <Spinner />
      )}
    </>
  );
};

export async function getServerSideProps() {
  const initialTotos = await fetchCollection('totos', {
    orderBy: ['value', 'asc']
  });
  return {
    props: {
      initialTotos
    }
  };
}

export default HomePage;
