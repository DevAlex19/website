import React,{useState,useEffect} from "react";
import { GalleryContainer,ItemBtn,ItemContainer,Arrow, DotsContainer,Dot } from "../styles/GalleryStyles";
import { faChevronLeft,faChevronRight } from "@fortawesome/free-solid-svg-icons";

const images = ['https://wallpapercave.com/wp/wp2764244.jpg','https://wallpaperaccess.com/full/4581026.jpg',
'https://wallpapercave.com/wp/wp2461029.jpg','https://www.soccerbible.com/media/129821/hi-viz-fb-min.jpg'];


function Gallery(){
    let [activeSlide,setActiveSlide] = useState(0);
        console.log(activeSlide)
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(activeSlide === -3){
                setActiveSlide(0);
                return;
            }
            setActiveSlide(activeSlide - 1);
        },5000)
        return ()=> clearInterval(interval);
    },[activeSlide])

    return <>
        <GalleryContainer>
            {images.map((image,index) => {
                return <ItemContainer key={index} dataNumber={index + 1} slide={index + activeSlide}>
                <img src={image}/>
                <ItemBtn to=''>Vezi produse</ItemBtn>
            </ItemContainer>
            })}
        <Arrow className="left" onClick={()=>{
            if(activeSlide === 0){
                setActiveSlide(-3);
                return;
            }else{
                setActiveSlide(activeSlide + 1);
            }
            
        }} icon={faChevronLeft}></Arrow>
        <Arrow className="right" onClick={()=>{
             if(activeSlide === -3){
                setActiveSlide(0);
                return;
            }else{
            setActiveSlide(activeSlide - 1)
        }
        }} icon={faChevronRight}></Arrow>
    </GalleryContainer>
        <DotsContainer>
            {[1,2,3,4].map((item,index) =>{
               return <Dot key={index} onClick={() => setActiveSlide(-index)} active={Math.abs(activeSlide)} className={index > 0 ? 'ml' : ''}/>
            })}
        </DotsContainer>
    </>
}
export default Gallery;