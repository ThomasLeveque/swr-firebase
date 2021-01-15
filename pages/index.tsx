import Head from 'next/head';
import { NextPage, GetServerSideProps } from 'next';
import { Heading, Spinner } from '@chakra-ui/react';

import TotoItem from '@components/toto-item';
import useCollection from '@hooks/useCollection';
import { Toto } from '@data-types/toto.types';
import { fetchCollection } from '@libs/admin/fetchers-admin';
import { Document, Options } from '@libs/firebase.types';

const dbOptions: Options = { orderBy: ['value', 'desc'] };

type HomePageProps = {
  initialTotos: Document<Toto>[];
};

// Server-side + Client-side
const HomePage: NextPage<HomePageProps> = ({ initialTotos }) => {
  const { data: totos } = useCollection<Toto>('totos', dbOptions, {
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
        totos.map((toto: any) => <TotoItem key={toto.id} toto={toto} />)
      ) : (
        <Spinner />
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const initialTotos = await fetchCollection<Toto>('totos', dbOptions);
  return {
    props: {
      initialTotos
    }
  };
};

export default HomePage;
