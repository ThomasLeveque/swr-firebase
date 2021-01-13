const formatDoc = (doc: any) => ({ id: doc.id, ...doc.data() });

const handleCollectionOptions = (ref: any, options: any) => {
  if (!options) {
    return ref;
  }

  if (typeof options === 'string') {
    options = JSON.parse(options);
  }

  if (options.orderBy) {
    ref = ref.orderBy(...options.orderBy);
  }
  if (options.where) {
    ref = ref.where(...options.where);
  }

  return ref;
};

export const handleCollectionData = async (
  ref: any,
  options: any
): Promise<any> => {
  ref = handleCollectionOptions(ref, options);
  const snapshot = await ref.get();
  const data = snapshot.docs.map(formatDoc);
  return data;
};

export const handleDocumentData = async (ref: any): Promise<any> => {
  const doc = await ref.get();
  const data = formatDoc(doc);
  return data;
};
