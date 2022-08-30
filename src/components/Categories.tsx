import {
  CategoriesContainer,
  CategoriesLinks,
} from "../styles/CategoriesStyles";
import { useLocation } from "react-router-dom";
import { MenuLinks } from "../app/data/menuLinks";
import { getCategories } from "../app/helperFunctions/getCategories";

function Categories() {
  const { pathname } = useLocation();
  const path = pathname
    .split("/")
    .map((i) => i.replaceAll("-", " "))
    .filter((i) => i);
  const lastEl = path[path.length - 1];
  const categories: string[] = getCategories(MenuLinks, lastEl);

  return (
    <>
      {categories.length > 0 ? (
        <CategoriesContainer>
          {categories.map((category, index) => (
            <CategoriesLinks
              key={index}
              to={`${pathname}/${category.replaceAll(" ", "-")}`}
            >
              {category.toUpperCase()}
            </CategoriesLinks>
          ))}
        </CategoriesContainer>
      ) : null}
    </>
  );
}

export default Categories;
