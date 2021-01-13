import useSWR, { ConfigInterface, responseInterface } from 'swr';

import { Document } from '@lib/firebase.types';
import { fetchDocument } from '@lib/client/fetchers';

const useDocument = <Data>(
  documenPath: string,
  swrOptions?: ConfigInterface<Document<Data>>
): responseInterface<Document<Data>, any> => {
  return useSWR<Document<Data>>(documenPath, fetchDocument, swrOptions);
};

export default useDocument;
