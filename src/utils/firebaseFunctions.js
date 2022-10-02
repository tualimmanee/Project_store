import {
    collection,
    doc,
    getDocs,
    orderBy,
    query,
    setDoc,
  } from "firebase/firestore";
  import { firestore } from "../firebase.config";
  
  // Saving new Item
  export const saveItem = async (data) => {
    await setDoc(doc(firestore, "materialItems", `${Date.now()}`), data, {
      merge: true,
    });
  };
  
  // getall material items
  export const getAllMaterialItems = async () => {
    const items = await getDocs(
      query(collection(firestore, "materialItems"), orderBy("id", "desc"))
    );
  
    return items.docs.map((doc) => doc.data());
  };
  