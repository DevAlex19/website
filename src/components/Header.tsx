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
import { Link } from "react-router-dom";

 


function Header(){
    let [menu,setMenu] = useState(false);

   
    return <Container>
        <HeaderContainer>
            <LogoContainer className='logo'>
                <Link to="/"><span>4</span>sport</Link>
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
                        <Contact><Link to='about'>Contact</Link></Contact>
                        <About><Link to='about'>Despre noi</Link></About>
                    </DropdownContact>
                </ContactContainer>
                <LoginContainer>
                    <Icon icon={faUser}/>
                    <LoginDropdown>
                        <ConnectContainer>
                            <DropdownIcon icon={faArrowRightToBracket}/>
                            <Link to='/login'>Conectare</Link>
                        </ConnectContainer>
                        <RegisterContainer>
                            <DropdownIcon icon={faRightToBracket}/>
                            <Link to='/login'>Inregistreaza-te</Link>
                        </RegisterContainer>
                        <PasswordContainer>
                            <DropdownIcon icon={faKey}/>
                            <Link to='/login'>Ai uitat parola?</Link>
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