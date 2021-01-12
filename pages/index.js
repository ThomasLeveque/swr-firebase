import Head from 'next/head';
import { Heading } from '@chakra-ui/react';

import useCollection from '../hooks/useCollection';
import { fetchCollection } from '../lib/fetchers-admin';

// Server-side + Client-side
export default function Home({ initialTotos }) {
  const { data: totos } = useCollection(
    'totos',
    { orderBy: ['value', 'asc'] },
    { initialData: initialTotos }
  );

  return (
    <div>
      <Head>
        <title>SWR Firebase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading as="h1">Coucou</Heading>
        {!totos ? (
          <p>Loading...</p>
        ) : (
          totos.map((toto) => <p key={toto.id}>{toto.name}</p>)
        )}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const initialTotos = await fetchCollection('totos', {
    orderBy: ['value', 'asc']
  });
  return {
    props: {
      initialTotos
    }
  };
}
