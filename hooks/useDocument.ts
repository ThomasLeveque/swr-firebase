import useSWR from 'swr';
import { fetchDocument } from '../lib/fetchers';

const useDocument = (documenPath: string, swrOptions?: any) => {
  const { data, error, revalidate, mutate } = useSWR(
    documenPath,
    fetchDocument,
    swrOptions
  );

  return {
    data,
    error,
    revalidate,
    mutate
  };
};

export default useDocument;
