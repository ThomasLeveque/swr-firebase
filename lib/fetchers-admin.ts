import { adminDB } from './firebase-admin';
import { handleCollectionData, handleDocumentData } from './utils';

export const fetchCollection = async (
  path: string,
  options: any = null
): Promise<any> => {
  const ref = adminDB.collection(path);
  return handleCollectionData(ref, options);
};

export const fetchDocument = async (path: string): Promise<any> => {
  const ref = adminDB.doc(path);
  return handleDocumentData(ref);
};
