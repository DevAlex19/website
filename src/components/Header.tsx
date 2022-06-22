import React,{useState,useEffect} from "react";
import { faMagnifyingGlass,faPhoneFlip,faUser,
faCartShopping,faEnvelope,faArrowRightToBracket,
faRightToBracket,faKey } from '@fortawesome/free-solid-svg-icons'
import { HeaderContainer,Container,LogoContainer,HamburgerMenu,
BtnsContainer,InputContainer,Input,InputIcon,Icon,ContactContainer,
DropdownContact,PhoneContainer,DropdownIcon,MailContainer,Contact,
About,LoginContainer,LoginDropdown,ConnectContainer,RegisterContainer,PasswordContainer,
CartContainer,CartDropdown,EmptyCart,MenuContainer } from "../styles/HeaderStyles";
import Menu from "./Menu";

 


function Header(){
    let [menu,setMenu] = useState(false);

   
    return <Container>
        <HeaderContainer>
            <LogoContainer className='logo'>
                <span>4</span>sport
                <HamburgerMenu onClick={() => setMenu(!menu)}>
                    <div className={menu ? 'line1 active' : 'line1'}></div>
                    <div className={menu ? 'line2 active' : 'line2'}></div>
                    <div className={menu ? 'line3 active' : 'line3'}></div>
                </HamburgerMenu>
            </LogoContainer>
            <BtnsContainer>
                <InputContainer>
                    <Input placeholder="Caută..."/>
                    <InputIcon icon={faMagnifyingGlass} />
                </InputContainer>
                <ContactContainer>
                    <Icon icon={faPhoneFlip}/>
                    <p>Contact</p>
                    <DropdownContact>
                        <PhoneContainer>
                            <DropdownIcon icon={faPhoneFlip}/>
                            <div>
                                <p>1234 123 123</p>
                                <p>Lu-Vi: 10:00 - 17:00</p>
                            </div>
                        </PhoneContainer>
                        <MailContainer>
                            <DropdownIcon icon={faEnvelope}/>
                            <p>info@loremipsum.ro</p>
                        </MailContainer>
                        <Contact>Contact</Contact>
                        <About>Despre noi</About>
                    </DropdownContact>
                </ContactContainer>
                <LoginContainer>
                    <Icon icon={faUser}/>
                    <LoginDropdown>
                        <ConnectContainer>
                            <DropdownIcon icon={faArrowRightToBracket}/>
                            <p>Conectare</p>
                        </ConnectContainer>
                        <RegisterContainer>
                            <DropdownIcon icon={faRightToBracket}/>
                            <p>Inregistreaza-te</p>
                        </RegisterContainer>
                        <PasswordContainer>
                            <DropdownIcon icon={faKey}/>
                            <p>Ai uitat parola?</p>
                        </PasswordContainer>
                    </LoginDropdown>
                </LoginContainer>
                <CartContainer>
                    <Icon icon={faCartShopping}/>
                    <CartDropdown>
                        <EmptyCart>
                            <p>Cosul este gol.</p>
                            <div>
                                <img src='https://i1.t4s.cz/products/ah7383-400/nike-vapor-12-academy-ic-181831-ah7383-400s1.png'/>
                                <p>Vezi ultimele modele de ghete de fotbal.</p>
                            </div>
                        </EmptyCart>
                    </CartDropdown>
                </CartContainer>
            </BtnsContainer>
        </HeaderContainer>
        <MenuContainer>
            <Menu menu={menu} setMenu={setMenu}/>
        </MenuContainer>
    </Container>
    
}

export default Header;