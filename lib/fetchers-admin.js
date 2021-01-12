import { adminDB } from './firebase-admin';
import { handleCollectionData } from './util';

export const fetchCollection = async (path, options = null) => {
  let ref = adminDB.collection(path);
  return handleCollectionData(ref, options);
};
