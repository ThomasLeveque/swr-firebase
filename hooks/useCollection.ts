import useSWR, { ConfigInterface, responseInterface } from 'swr';

import { Document, Options } from '@lib/firebase.types';
import { fetchCollection } from '@lib/client/fetchers';

const useCollection = <Data>(
  collectionPath: string,
  dbOptions?: Options,
  swrOptions?: ConfigInterface<Document<Data>[]>
): responseInterface<Document<Data>[], any> => {
  return useSWR<Document<Data>[]>(
    dbOptions ? [collectionPath, JSON.stringify(dbOptions)] : collectionPath,
    fetchCollection,
    swrOptions
  );
};

export default useCollection;
