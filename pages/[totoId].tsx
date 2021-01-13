import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Heading, Spinner } from '@chakra-ui/react';

import useDocument from '../hooks/useDocument';
import { fetchDocument } from '../lib/fetchers-admin';

type TotoPageProps = {
  initialToto: any;
};

const TotoPage: NextPage<TotoPageProps> = ({ initialToto }) => {
  const {
    query: { totoId }
  } = useRouter();

  const { data: toto } = useDocument(`totos/${totoId}`, {
    initialData: initialToto
  });

  if (!toto) {
    return <Spinner />;
  }

  return (
    <Heading as="h1" mb={3}>
      {toto.name} = {toto.value}
    </Heading>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const totoId = params?.totoId;
  const initialToto = await fetchDocument(`totos/${totoId}`);
  return {
    props: {
      initialToto
    }
  };
};

export default TotoPage;
