import { db } from './firebase';

const waitFor = (time = 4000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

const handleCollectionOptions = (ref, options) => {
  if (!options) {
    return ref;
  }

  options = JSON.parse(options);

  if (options.orderBy) {
    ref = ref.orderBy(...options.orderBy);
  }
  if (options.where) {
    ref = ref.where(...options.where);
  }

  return ref;
};

export const fetchTotos = async (id, options = null) => {
  //TODO: INIT DB CLIENT OR ADMIN DEPEND ON THE WINDOW VALUE
  let ref = db.collection(id);
  ref = handleCollectionOptions(ref, options);
  const snapshot = await ref.get();
  const totos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return totos;
};
