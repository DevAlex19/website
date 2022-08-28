import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updatePassword,
} from "firebase/auth";

const users = collection(db, "users");

export const addUser = createAsyncThunk("login/addUsers", async (data: any) => {
  const { registerEmail, registerPassword } = data;
  try {
    await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
    const result = await addDoc(users, data);

    localStorage.setItem("Auth Token", result.id);
    return data;
  } catch (e) {}

  return {
    firstName: "",
    lastName: "",
    registerEmail: "",
    registerPassword: "",
  };
});

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async (data: any) => {
    const { loginEmail, loginPassword } = data;
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      const user = res.user;
      const q = query(users, where("registerEmail", "==", user.email));
      const docs = await getDocs(q);
      if (docs.docs.length > 0) {
        const { firstName, lastName, registerEmail, registerPassword } =
          docs.docs[0].data();

        localStorage.setItem("Auth Token", docs.docs[0].id);
        return { firstName, lastName, registerEmail, registerPassword };
      }
    } catch (e) {}

    return {
      firstName: "",
      lastName: "",
      registerEmail: "",
      registerPassword: "",
    };
  }
);

export const getUser = createAsyncThunk(
  "login/getUser",
  async (data: string) => {
    const usersList = await getDocs(users);
    const checkUser = usersList.docs.find((user) => user.id === data);
    return { ...checkUser?.data() };
  }
);

export const updateUser = createAsyncThunk(
  "login/updateUser",
  async (data: any) => {
    const { newPassword, firstName, lastName, town, city, phone, address, id } =
      data;

    const user = doc(db, "users", id);
    if (newPassword) {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          await updatePassword(currentUser, newPassword);
        }
        await updateDoc(user, { registerPassword: newPassword });
        return { registerPassword: newPassword };
      } catch (e) {}
      return {};
    }
    await updateDoc(user, {
      firstName,
      lastName,
      town,
      city,
      phone,
      address,
    });
    return {
      firstName,
      lastName,
      town,
      city,
      phone,
      address,
    };
  }
);
