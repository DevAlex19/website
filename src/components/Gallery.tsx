import React from "react";
import { GalleryContainer,ItemBtn,ItemContainer,Arrow, DotsContainer,Dot } from "../styles/GalleryStyles";
import { faChevronLeft,faChevronRight } from "@fortawesome/free-solid-svg-icons";

const images = ['https://wallpapercave.com/wp/wp2764244.jpg','https://wallpaperaccess.com/full/4581026.jpg',
'https://wallpapercave.com/wp/wp2461029.jpg','https://www.soccerbible.com/media/129821/hi-viz-fb-min.jpg'];


function Gallery(){
    return <>
        <GalleryContainer>
            {images.map((image,index) => {
                return <ItemContainer dataNumber={index + 1}>
                <img src={image}/>
                <ItemBtn to=''>Vezi produse</ItemBtn>
            </ItemContainer>
            })}
        <Arrow className="left" icon={faChevronLeft}></Arrow>
        <Arrow className="right" icon={faChevronRight}></Arrow>
    </GalleryContainer>
        <DotsContainer>
            <Dot/>
            <Dot className='ml'/>
            <Dot className='ml'/>
            <Dot className='ml'/>
        </DotsContainer>
    </>
}
export default Gallery;