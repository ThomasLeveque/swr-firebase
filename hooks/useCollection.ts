import useSWR from 'swr';
import { fetchCollection } from '../lib/fetchers';

const useCollection = (
  collectionPath: string,
  dbOptions?: any,
  swrOptions?: any
) => {
  const { data, error, revalidate, mutate } = useSWR(
    dbOptions ? [collectionPath, JSON.stringify(dbOptions)] : collectionPath,
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
