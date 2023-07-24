import { Firestore, addDoc, collection } from "firebase/firestore";
const useCollection = (collectionName: string) => {
  const { $firestore } = useNuxtApp();
  const error = ref<string | null>(null);
  const loading = ref<boolean>(false);
  const saveDoc = async (document: any) => {
    loading.value = true;
    error.value = null;
    try {
      const collRef = collection($firestore as Firestore, collectionName);
      const res = await addDoc(collRef, document);
      loading.value = false;
      error.value = null;
      return res;
    } catch (err) {
      console.error(err);
      loading.value = false;
      error.value = "Error happened while saving data!";
    }
  };
  return { error, loading, saveDoc };
};

export default useCollection;
