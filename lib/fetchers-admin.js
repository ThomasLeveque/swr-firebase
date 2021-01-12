import { adminDB } from './firebase-admin';
import { handleCollectionData, handleDocumentData } from './utils';

export const fetchCollection = async (path, options = null) => {
  const ref = adminDB.collection(path);
  return handleCollectionData(ref, options);
};

export const fetchDocument = async (path) => {
  const ref = adminDB.doc(path);
  return handleDocumentData(ref);
};
