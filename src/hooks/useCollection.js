import { useEffect, useRef, useState } from "react";
import { firebaseProject } from "../firebase/config";

export const useCollection = (collection,_query,_orderBy) => {
  const [error, setError] = useState(null);
  const [documents, setDocuments] = useState(null);

  // if we don't use a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call
  const query = useRef(_query).current
  const orderBy = useRef(_orderBy).current
  useEffect(() => {
    let ref = firebaseProject.collection(collection);
    if(query){
      ref = ref.where(...query)
    }
    if(orderBy){
      ref = ref.orderBy(...orderBy)
    }
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
  }, [collection,query]);

  return { error, documents };
};
