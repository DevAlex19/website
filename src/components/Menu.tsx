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
  let [width, setWidth] = useState(window.innerWidth);

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
      <LinkContainer>
        <MainLink onClick={() => expandMenu(0)} to="/soj">
          Ghete de fotbal
          {expand[0] ? <Expand icon={faMinus} /> : <Expand icon={faPlus} />}
        </MainLink>

        <Dropdown open={width <= 860 ? expand[0] : false}>
          <Links>
            {MenuLinks["ghete de fotbal"]["modele de ghete"].map(
              (item: any) => {
                return (
                  <LinkItem key={item} to={generateRoute(item)}>
                    {item}
                  </LinkItem>
                );
              }
            )}
          </Links>
          <Links>
            {MenuLinks["ghete de fotbal"]["categorie"].map((item: any) => {
              return (
                <LinkItem key={item} to="/soj">
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks["ghete de fotbal"]["personalizate"].map((item) => {
              return (
                <LinkItem key={item} to="/soj">
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks["ghete de fotbal"]["marca"].map((item) => {
              return (
                <LinkItem key={item} to="/soj">
                  {item}
                </LinkItem>
              );
            })}
          </Links>
        </Dropdown>
      </LinkContainer>
      <LinkContainer>
        <MainLink onClick={() => expandMenu(1)} to="/soj">
          Pentru fani
          {expand[1] ? <Expand icon={faMinus} /> : <Expand icon={faPlus} />}
        </MainLink>
        <Dropdown open={width <= 860 ? expand[1] : false}>
          <Links>
            {MenuLinks["pentru fani"]["cluburi"].map((item: any) => {
              return (
                <LinkItem key={item} to="/soj">
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks["pentru fani"]["tricouri"].map((item: any) => {
              return (
                <LinkItem key={item} to="/soj">
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks["pentru fani"]["hanorace"].map((item: any) => {
              return (
                <LinkItem key={item} to="/soj">
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks["pentru fani"]["mingi"].map((item: any) => {
              return (
                <LinkItem key={item} to="/soj">
                  {item}
                </LinkItem>
              );
            })}
          </Links>
        </Dropdown>
      </LinkContainer>
      <LinkContainer>
        <MainLink onClick={() => expandMenu(2)} to="/soj">
          Imbracaminte
          {expand[2] ? <Expand icon={faMinus} /> : <Expand icon={faPlus} />}
        </MainLink>
        <Dropdown open={width <= 860 ? expand[2] : false}>
          <Links>
            {MenuLinks.imbracaminte["tricouri de fotbal"].map((item: any) => {
              return (
                <LinkItem key={item} to="/soj">
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks.imbracaminte["jambiere de fotbal"].map((item: any) => {
              return (
                <LinkItem key={item} to="/soj">
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks.imbracaminte["sorturi de fotbal"].map((item: any) => {
              return (
                <LinkItem key={item} to="/soj">
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks.imbracaminte["sosete de fotbal"].map((item: any) => {
              return (
                <LinkItem key={item} to="/soj">
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks.imbracaminte["hanorace de fotbal"].map((item: any) => {
              return (
                <LinkItem key={item} to="/soj">
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks.imbracaminte["pantaloni de fotbal"].map((item: any) => {
              return (
                <LinkItem key={item} to="/soj">
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks.imbracaminte["treninguri de fotbal"].map((item: any) => {
              return (
                <LinkItem key={item} to="/soj">
                  {item}
                </LinkItem>
              );
            })}
          </Links>
        </Dropdown>
      </LinkContainer>
      <LinkContainer>
        <MainLink onClick={() => expandMenu(3)} to="/soj">
          Mingi de fotbal
          {expand[3] ? <Expand icon={faMinus} /> : <Expand icon={faPlus} />}
        </MainLink>
        <Dropdown open={width <= 860 ? expand[3] : false}>
          <Links>
            {MenuLinks["mingi de fotbal"]["pentru iarba"].map((item: any) => {
              return (
                <LinkItem key={item} to="/soj">
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks["mingi de fotbal"]["sala"].map((item: any) => {
              return (
                <LinkItem key={item} to="/soj">
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks["mingi de fotbal"]["marca"].map((item: any) => {
              return (
                <LinkItem key={item} to="/soj">
                  {item}
                </LinkItem>
              );
            })}
          </Links>
        </Dropdown>
      </LinkContainer>
      <LinkContainer>
        <MainLink onClick={() => expandMenu(4)} to="/soj">
          Accesorii
          {expand[4] ? <Expand icon={faMinus} /> : <Expand icon={faPlus} />}
        </MainLink>
        <Dropdown open={width <= 860 ? expand[4] : false}>
          <Links>
            {MenuLinks["accesorii"]["genti si rucsacuri"].map((item: any) => {
              return (
                <LinkItem key={item} to="/soj">
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks["accesorii"]["antrenament"].map((item: any) => {
              return (
                <LinkItem key={item} to="/soj">
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks["accesorii"]["aparatori fotbal"].map((item: any) => {
              return (
                <LinkItem key={item} to="/soj">
                  {item}
                </LinkItem>
              );
            })}
          </Links>
        </Dropdown>
      </LinkContainer>
      <LinkContainer>
        <MainLink onClick={() => expandMenu(5)} to="/soj">
          Portari
          {expand[5] ? <Expand icon={faMinus} /> : <Expand icon={faPlus} />}
        </MainLink>
        <Dropdown open={width <= 860 ? expand[5] : false}>
          <Links>
            {MenuLinks["portari"]["manusi"].map((item: any) => {
              return (
                <LinkItem key={item} to="/soj">
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks["portari"]["imbracaminte"].map((item: any) => {
              return (
                <LinkItem key={item} to="/soj">
                  {item}
                </LinkItem>
              );
            })}
          </Links>
          <Links>
            {MenuLinks["portari"]["marca"].map((item: any) => {
              return (
                <LinkItem key={item} to="/soj">
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
