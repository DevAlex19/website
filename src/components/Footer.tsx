import React from "react";
import { FooterContainer, FooterFlexContainer, FooterLink, MenuContainer, SocialLinks, SocialsContainer } from "../styles/FooterStyles";
import { faFacebook,faInstagram,faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer(){
    return <FooterContainer>
        <FooterFlexContainer>
            <MenuContainer>
                <FooterLink to="">Ghete de fotbal</FooterLink>
                <FooterLink to="">Modele de ghete</FooterLink>
                <FooterLink to="">Personalizate</FooterLink>
            </MenuContainer>
            <MenuContainer>
                <FooterLink to="">Pentru fani</FooterLink>
                <FooterLink to="">Tricouri</FooterLink>
                <FooterLink to="">Hanorace</FooterLink>
                <FooterLink to="">Mingi</FooterLink>
            </MenuContainer>
            <MenuContainer>
                <FooterLink to="">Imbracaminte</FooterLink>
                <FooterLink to="">Tricouri</FooterLink>
                <FooterLink to="">Hanorace</FooterLink>
                <FooterLink to="">Jambiere</FooterLink>
                <FooterLink to="">Sorturi</FooterLink>
                <FooterLink to="">Sosete</FooterLink>
                <FooterLink to="">Treninguri</FooterLink>
            </MenuContainer>
            <MenuContainer>
                <FooterLink to="">Mingi de fotbal</FooterLink>
                <FooterLink to="">Genti si rucsacuri</FooterLink>
                <FooterLink to="">Aparatori fotbal</FooterLink>
                <FooterLink to="">Antrenament</FooterLink>
                <FooterLink to="">Portari</FooterLink>
            </MenuContainer>
            <MenuContainer>
                <FooterLink to="/about">Despre noi</FooterLink>
                <FooterLink to="">+1234 123 123</FooterLink>
                <FooterLink to="">info@loremipsum.ro</FooterLink>
            </MenuContainer>
        </FooterFlexContainer>
        <SocialsContainer>
            <SocialLinks icon={faFacebook}/>
            <SocialLinks icon={faInstagram}/>
            <SocialLinks icon={faTwitter}/>
        </SocialsContainer>
    </FooterContainer>
}

export default Footer;