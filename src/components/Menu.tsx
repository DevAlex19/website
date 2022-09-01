import React, { useState, useEffect } from "react";
import {
  MenuLinksContainer,
  LinkContainer,
  Dropdown,
  MainLink,
  Links,
  LinkItem,
  Expand,
} from "../styles/MenuStyles";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { MenuLinks } from "../app/data/menuLinks";
import { generateRoute } from "../app/helperFunctions/generateRoute";
import { useLocation } from "react-router-dom";

export type MenuTypes = {
  menu: boolean;
  setMenu: (menu: boolean) => void;
};

function Menu({ menu, setMenu }: MenuTypes) {
  let [expand, setExpand] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const { pathname } = useLocation();
  let [width, setWidth] = useState(window.innerWidth);
  const [navbar, setNavbar] = useState(true);

  useEffect(() => {
    setNavbar(false);
  }, [pathname]);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      if (window.innerWidth >= 860) {
        setMenu(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function expandMenu(index: number) {
    let arr = [...expand];
    arr[index] = !arr[index];
    setExpand(arr);
  }

  return (
    <MenuLinksContainer menu={menu}>
      <LinkContainer open={navbar} onMouseOver={() => setNavbar(true)}>
        <MainLink
          onClick={() => expandMenu(0)}
          to={menu ? generateRoute(["/"]) : generateRoute(["ghete de fotbal"])}
        >
          Ghete de fotbal
          {expand[0] ? <Expand icon={faMinus} /> : <Expand icon={faPlus} />}
        </MainLink>

        <Dropdown open={width <= 860 ? expand[0] : false}>
          <Links>
            {MenuLinks["ghete de fotbal"]["modele de ghete"].map(
              (item: any) => {
                return (
                  <LinkItem
                    key={item}
                    to={
                      item === "modele de ghete"
                        ? generateRoute(["ghete de fotbal", "modele de ghete"])
                        : generateRoute([
                            "ghete de fotbal",
                            "modele de ghete",
                            item,
                          ])
                    }
                  >
                    {item}
                  </LinkItem>
                );
              }
            )}
          </Links>
          <Links>
            {MenuLinks["ghete de fotbal"]["categorie"].map((item: any) => {
              return (
                <LinkItem
                  key={item}
                  to={
                    item === "categorie"
                      ? generateRoute(["ghete de fotbal", "categorie"])
                      : generateRoute(["ghete de fotbal", "categorie", item])
                  }
                >
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks["ghete de fotbal"]["personalizate"].map((item) => {
              return (
                <LinkItem
                  key={item}
                  to={
                    item === "personalizate"
                      ? generateRoute(["ghete de fotbal", "personalizate"])
                      : generateRoute([
                          "ghete de fotbal",
                          "personalizate",
                          item,
                        ])
                  }
                >
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks["ghete de fotbal"]["marca"].map((item) => {
              return (
                <LinkItem
                  key={item}
                  to={
                    item === "marca"
                      ? generateRoute(["ghete de fotbal", "marca"])
                      : generateRoute(["ghete de fotbal", "marca", item])
                  }
                >
                  {item}
                </LinkItem>
              );
            })}
          </Links>
        </Dropdown>
      </LinkContainer>
      <LinkContainer open={navbar} onMouseOver={() => setNavbar(true)}>
        <MainLink
          onClick={() => expandMenu(1)}
          to={menu ? generateRoute(["/"]) : generateRoute(["pentru fani"])}
        >
          Pentru fani
          {expand[1] ? <Expand icon={faMinus} /> : <Expand icon={faPlus} />}
        </MainLink>
        <Dropdown open={width <= 860 ? expand[1] : false}>
          <Links>
            {MenuLinks["pentru fani"]["cluburi"].map((item: any) => {
              return (
                <LinkItem
                  key={item}
                  to={
                    item === "cluburi"
                      ? generateRoute(["pentru fani", "cluburi"])
                      : generateRoute(["pentru fani", "cluburi", item])
                  }
                >
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks["pentru fani"]["tricouri"].map((item: any) => {
              return (
                <LinkItem
                  key={item}
                  to={
                    item === "tricouri"
                      ? generateRoute(["pentru fani", "tricouri"])
                      : generateRoute(["pentru fani", "tricouri", item])
                  }
                >
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks["pentru fani"]["hanorace"].map((item: any) => {
              return (
                <LinkItem
                  key={item}
                  to={
                    item === "hanorace"
                      ? generateRoute(["pentru fani", "hanorace"])
                      : generateRoute(["pentru fani", "hanorace", item])
                  }
                >
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks["pentru fani"]["mingi"].map((item: any) => {
              return (
                <LinkItem
                  key={item}
                  to={
                    item === "mingi"
                      ? generateRoute(["pentru fani", "mingi"])
                      : generateRoute(["pentru fani", "mingi", item])
                  }
                >
                  {item}
                </LinkItem>
              );
            })}
          </Links>
        </Dropdown>
      </LinkContainer>
      <LinkContainer open={navbar} onMouseOver={() => setNavbar(true)}>
        <MainLink
          onClick={() => expandMenu(2)}
          to={menu ? generateRoute(["/"]) : generateRoute(["imbracaminte"])}
        >
          Imbracaminte
          {expand[2] ? <Expand icon={faMinus} /> : <Expand icon={faPlus} />}
        </MainLink>
        <Dropdown open={width <= 860 ? expand[2] : false}>
          <Links>
            {MenuLinks.imbracaminte["tricouri de fotbal"].map((item: any) => {
              return (
                <LinkItem
                  key={item}
                  to={
                    item === "tricouri de fotbal"
                      ? generateRoute(["imbracaminte", "tricouri de fotbal"])
                      : generateRoute([
                          "imbracaminte",
                          "tricouri de fotbal",
                          item,
                        ])
                  }
                >
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks.imbracaminte["jambiere de fotbal"].map((item: any) => {
              return (
                <LinkItem
                  key={item}
                  to={
                    item === "jambiere de fotbal"
                      ? generateRoute(["imbracaminte", "jambiere de fotbal"])
                      : generateRoute([
                          "imbracaminte",
                          "jambiere de fotbal",
                          item,
                        ])
                  }
                >
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks.imbracaminte["sorturi de fotbal"].map((item: any) => {
              return (
                <LinkItem
                  key={item}
                  to={
                    item === "sorturi de fotbal"
                      ? generateRoute(["imbracaminte", "sorturi de fotbal"])
                      : generateRoute([
                          "imbracaminte",
                          "sorturi de fotbal",
                          item,
                        ])
                  }
                >
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks.imbracaminte["sosete de fotbal"].map((item: any) => {
              return (
                <LinkItem
                  key={item}
                  to={
                    item === "sosete de fotbal"
                      ? generateRoute(["imbracaminte", "sosete de fotbal"])
                      : generateRoute([
                          "imbracaminte",
                          "sosete de fotbal",
                          item,
                        ])
                  }
                >
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks.imbracaminte["hanorace de fotbal"].map((item: any) => {
              return (
                <LinkItem
                  key={item}
                  to={
                    item === "hanorace de fotbal"
                      ? generateRoute(["imbracaminte", "hanorace de fotbal"])
                      : generateRoute([
                          "imbracaminte",
                          "hanorace de fotbal",
                          item,
                        ])
                  }
                >
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks.imbracaminte["pantaloni de fotbal"].map((item: any) => {
              return (
                <LinkItem
                  key={item}
                  to={
                    item === "pantaloni de fotbal"
                      ? generateRoute(["imbracaminte", "pantaloni de fotbal"])
                      : generateRoute([
                          "imbracaminte",
                          "pantaloni de fotbal",
                          item,
                        ])
                  }
                >
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks.imbracaminte["treninguri de fotbal"].map((item: any) => {
              return (
                <LinkItem
                  key={item}
                  to={
                    item === "treninguri de fotbal"
                      ? generateRoute(["imbracaminte", "treninguri de fotbal"])
                      : generateRoute([
                          "imbracaminte",
                          "treninguri de fotbal",
                          item,
                        ])
                  }
                >
                  {item}
                </LinkItem>
              );
            })}
          </Links>
        </Dropdown>
      </LinkContainer>
      <LinkContainer open={navbar} onMouseOver={() => setNavbar(true)}>
        <MainLink
          onClick={() => expandMenu(3)}
          to={menu ? generateRoute(["/"]) : generateRoute(["mingi de fotbal"])}
        >
          Mingi de fotbal
          {expand[3] ? <Expand icon={faMinus} /> : <Expand icon={faPlus} />}
        </MainLink>
        <Dropdown open={width <= 860 ? expand[3] : false}>
          <Links>
            {MenuLinks["mingi de fotbal"]["pentru iarba"].map((item: any) => {
              return (
                <LinkItem
                  key={item}
                  to={
                    item === "pentru iarba"
                      ? generateRoute(["mingi de fotbal", "pentru iarba"])
                      : generateRoute(["mingi de fotbal", "pentru iarba", item])
                  }
                >
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks["mingi de fotbal"]["sala"].map((item: any) => {
              return (
                <LinkItem
                  key={item}
                  to={
                    item === "sala"
                      ? generateRoute(["mingi de fotbal", "sala"])
                      : generateRoute(["mingi de fotbal", "sala", item])
                  }
                >
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks["mingi de fotbal"]["marca"].map((item: any) => {
              return (
                <LinkItem
                  key={item}
                  to={
                    item === "marca"
                      ? generateRoute(["mingi de fotbal", "marca"])
                      : generateRoute(["mingi de fotbal", "marca", item])
                  }
                >
                  {item}
                </LinkItem>
              );
            })}
          </Links>
        </Dropdown>
      </LinkContainer>
      <LinkContainer open={navbar} onMouseOver={() => setNavbar(true)}>
        <MainLink
          onClick={() => expandMenu(4)}
          to={menu ? generateRoute(["/"]) : generateRoute(["accesorii"])}
        >
          Accesorii
          {expand[4] ? <Expand icon={faMinus} /> : <Expand icon={faPlus} />}
        </MainLink>
        <Dropdown open={width <= 860 ? expand[4] : false}>
          <Links>
            {MenuLinks["accesorii"]["genti si rucsacuri"].map((item: any) => {
              return (
                <LinkItem
                  key={item}
                  to={
                    item === "genti si rucsacuri"
                      ? generateRoute(["accesorii", "genti si rucsacuri"])
                      : generateRoute(["accesorii", "genti si rucsacuri", item])
                  }
                >
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks["accesorii"]["antrenament"].map((item: any) => {
              return (
                <LinkItem
                  key={item}
                  to={
                    item === "antrenament"
                      ? generateRoute(["accesorii", "antrenament"])
                      : generateRoute(["accesorii", "antrenament", item])
                  }
                >
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks["accesorii"]["aparatori fotbal"].map((item: any) => {
              return (
                <LinkItem
                  key={item}
                  to={
                    item === "aparatori fotbal"
                      ? generateRoute(["accesorii", "aparatori fotbal"])
                      : generateRoute(["accesorii", "aparatori fotbal", item])
                  }
                >
                  {item}
                </LinkItem>
              );
            })}
          </Links>
        </Dropdown>
      </LinkContainer>
      <LinkContainer open={navbar} onMouseOver={() => setNavbar(true)}>
        <MainLink
          onClick={() => expandMenu(5)}
          to={menu ? generateRoute(["/"]) : generateRoute(["portari"])}
        >
          Portari
          {expand[5] ? <Expand icon={faMinus} /> : <Expand icon={faPlus} />}
        </MainLink>
        <Dropdown open={width <= 860 ? expand[5] : false}>
          <Links>
            {MenuLinks["portari"]["manusi"].map((item: any) => {
              return (
                <LinkItem
                  key={item}
                  to={
                    item === "manusi"
                      ? generateRoute(["portari", "manusi"])
                      : generateRoute(["portari", "manusi", item])
                  }
                >
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks["portari"]["imbracaminte"].map((item: any) => {
              return (
                <LinkItem
                  key={item}
                  to={
                    item === "imbracaminte"
                      ? generateRoute(["portari", "imbracaminte"])
                      : generateRoute(["portari", "imbracaminte", item])
                  }
                >
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks["portari"]["marca"].map((item: any) => {
              return (
                <LinkItem
                  key={item}
                  to={
                    item === "marca"
                      ? generateRoute(["portari", "marca"])
                      : generateRoute(["portari", "marca", item])
                  }
                >
                  {item}
                </LinkItem>
              );
            })}
          </Links>
        </Dropdown>
      </LinkContainer>
    </MenuLinksContainer>
  );
}

export default Menu;
