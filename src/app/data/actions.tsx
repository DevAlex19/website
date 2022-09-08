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
const products = collection(db, "products");
const orders = collection(db, "orders");
const reviews = collection(db, "reviews");

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
        const { firstName, lastName, registerEmail } = docs.docs[0].data();
        const updateUser = doc(db, "users", docs.docs[0].id);

        await updateDoc(updateUser, { registerPassword: loginPassword });
        localStorage.setItem("Auth Token", docs.docs[0].id);

        return {
          firstName,
          lastName,
          registerEmail,
          registerPassword: loginPassword,
        };
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

export const getProducts = createAsyncThunk(
  "login/getProducts",
  async (category: string[]) => {
    if (category.length === 1) {
      const q = query(
        products,
        where("tip produs", "==", category[0].replaceAll("-", " "))
      );
      const productsList = await getDocs(q);
      const result = productsList.docs.map((product: any) => product.data());
      return result;
    }
    if (category.length === 2) {
      if (
        ["modele de ghete", "categorie", "personalizate", "marca"].includes(
          category[1].replaceAll("-", " ")
        ) &&
        category[0].replaceAll("-", " ") === "ghete de fotbal"
      ) {
        const q = query(products, where("tip produs", "==", "ghete de fotbal"));
        const productsList = await getDocs(q);
        const result = productsList.docs.map((product: any) => product.data());
        return result;
      }
      if (category[1].replaceAll("-", " ") === "cluburi") {
        const q = query(products, where("tip produs", "==", "pentru fani"));
        const productsList = await getDocs(q);
        const result = productsList.docs.map((product: any) => product.data());
        return result;
      }
      if (
        category[0].replaceAll("-", " ") === "portari" &&
        category[1].replaceAll("-", " ") === "marca"
      ) {
        const q = query(products, where("tip produs", "==", "portari"));
        const productsList = await getDocs(q);
        const result = productsList.docs.map((product: any) => product.data());
        return result;
      }
      if (
        category[0].replaceAll("-", " ") === "mingi de fotbal" &&
        category[1].replaceAll("-", " ") === "marca"
      ) {
        const q = query(products, where("tip produs", "==", "mingi de fotbal"));
        const productsList = await getDocs(q);
        const result = productsList.docs.map((product: any) => product.data());
        return result;
      }

      const q = query(
        products,
        where("tip produs", "==", category[0].replaceAll("-", " ")),
        where("categorie", "==", category[1].replaceAll("-", " "))
      );

      const productsList = await getDocs(q);
      const result = productsList.docs.map((product: any) => product.data());
      return result;
    }
    if (category.length === 3) {
      const categories = category.map((i) => i.replaceAll("-", " "));
      if (categories[1] === "modele de ghete") {
        const q = query(
          products,
          where("tip produs", "==", "ghete de fotbal"),
          where("model", "==", categories[2])
        );

        const productsList = await getDocs(q);
        const result = productsList.docs.map((product: any) => product.data());
        return result;
      }
      if (categories[1] === "categorie") {
        const q = query(
          products,
          where("tip produs", "==", "ghete de fotbal"),
          where("categorie", "==", categories[2])
        );

        const productsList = await getDocs(q);
        const result = productsList.docs.map((product: any) => product.data());
        return result;
      }
      if (categories[1] === "personalizate") {
        const q = query(
          products,
          where("tip produs", "==", "ghete de fotbal"),
          where("personalizate", "==", categories[2])
        );

        const productsList = await getDocs(q);
        const result = productsList.docs.map((product: any) => product.data());
        return result;
      }
      if (categories[1] === "marca" && categories[0] === "ghete de fotbal") {
        const q = query(
          products,
          where("tip produs", "==", "ghete de fotbal"),
          where("producator", "==", categories[2])
        );

        const productsList = await getDocs(q);
        const result = productsList.docs.map((product: any) => product.data());
        return result;
      }
      if (categories[1] === "cluburi") {
        const q = query(
          products,
          where("tip produs", "==", "pentru fani"),
          where("echipa", "==", categories[2])
        );

        const productsList = await getDocs(q);
        const result = productsList.docs.map((product: any) => product.data());
        return result;
      }
      if (categories[1] === "tricouri") {
        const q = query(
          products,
          where("tip produs", "==", "pentru fani"),
          where("echipa", "==", categories[2]),
          where("categorie", "==", "tricouri")
        );

        const productsList = await getDocs(q);
        const result = productsList.docs.map((product: any) => product.data());
        return result;
      }
      if (categories[1] === "hanorace") {
        const q = query(
          products,
          where("tip produs", "==", "pentru fani"),
          where("echipa", "==", categories[2]),
          where("categorie", "==", "hanorace")
        );

        const productsList = await getDocs(q);
        const result = productsList.docs.map((product: any) => product.data());
        return result;
      }
      if (categories[0] === "pentru fani") {
        const q = query(
          products,
          where("tip produs", "==", "pentru fani"),
          where("categorie", "==", categories[2])
        );

        const productsList = await getDocs(q);
        const result = productsList.docs.map((product: any) => product.data());
        return result;
      }
      if (categories[0] === "imbracaminte") {
        const q = query(
          products,
          where("producator", "==", categories[2]),
          where("categorie", "==", categories[1])
        );

        const productsList = await getDocs(q);
        const result = productsList.docs.map((product: any) => product.data());
        return result;
      }
      if (categories[0] === "mingi de fotbal" && categories[1] === "sala") {
        const q = query(
          products,
          where("producator", "==", categories[2]),
          where("categorie", "==", categories[1])
        );

        const productsList = await getDocs(q);
        const result = productsList.docs.map((product: any) => product.data());
        return result;
      }
      if (
        categories[0] === "mingi de fotbal" &&
        categories[1] === "pentru iarba"
      ) {
        const q = query(
          products,
          where("dimensiune", "==", categories[2].replaceAll(" ", "")),
          where("categorie", "==", categories[1])
        );

        const productsList = await getDocs(q);
        const result = productsList.docs.map((product: any) => product.data());
        return result;
      }
      if (categories[0] === "mingi de fotbal" && categories[1] === "marca") {
        const q = query(
          products,
          where("producator", "==", categories[2]),
          where("tip produs", "==", categories[0])
        );

        const productsList = await getDocs(q);
        const result = productsList.docs.map((product: any) => product.data());
        return result;
      }
      if (categories[0] === "portari" && categories[1] === "manusi") {
        const q = query(
          products,
          where("categorie", "==", categories[1]),
          where("tip produs", "==", categories[0]),
          where("producator", "==", categories[2])
        );

        const productsList = await getDocs(q);
        const result = productsList.docs.map((product: any) => product.data());
        return result;
      }
      if (categories[0] === "portari" && categories[1] === "imbracaminte") {
        const q = query(
          products,
          where("categorie", "==", categories[1]),
          where("tip produs", "==", categories[0]),
          where("subcategorie", "==", categories[2])
        );

        const productsList = await getDocs(q);
        const result = productsList.docs.map((product: any) => product.data());
        return result;
      }
      if (categories[0] === "portari" && categories[1] === "marca") {
        const q = query(
          products,
          where("producator", "==", categories[2]),
          where("tip produs", "==", categories[0])
        );

        const productsList = await getDocs(q);
        const result = productsList.docs.map((product: any) => product.data());
        return result;
      }

      const q = query(
        products,
        where("categorie", "==", categories[1]),
        where("tip produs", "==", categories[0]),
        where("subcategorie", "==", categories[2])
      );

      const productsList = await getDocs(q);
      const result = productsList.docs.map((product: any) => product.data());
      return result;
    }

    return [];
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

export const getProduct = createAsyncThunk(
  "login/getProduct",
  async (param: any) => {
    const q = query(products, where("nume", "==", param));
    const productsList = await getDocs(q);
    const result = productsList.docs.map((product: any) => product.data());
    return result;
  }
);

export const sendOrder = createAsyncThunk(
  "login/sendOrder",
  async (data: any) => {
    const result = await addDoc(orders, {
      ...data,
      date: Date.now(),
      number: Math.floor(Math.random() * 10000),
    });
    return;
  }
);

export const getOrders = createAsyncThunk(
  "login/getOrders",
  async (email: any) => {
    const q = query(orders, where("email", "==", email));
    const productsList = await getDocs(q);
    const result = productsList.docs.map((product: any) => product.data());
    return result;
  }
);

export const getSliderProducts = createAsyncThunk(
  "login/getSliderProducts",
  async () => {
    const q = query(products, where("tip produs", "==", "mingi de fotbal"));
    const productsList = await getDocs(q);
    const result = productsList.docs.map((product: any) => product.data());
    return result.slice(0, 9);
  }
);

export const addReview = createAsyncThunk(
  "login/addReview",
  async (data: any) => {
    const q = query(products, where("nume", "==", data.product));
    const productsList = await getDocs(q);
    const productId: any = productsList.docs[0].id;
    const updateProduct = doc(db, "products", productId);
    await updateDoc(updateProduct, { review: [...data.review] });
    return;
  }
);
