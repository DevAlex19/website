import { createSelector } from "@reduxjs/toolkit";
import { initialStateType } from "../reducer/loginSlice";

export const filterProducts = createSelector(
  (state: initialStateType, filters: any) => {
    return { state: state, filters: filters };
  },
  ({ state, filters }) => {
    let products = [...state.products.list];

    if (filters.colors.length > 0) {
      products = products.filter((item) =>
        filters.colors.includes(item.culoare)
      );
    }
    if (filters.dimensiune.length > 0) {
      products = products.filter((item) => {
        const sizes = item.marimi.map((item: any) => item.marime);
        return filters.dimensiune.find((item: any) => sizes.includes(item));
      });
    }
    if (filters.producator.length > 0) {
      products = products.filter((item) =>
        filters.producator.includes(item.producator)
      );
    }

    if (filters.sort.toLowerCase() === "cele mai vechi") {
      products = products.sort((a, b) => b.data - a.data);
    }
    if (filters.sort.toLowerCase() === "cele mai noi") {
      products = products.sort((a, b) => a.data - b.data);
    }
    if (filters.sort.toLowerCase() === "pret crescator") {
      products = products.sort((a, b) => a.pret - b.pret);
    }
    if (filters.sort.toLowerCase() === "pret descrescator") {
      products = products.sort((a, b) => b.pret - a.pret);
    }

    products = products.filter(
      (item) => item.pret >= filters.price.min && item.pret <= filters.price.max
    );
    return products;
  }
);
