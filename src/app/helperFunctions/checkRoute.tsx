import { MenuLinks } from "../data/menuLinks";
import { Navigate, useParams } from "react-router-dom";

function CheckRoute({ children }: any) {
  const { product } = useParams();
  function nestedObj(MenuLinks: any) {
    for (const i in MenuLinks) {
      if (typeof MenuLinks[i] === "object") {
        nestedObj(MenuLinks[i]);
      } else {
        if (MenuLinks[i].includes(product?.replaceAll("-", " "))) {
          return <>{children}</>;
        }
      }
    }
  }
  nestedObj(MenuLinks);
  //   if (product && Object.keys(MenuLinks).includes(product)) {
  //     console.log("ok");
  //   }
  return <>{children}</>;
}
export default CheckRoute;
