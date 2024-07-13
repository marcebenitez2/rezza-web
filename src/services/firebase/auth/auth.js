// Archivo auth.ts
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";

export const loginAdmin = async (email, password) => {
  try {
    const data = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const userData = data.user;
    return userData;
  } catch (error) {
    throw error;
  }
};
