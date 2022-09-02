import React, { useState } from "react";
import {
  faMagnifyingGlass,
  faPhoneFlip,
  faUser,
  faCartShopping,
  faEnvelope,
  faArrowRightToBracket,
  faRightToBracket,
  faKey,
  faUserCheck,
  faBoxOpen,
  faUserGear,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
  HeaderContainer,
  Container,
  LogoContainer,
  HamburgerMenu,
  BtnsContainer,
  InputContainer,
  Input,
  InputIcon,
  Icon,
  ContactContainer,
  DropdownContact,
  PhoneContainer,
  DropdownIcon,
  MailContainer,
  Contact,
  About,
  LoginContainer,
  LoginDropdown,
  ConnectContainer,
  RegisterContainer,
  PasswordContainer,
  CartContainer,
  CartDropdown,
  EmptyCart,
  MenuContainer,
  UserDropdownContainer,
  Divide,
} from "../styles/HeaderStyles";
import Menu from "./Menu";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { initialStateType, logOut } from "../app/reducer/loginSlice";
import { useAppDispatch } from "../app/store/store";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { generateRoute } from "../app/helperFunctions/generateRoute";
import Cart from "./Cart";
import { useForm } from "react-hook-form";
import SearchDropdown from "./SearchDropdown";

function Header() {
  const [menu, setMenu] = useState(false);
  const [searchDropdown, setSearchDropdown] = useState(false);
  const { registerEmail } = useSelector(
    (state: initialStateType) => state.userLogin.user
  );
  const { register, watch } = useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <HeaderContainer>
        <LogoContainer className="logo">
          <Link to="/">
            <span>4</span>sport
          </Link>
          <HamburgerMenu onClick={() => setMenu(!menu)}>
            <div className={menu ? "line1 active" : "line1"}></div>
            <div className={menu ? "line2 active" : "line2"}></div>
            <div className={menu ? "line3 active" : "line3"}></div>
          </HamburgerMenu>
        </LogoContainer>
        <BtnsContainer>
          <InputContainer>
            <Input
              {...register("search")}
              placeholder="Caută..."
              onChange={(e: any) => {
                if (e.target.value.length >= 3 && !searchDropdown) {
                  setSearchDropdown(true);
                }
              }}
            />
            <InputIcon
              icon={faMagnifyingGlass}
              onClick={() => {
                navigate(`/search/${watch().search}`);
              }}
            />
            <SearchDropdown
              modal={searchDropdown}
              setModal={setSearchDropdown}
            />
          </InputContainer>
          <ContactContainer>
            <Icon icon={faPhoneFlip} />
            <p>Contact</p>
            <DropdownContact>
              <PhoneContainer>
                <DropdownIcon icon={faPhoneFlip} />
                <div>
                  <p>1234 123 123</p>
                  <p>Lu-Vi: 10:00 - 17:00</p>
                </div>
              </PhoneContainer>
              <MailContainer>
                <DropdownIcon icon={faEnvelope} />
                <p>info@loremipsum.ro</p>
              </MailContainer>
              <Contact>
                <Link to="/about">Contact</Link>
              </Contact>
              <About>
                <Link to="/about">Despre noi</Link>
              </About>
            </DropdownContact>
          </ContactContainer>
          <LoginContainer>
            <Icon icon={registerEmail ? faUserCheck : faUser} />
            {registerEmail ? (
              <LoginDropdown>
                <UserDropdownContainer>
                  <DropdownIcon icon={faUser} />
                  <Link to="/dashboard">{registerEmail}</Link>
                </UserDropdownContainer>
                <Divide />
                <UserDropdownContainer>
                  <DropdownIcon icon={faBoxOpen} />
                  <Link to="/dashboard">Comenzile mele</Link>
                </UserDropdownContainer>
                <UserDropdownContainer>
                  <DropdownIcon icon={faUserGear} />
                  <Link to="/dashboard">Date utilizator</Link>
                </UserDropdownContainer>
                <UserDropdownContainer>
                  <DropdownIcon icon={faGear} />
                  <Link to="/dashboard">Schimba parola</Link>
                </UserDropdownContainer>
                <Divide />
                <UserDropdownContainer>
                  <DropdownIcon icon={faRightFromBracket} />
                  <p
                    onClick={async () => {
                      await signOut(auth);
                      dispatch(logOut());
                      navigate("/");
                    }}
                  >
                    Deconectare
                  </p>
                </UserDropdownContainer>
              </LoginDropdown>
            ) : (
              <LoginDropdown>
                <ConnectContainer>
                  <DropdownIcon icon={faArrowRightToBracket} />
                  <Link to="/login">Conectare</Link>
                </ConnectContainer>
                <RegisterContainer>
                  <DropdownIcon icon={faRightToBracket} />
                  <Link to="/login">Inregistreaza-te</Link>
                </RegisterContainer>
                <PasswordContainer>
                  <DropdownIcon icon={faKey} />
                  <Link to="/forgotPassword">Ai uitat parola?</Link>
                </PasswordContainer>
              </LoginDropdown>
            )}
          </LoginContainer>
          <CartContainer>
            <Icon icon={faCartShopping} />
            <CartDropdown>
              <Cart />
            </CartDropdown>
          </CartContainer>
        </BtnsContainer>
      </HeaderContainer>
      <MenuContainer>
        <Menu menu={menu} setMenu={setMenu} />
      </MenuContainer>
    </Container>
  );
}

export default Header;
