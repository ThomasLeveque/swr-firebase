import Head from 'next/head';
import useSWR from 'swr';
import { fetchTotos } from '../lib/fetchers';

export default function About() {
  const { data: totos } = useSWR(
    ['totos', JSON.stringify({ where: ['value', '==', 1] })],
    fetchTotos
  );
  return (
    <div>
      <Head>
        <title>SWR Firebase - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>About</h1>
        {!totos ? (
          <p>Loading...</p>
        ) : (
          totos.map((toto) => <p key={toto.id}>{toto.name}</p>)
        )}
      </main>
    </div>
  );
}
