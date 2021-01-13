import { clientDB } from './firebase';
import { handleCollectionData, handleDocumentData } from './utils';

export const fetchCollection = async (path: string, options: any = null): Promise<any> => {
  const ref = clientDB.collection(path);
  return handleCollectionData(ref, options);
};

export const fetchDocument = async (path: string): Promise<any> => {
  const ref = clientDB.doc(path);
  return handleDocumentData(ref);
};
