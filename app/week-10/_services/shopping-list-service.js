import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    const items = [];
    const itemsCollectionRef = collection(db, `users/${userId}/items`);
    const querySnapshot = await getDocs(itemsCollectionRef);
    querySnapshot.forEach((doc) => {
        items.push({
            name: doc.data().name,
            quantity: doc.data().quantity,
            category: doc.data().category,
        });
    });
    return items;
}

export async function addItem(userId, item) {
    const itemsCollectionRef = collection(db, `users/${userId}/items`);
    const newItemRef = await addDoc(itemsCollectionRef, item);
    return newItemRef.id;
}