import Head from 'next/head';
import useSWR from 'swr';
import { fetchTotos } from '../lib/fetchers';

export default function Home() {
  const { data: totos } = useSWR(
    ['totos', JSON.stringify({ orderBy: ['name', 'asc'] })],
    fetchTotos
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
