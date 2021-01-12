import Head from 'next/head';
import useCollection from '../hooks/useCollection';

export default function About() {
  const { data: totos } = useCollection('totos', { where: ['value', '==', 1] });

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
