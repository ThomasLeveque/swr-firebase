import { clientDB } from './firebase';
import { handleCollectionData, handleDocumentData } from './utils';

export const fetchCollection = async (path, options = null) => {
  const ref = clientDB.collection(path);
  return handleCollectionData(ref, options);
};

export const fetchDocument = async (path) => {
  const ref = clientDB.doc(path);
  return handleDocumentData(ref);
};
