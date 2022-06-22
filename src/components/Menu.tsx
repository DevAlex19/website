import React,{useState,useEffect} from "react";
import { MenuLinksContainer,LinkContainer,Dropdown,MainLink,Links,LinkItem,Expand } from "../styles/MenuStyles";
import { faPlus,faMinus } from "@fortawesome/free-solid-svg-icons";

export type MenuTypes = {
    menu:boolean;
    setMenu:(menu:boolean) => void;
}


function Menu({menu,setMenu}:MenuTypes){

    let [expand,setExpand] = useState([false,false,false,false,false,false]);
    let [width,setWidth] = useState(window.innerWidth);

    useEffect(()=>{
        function handleResize(){
            setWidth(window.innerWidth);
            if(window.innerWidth >= 860){
                setMenu(false);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[])
   

    function expandMenu(index:number){
        let arr = [...expand];
        arr[index] = !arr[index];
        setExpand(arr);
    }

    return <MenuLinksContainer menu={menu}>
        <LinkContainer>
            <MainLink onClick={()=>expandMenu(0)} to="/soj">Ghete de fotbal 
            {expand[0] ? <Expand icon={faMinus} /> : <Expand icon={faPlus} />}
            </MainLink>
            
            <Dropdown open={width <= 860 ? expand[0] : false} >
                <Links>
                    <LinkItem to="/soj">Modele de ghete</LinkItem>
                    <LinkItem to="/soj">Crampoane</LinkItem>
                    <LinkItem to="/soj">Ghete fotbal sintetic</LinkItem>
                    <LinkItem to="/soj">Futsal</LinkItem>
                    <LinkItem to="/soj">Adidasi alergare</LinkItem>
                    <LinkItem to="/soj">Adidasi lifestyle</LinkItem>
                    <LinkItem to="/soj">Slapi</LinkItem>
                </Links>
                <Links>
                    <LinkItem to="/soj">Categorie</LinkItem>
                    <LinkItem to="/soj">Pentru Incepatori</LinkItem>
                    <LinkItem to="/soj">Pentru Amatori</LinkItem>
                    <LinkItem to="/soj">Pentru Semi-Profesionisti</LinkItem>
                    <LinkItem to="/soj">Pentru Profesionisti</LinkItem>
                </Links>
                <Links>
                    <LinkItem to="/soj">Personalizate</LinkItem>
                    <LinkItem to="/soj">Ronaldo</LinkItem>
                    <LinkItem to="/soj">Messi</LinkItem>
                    <LinkItem to="/soj">Neymar</LinkItem>
                    <LinkItem to="/soj">Lewandowski</LinkItem>
                    <LinkItem to="/soj">Pogba</LinkItem>
                    <LinkItem to="/soj">Dybala</LinkItem>
                    <LinkItem to="/soj">Mbappe</LinkItem>
                    <LinkItem to="/soj">Sterling</LinkItem>
                </Links>
                <Links>
                    <LinkItem to="/soj">Marca</LinkItem>
                    <LinkItem to="/soj">Adidas</LinkItem>
                    <LinkItem to="/soj">Nike</LinkItem>
                    <LinkItem to="/soj">Puma</LinkItem>
                    <LinkItem to="/soj">New Balance</LinkItem>
                    <LinkItem to="/soj">Mizuno</LinkItem>
                    <LinkItem to="/soj">Joma</LinkItem>
                    <LinkItem to="/soj">Diadora</LinkItem>
                    <LinkItem to="/soj">Under Armour</LinkItem>
                </Links>
            </Dropdown>
        </LinkContainer>
        <LinkContainer>
            <MainLink onClick={()=>expandMenu(1)} to="/soj">Pentru fani
                {expand[1] ? <Expand icon={faMinus} /> : <Expand icon={faPlus} />}
            </MainLink>
            <Dropdown open={width <= 860 ? expand[1] : false}>
            <Links>
                    <LinkItem to="/soj">Cluburi</LinkItem>
                    <LinkItem to="/soj">FC Barcelona</LinkItem>
                    <LinkItem to="/soj">Paris Saint Germain</LinkItem>
                    <LinkItem to="/soj">Manchester United</LinkItem>
                    <LinkItem to="/soj">Liverpool FC</LinkItem>
                    <LinkItem to="/soj">Bayern Munchen</LinkItem>
                    <LinkItem to="/soj">Real Madrid</LinkItem>
                    <LinkItem to="/soj">Chelsea FC</LinkItem>
                    <LinkItem to="/soj">Manchester United</LinkItem>
                    <LinkItem to="/soj">Juventus FC</LinkItem>
                    <LinkItem to="/soj">Manchester City</LinkItem>
                    <LinkItem to="/soj">Arsenal FC</LinkItem>
                    <LinkItem to="/soj">Inter Milano</LinkItem>
                    <LinkItem to="/soj">Ac Milan</LinkItem>
                    <LinkItem to="/soj">Tottenham Hotspur</LinkItem>
                    <LinkItem to="/soj">Atletico Madrid</LinkItem>
                    <LinkItem to="/soj">FCSB</LinkItem>
                </Links>
                <Links>
                    <LinkItem to="/soj">Tricouri</LinkItem>
                    <LinkItem to="/soj">FC Barcelona</LinkItem>
                    <LinkItem to="/soj">Paris Saint Germain</LinkItem>
                    <LinkItem to="/soj">Manchester United</LinkItem>
                    <LinkItem to="/soj">Liverpool FC</LinkItem>
                    <LinkItem to="/soj">Bayern Munchen</LinkItem>
                    <LinkItem to="/soj">Real Madrid</LinkItem>
                    <LinkItem to="/soj">Chelsea FC</LinkItem>
                    <LinkItem to="/soj">Manchester United</LinkItem>
                    <LinkItem to="/soj">Juventus FC</LinkItem>
                    <LinkItem to="/soj">Manchester City</LinkItem>
                    <LinkItem to="/soj">Arsenal FC</LinkItem>
                    <LinkItem to="/soj">Inter Milano</LinkItem>
                    <LinkItem to="/soj">Ac Milan</LinkItem>
                    <LinkItem to="/soj">Tottenham Hotspur</LinkItem>
                    <LinkItem to="/soj">Atletico Madrid</LinkItem>
                    <LinkItem to="/soj">FCSB</LinkItem>
                </Links>
                <Links>
                    <LinkItem to="/soj">Hanorace</LinkItem>
                    <LinkItem to="/soj">FC Barcelona</LinkItem>
                    <LinkItem to="/soj">Paris Saint Germain</LinkItem>
                    <LinkItem to="/soj">Manchester United</LinkItem>
                    <LinkItem to="/soj">Liverpool FC</LinkItem>
                    <LinkItem to="/soj">Bayern Munchen</LinkItem>
                    <LinkItem to="/soj">Real Madrid</LinkItem>
                    <LinkItem to="/soj">Chelsea FC</LinkItem>
                    <LinkItem to="/soj">Manchester United</LinkItem>
                </Links>
                <Links>
                    <LinkItem to="/soj">Mingi</LinkItem>
                    <LinkItem to="/soj">Nationala Romaniei</LinkItem>
                    <LinkItem to="/soj">Toate</LinkItem>
                    <LinkItem to="/soj">Accesorii</LinkItem>
                </Links>
            </Dropdown>
        </LinkContainer>
        <LinkContainer>
            <MainLink onClick={()=>expandMenu(2)} to="/soj">Imbracaminte
                {expand[2] ? <Expand icon={faMinus} /> : <Expand icon={faPlus} />}
            </MainLink>
            <Dropdown open={width <= 860 ? expand[2] : false}>
            <Links>
                    <LinkItem to="/soj">Tricouri de fotbal</LinkItem>
                    <LinkItem to="/soj">Adidas</LinkItem>
                    <LinkItem to="/soj">Nike</LinkItem>
                    <LinkItem to="/soj">Puma</LinkItem>
                    <LinkItem to="/soj">New Balance</LinkItem>
                    <LinkItem to="/soj">Joma</LinkItem>
                    <LinkItem to="/soj">Altele</LinkItem>
            </Links>
            <Links>
                    <LinkItem to="/soj">Jambiere de fotbal</LinkItem>
                    <LinkItem to="/soj">Adidas</LinkItem>
                    <LinkItem to="/soj">Nike</LinkItem>
                    <LinkItem to="/soj">Puma</LinkItem>
                    <LinkItem to="/soj">New Balance</LinkItem>
                    <LinkItem to="/soj">Joma</LinkItem>
                    <LinkItem to="/soj">Altele</LinkItem>
            </Links>
            <Links>
                    <LinkItem to="/soj">Sorturi de fotbal</LinkItem>
                    <LinkItem to="/soj">Adidas</LinkItem>
                    <LinkItem to="/soj">Nike</LinkItem>
                    <LinkItem to="/soj">Puma</LinkItem>
                    <LinkItem to="/soj">New Balance</LinkItem>
                    <LinkItem to="/soj">Joma</LinkItem>
                    <LinkItem to="/soj">Altele</LinkItem>
            </Links>
            <Links>
                    <LinkItem to="/soj">Sosete de fotbal</LinkItem>
                    <LinkItem to="/soj">Adidas</LinkItem>
                    <LinkItem to="/soj">Nike</LinkItem>
                    <LinkItem to="/soj">Puma</LinkItem>
                    <LinkItem to="/soj">New Balance</LinkItem>
                    <LinkItem to="/soj">Joma</LinkItem>
                    <LinkItem to="/soj">Altele</LinkItem>
            </Links>
            <Links>
                    <LinkItem to="/soj">Hanorace de fotbal</LinkItem>
                    <LinkItem to="/soj">Adidas</LinkItem>
                    <LinkItem to="/soj">Nike</LinkItem>
                    <LinkItem to="/soj">Puma</LinkItem>
                    <LinkItem to="/soj">New Balance</LinkItem>
                    <LinkItem to="/soj">Joma</LinkItem>
                    <LinkItem to="/soj">Altele</LinkItem>
            </Links>
            <Links>
                    <LinkItem to="/soj">Pantaloni de fotbal</LinkItem>
                    <LinkItem to="/soj">Adidas</LinkItem>
                    <LinkItem to="/soj">Nike</LinkItem>
                    <LinkItem to="/soj">Puma</LinkItem>
                    <LinkItem to="/soj">New Balance</LinkItem>
                    <LinkItem to="/soj">Joma</LinkItem>
                    <LinkItem to="/soj">Altele</LinkItem>
            </Links>
            <Links>
                    <LinkItem to="/soj">Treninguri de fotbal</LinkItem>
                    <LinkItem to="/soj">Adidas</LinkItem>
                    <LinkItem to="/soj">Nike</LinkItem>
                    <LinkItem to="/soj">Puma</LinkItem>
                    <LinkItem to="/soj">New Balance</LinkItem>
                    <LinkItem to="/soj">Joma</LinkItem>
                    <LinkItem to="/soj">Altele</LinkItem>
            </Links>
            </Dropdown>
        </LinkContainer>
        <LinkContainer>
            <MainLink onClick={()=>expandMenu(3)} to="/soj">Mingi de fotbal
                {expand[3] ? <Expand icon={faMinus} /> : <Expand icon={faPlus} />}
            </MainLink>
            <Dropdown open={width <= 860 ? expand[3] : false}>
            <Links>
                    <LinkItem to="/soj">Pentru iarba</LinkItem>
                    <LinkItem to="/soj">Senior - Dimensiunea 5</LinkItem>
                    <LinkItem to="/soj">Junior - Dimensiunea 4</LinkItem>
                    <LinkItem to="/soj">Copii - Dimensiunea 3</LinkItem>
                    <LinkItem to="/soj">Mini - Dimensiunea 1</LinkItem>
            </Links>
            <Links>
                    <LinkItem to="/soj">Sala</LinkItem>
                    <LinkItem to="/soj">Adidas</LinkItem>
                    <LinkItem to="/soj">Nike</LinkItem>
                    <LinkItem to="/soj">Select</LinkItem>
                    <LinkItem to="/soj">Puma</LinkItem>
            </Links>
            <Links>
                    <LinkItem to="/soj">Marca</LinkItem>
                    <LinkItem to="/soj">Adidas</LinkItem>
                    <LinkItem to="/soj">Nike</LinkItem>
                    <LinkItem to="/soj">Select</LinkItem>
                    <LinkItem to="/soj">Puma</LinkItem>
                    <LinkItem to="/soj">New Balance</LinkItem>
                    <LinkItem to="/soj">Joma</LinkItem>
                    <LinkItem to="/soj">Altele</LinkItem>
            </Links>
            </Dropdown>
        </LinkContainer>
        <LinkContainer>
            <MainLink onClick={()=>expandMenu(4)} to="/soj">Accesorii
             {expand[4] ? <Expand icon={faMinus} /> : <Expand icon={faPlus} />}
            </MainLink>
            <Dropdown open={width <= 860 ? expand[4] : false}>
            <Links>
                    <LinkItem to="/soj">Genti si rucsacuri</LinkItem>
                    <LinkItem to="/soj">Genti</LinkItem>
                    <LinkItem to="/soj">Rucsacuri</LinkItem>
                    <LinkItem to="/soj">Saci</LinkItem>
                    <LinkItem to="/soj">Borsete</LinkItem>
            </Links>
            <Links>
                    <LinkItem to="/soj">Antrenament</LinkItem>
                    <LinkItem to="/soj">Conuri</LinkItem>
                    <LinkItem to="/soj">Scari de antrenament</LinkItem>
                    <LinkItem to="/soj">Maiouri</LinkItem>
                    <LinkItem to="/soj">Jaloane</LinkItem>
                    <LinkItem to="/soj">Garduri</LinkItem>
                    <LinkItem to="/soj">Altele</LinkItem>
            </Links>
            <Links>
                    <LinkItem to="/soj">Aparatori fotbal</LinkItem>
                    <LinkItem to="/soj">Tibia</LinkItem>
                    <LinkItem to="/soj">Genunchi</LinkItem>
                    <LinkItem to="/soj">Cot</LinkItem>
                    <LinkItem to="/soj">Altele</LinkItem>
            </Links>
            </Dropdown>
        </LinkContainer>
        <LinkContainer>
            <MainLink onClick={()=>expandMenu(5)} to="/soj">Portari
            {expand[5] ? <Expand icon={faMinus} /> : <Expand icon={faPlus} />}
            </MainLink>
            <Dropdown open={width <= 860 ? expand[5] : false}>
            <Links>
                    <LinkItem to="/soj">Manusi</LinkItem>
                    <LinkItem to="/soj">Reusch</LinkItem>
                    <LinkItem to="/soj">Uhlsport</LinkItem>
                    <LinkItem to="/soj">4keepers</LinkItem>
                    <LinkItem to="/soj">Regio</LinkItem>
                    <LinkItem to="/soj">Adidas</LinkItem>
                    <LinkItem to="/soj">Nike</LinkItem>
                    <LinkItem to="/soj">Puma</LinkItem>
            </Links>
            <Links>
                    <LinkItem to="/soj">Imbracaminte</LinkItem>
                    <LinkItem to="/soj">Bluze</LinkItem>
                    <LinkItem to="/soj">Tricouri</LinkItem>
                    <LinkItem to="/soj">Pantaloni</LinkItem>
                    <LinkItem to="/soj">Sorturi</LinkItem>
            </Links>
            <Links>
                    <LinkItem to="/soj">Marca</LinkItem>
                    <LinkItem to="/soj">Reusch</LinkItem>
                    <LinkItem to="/soj">Uhlsport</LinkItem>
                    <LinkItem to="/soj">4keepers</LinkItem>
                    <LinkItem to="/soj">Regio</LinkItem>
                    <LinkItem to="/soj">Adidas</LinkItem>
                    <LinkItem to="/soj">Nike</LinkItem>
                    <LinkItem to="/soj">Puma</LinkItem>
            </Links>
            </Dropdown>
        </LinkContainer>
    </MenuLinksContainer>
}


export default Menu;