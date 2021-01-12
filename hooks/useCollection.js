import useSWR from 'swr';
import { fetchCollection } from '../lib/fetchers';

const useCollection = (collectionPath, dbOptions, swrOptions) => {
  const { data, error, revalidate, mutate } = useSWR(
    [collectionPath, JSON.stringify(dbOptions)],
    fetchCollection,
    swrOptions
  );

  return {
    data,
    error,
    revalidate,
    mutate
  };
};

export default useCollection;
