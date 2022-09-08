import React from "react";
import {
  FooterContainer,
  FooterFlexContainer,
  FooterLink,
  MenuContainer,
  SocialLinks,
  SocialsContainer,
} from "../styles/FooterStyles";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <FooterContainer>
      <FooterFlexContainer>
        <MenuContainer>
          <FooterLink to="/ghete-de-fotbal">Ghete de fotbal</FooterLink>
          <FooterLink to="/ghete-de-fotbal/modele-de-ghete">
            Modele de ghete
          </FooterLink>
          <FooterLink to="/ghete-de-fotbal/personalizate">
            Personalizate
          </FooterLink>
        </MenuContainer>
        <MenuContainer>
          <FooterLink to="/pentru-fani">Pentru fani</FooterLink>
          <FooterLink to="/pentru-fani/tricouri">Tricouri</FooterLink>
          <FooterLink to="/pentru-fani/hanorace">Hanorace</FooterLink>
          <FooterLink to="/pentru-fani/mingi">Mingi</FooterLink>
        </MenuContainer>
        <MenuContainer>
          <FooterLink to="/imbracaminte">Imbracaminte</FooterLink>
          <FooterLink to="/imbracaminte/tricouri-de-fotbal">
            Tricouri
          </FooterLink>
          <FooterLink to="/imbracaminte/hanorace-de-fotbal">
            Hanorace
          </FooterLink>
          <FooterLink to="/imbracaminte/jambiere-de-fotbal">
            Jambiere
          </FooterLink>
          <FooterLink to="/imbracaminte/sorturi-de-fotbal">Sorturi</FooterLink>
          <FooterLink to="/imbracaminte/sosete-de-fotbal">Sosete</FooterLink>
          <FooterLink to="/imbracaminte/treninguri-de-fotbal">
            Treninguri
          </FooterLink>
        </MenuContainer>
        <MenuContainer>
          <FooterLink to="/mingi-de-fotbal">Mingi de fotbal</FooterLink>
          <FooterLink to="/accesorii/genti-si-rucsacuri">
            Genti si rucsacuri
          </FooterLink>
          <FooterLink to="/accesorii/aparator-fotbal">
            Aparatori fotbal
          </FooterLink>
          <FooterLink to="/accesorii/antrenament">Antrenament</FooterLink>
          <FooterLink to="/portari">Portari</FooterLink>
        </MenuContainer>
        <MenuContainer>
          <FooterLink to="/about">Despre noi</FooterLink>
          <FooterLink to="">+1234 123 123</FooterLink>
          <FooterLink to="">info@loremipsum.ro</FooterLink>
        </MenuContainer>
      </FooterFlexContainer>
      <SocialsContainer>
        <SocialLinks icon={faFacebook} />
        <SocialLinks icon={faInstagram} />
        <SocialLinks icon={faTwitter} />
      </SocialsContainer>
    </FooterContainer>
  );
}

export default Footer;
