import { doc, Firestore, getDoc as getDocFromFirebase } from "firebase/firestore";
const getDocument = () => {
    const { $firestore } = useNuxtApp();
    const db = $firestore as Firestore;
    const error = useState<string | null>("error", () => null);
    const loading = useState<boolean>("loading", () => false);

    const document = ref<any>(null);
    const getDoc = async (collectionName: string, docId: string) => {
        loading.value = true;
        error.value = null;
        try {
            let docRef = await doc(db, collectionName, docId)
            let docSnap = await getDocFromFirebase(docRef);
            if (docSnap.exists()) {
                loading.value = false;
                error.value = null;
                document.value = docSnap.data()
            } else {
                loading.value = false;
                error.value = 'Document does not exist.';
                console.error(error.value);
            }
        } catch (err) {
            console.error(err);
            loading.value = false;
            error.value = "Error happened while fetching data!";
        }
    };
    return { error, loading, getDoc, document };
};

export default getDocument;
