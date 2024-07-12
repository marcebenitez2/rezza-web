import { storage } from "../config";
import { ref, uploadBytes, getDownloadURL, deleteObject, getMetadata } from "firebase/storage";

export async function uploadFile(file, path) {
  try {
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  } catch (error) {
    console.error("Error uploading file: ", error);
    throw error;
  }
}

export async function deleteFile(path) {
  try {
    const storageRef = ref(storage, path);
    // Verificar si el archivo existe
    await getMetadata(storageRef);
    await deleteObject(storageRef);
    return true;
  } catch (error) {
    if (error.code === 'storage/object-not-found') {
      console.warn(`Archivo no encontrado en la ruta: ${path}`);
      return false; // Considera no lanzar un error si el archivo no existe
    }
    console.error("Error deleting file: ", error);
    throw error;
  }
}
