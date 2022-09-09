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
import { query, collection, where, getDocs } from "firebase/firestore";
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
import { auth, db } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { generateRoute } from "../app/helperFunctions/generateRoute";
import Cart from "./Cart";
import { useForm } from "react-hook-form";
import SearchDropdown from "./SearchDropdown";

const debounce = (callback: any, wait: number) => {
  let timeoutId: any = null;
  return (...args: any) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
};

function Header() {
  const [menu, setMenu] = useState(false);
  const [searchDropdown, setSearchDropdown] = useState(false);
  const [searchResult, setResult] = useState([]);
  const [input, setInput] = useState("");

  const { registerEmail } = useSelector(
    (state: initialStateType) => state.userLogin.user
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const searchProducts = debounce(async (name: string) => {
    const products = collection(db, "products");
    const productsList = await getDocs(products);
    const result: any = productsList.docs
      .map((product: any) => product.data())
      .filter((product) =>
        product.nume.toLowerCase().includes(name.toLowerCase())
      );
    setResult(result);
  }, 500);

  return (
    <Container>
      <HeaderContainer>
        <LogoContainer className="logo">
          <Link to="/">
            <span>4</span>sport
          </Link>
          <HamburgerMenu onClick={() => setMenu(!menu)}>
            <div className={"line1"}></div>
            <div className={"line2"}></div>
            <div className={"line3"}></div>
          </HamburgerMenu>
        </LogoContainer>
        <BtnsContainer>
          <InputContainer>
            <Input
              value={input}
              placeholder="Caută..."
              onChange={(e: any) => {
                setInput(e.target.value);
                setSearchDropdown(true);
                searchProducts(e.target.value);
              }}
            />
            <InputIcon
              icon={faMagnifyingGlass}
              onClick={() => {
                navigate(`/search/${input}`);
              }}
            />
            <SearchDropdown
              modal={searchDropdown}
              setModal={setSearchDropdown}
              searchResult={searchResult}
              input={input}
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
                  <Link to="/dashboard/orders">{registerEmail}</Link>
                </UserDropdownContainer>
                <Divide />
                <UserDropdownContainer>
                  <DropdownIcon icon={faBoxOpen} />
                  <Link to="/dashboard/orders">Comenzile mele</Link>
                </UserDropdownContainer>
                <UserDropdownContainer>
                  <DropdownIcon icon={faUserGear} />
                  <Link to="/dashboard/settings">Date utilizator</Link>
                </UserDropdownContainer>
                <UserDropdownContainer>
                  <DropdownIcon icon={faGear} />
                  <Link to="/dashboard/password">Schimba parola</Link>
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
