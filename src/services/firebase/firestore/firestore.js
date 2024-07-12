import { db } from "../config";
import {
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  collection as firestoreCollection,
  getDoc,
} from "firebase/firestore";
import { uploadFile, deleteFile } from "../storage/storage";

export async function getCollection(collectionName) {
  try {
    const querySnapshot = await getDocs(
      firestoreCollection(db, collectionName)
    );
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    console.error("Error getting collection: ", error);
    return [];
  }
}

export async function addDocument(collectionName, data) {
  if (collectionName === "products") {
    if (!data.main_image) {
      console.error("No se puede agregar el documento: imagen principal vacía");
      return false;
    }
    try {
      const url = await uploadFile(
        data.main_image,
        `images/${data.main_image.name}`
      );
      await addDoc(firestoreCollection(db, collectionName), {
        ...data,
        main_image: url,
      });
      return true;
    } catch (error) {
      console.error("Error adding document: ", error);
      return false;
    }
  }

  if (collectionName === "categories") {
    if (!data.image) {
      console.error("No se puede agregar el documento: imagen principal vacía");
      return false;
    }
    try {
      const url = await uploadFile(data.image, `images/${data.image.name}`);
      await addDoc(firestoreCollection(db, collectionName), {
        ...data,
        image: url,
      });
      return true;
    } catch (error) {
      console.error("Error adding document: ", error);
      return false;
    }
  }

  if (collectionName === "banners") {
    if (!data.responsive_banner || !data.banner) {
      console.error("No se puede agregar el documento: imagen principal vacía");
      return false;
    }

    try {
      const url = await uploadFile(
        data.responsive_banner,
        `images/${data.responsive_banner.name}`
      );
      const url2 = await uploadFile(data.banner, `images/${data.banner.name}`);
      await addDoc(firestoreCollection(db, collectionName), {
        ...data,
        responsive_banner: url,
        banner: url2,
      });
      return true;
    } catch (error) {
      console.error("Error adding document: ", error);
      return false;
    }
  }
}

export async function deleteDocument(collectionName, id) {
  if (!id) {
    console.error("No se puede eliminar el documento: ID vacío");
    return false;
  }

  try {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      if (collectionName === "products") {
        const { main_image } = docSnap.data();
        await deleteFile(main_image);
      } else if (collectionName === "categories") {
        const { image } = docSnap.data();
        await deleteFile(image);
      } else if (collectionName === "banners") {
        const { responsive_banner, banner } = docSnap.data();
        await deleteFile(responsive_banner);
        await deleteFile(banner);
      }

      await deleteDoc(docRef);
      return true;
    } else {
      console.error("No such document!");
      return false;
    }
  } catch (error) {
    console.error("Error deleting document: ", error);
    return false;
  }
}

export async function updateDocument(collectionName, id, data) {
  try {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      console.error("No such document!");
      return false;
    }

    if (collectionName === "products") {
      const { main_image } = docSnap.data();

      if (data.main_image && data.main_image.name !== main_image) {
        await deleteFile(main_image);
        const url = await uploadFile(
          data.main_image,
          `images/${data.main_image.name}`
        );
        data.main_image = url;
      } else {
        data.main_image = main_image;
      }
    } else if (collectionName === "categories") {
      const { image } = docSnap.data();

      if (data.image && data.image.name !== image) {
        await deleteFile(image);
        const url = await uploadFile(data.image, `images/${data.image.name}`);
        data.image = url;
      } else {
        data.image = image;
      }
    } else if (collectionName === "banners") {
      const { responsive_banner, banner } = docSnap.data();

      if (
        data.responsive_banner &&
        data.responsive_banner.name !== responsive_banner
      ) {
        await deleteFile(responsive_banner);
        console.log(data.responsive_banner);
        const url = await uploadFile(
          data.responsive_banner,
          `images/${data.responsive_banner.name}`
        );
        data.responsive_banner = url;
      } else {
        data.responsive_banner = responsive_banner;
      }

      if (data.banner && data.banner.name !== banner) {
        await deleteFile(banner);
        const url = await uploadFile(data.banner, `images/${data.banner.name}`);
        data.banner = url;
      } else {
        data.banner = banner;
      }
    }

    await updateDoc(docRef, data);
    return true;
  } catch (error) {
    console.error("Error updating document: ", error);
    return false;
  }
}
