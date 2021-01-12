import Head from 'next/head';
import useCollection from '../hooks/useCollection';
import { fetchCollection } from '../lib/fetchers-admin';

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
        <h1>Coucou</h1>
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
