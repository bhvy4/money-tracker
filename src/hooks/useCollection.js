import { useEffect, useState } from "react";
import { firebaseProject } from "../firebase/config";

export const useCollection = (collection) => {
  const [error, setError] = useState(null);
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    let ref = firebaseProject.collection(collection);
    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          console.log(doc);
          results.push({ ...doc.data(), id: doc.id });
        });

        setDocuments(results);
        setError(null);
      },
      (err) => {
        setError("could not get the snapshot");
        console.log(err.message);
      }
    );

    return () => unsubscribe();
  }, [collection]);

  return { error, documents };
};
