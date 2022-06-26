import React from "react";
import { CategoriesContainer, CategoriesTitle, CategoryItem, CategoryTitle, Image } from "../styles/CategoriesGalleryStyles";

const images = [
    {image:'https://www.soccerbible.com/media/118954/1-baiteze-nb-min.jpg',title:'new balance'},
    {image:'https://cdn.wallpapersafari.com/74/99/nRkogx.jpg',title:'crampoane'},
    {image:'https://wallpaper.dog/large/973071.jpg',title:'accesorii'},
    {image:'https://cutewallpaper.org/21/soccer-jersey-wallpaper/Football,-Soccer-jersey-builder-template-V.2.jpg',title:'pentru fani'},
    {image:'https://gfx.r-gol.com/media/res/products/9/95009/adidas-x-16-1-cage-s31918_1.png',title:'ghete de fotbal'},
    {image:'https://media.dfl.de/sites/2/2019/05/dflde_Derbystar-1200x675.jpg',title:'mingi de fotbal'},
    {image:'https://wallpapercave.com/wp/wp2461130.jpg',title:'manusi'},
    {image:'https://thumblr.uniid.it/blog_component/68873/4b1dfb4e99a5.jpg',title:'puma'},
    {image:'https://wallpaper.dog/large/241362.jpg',title:'adidas'}
    
]

function CategoriesGallery(){
    return <>
    <CategoriesTitle>Categorii</CategoriesTitle>
    <CategoriesContainer>
        {images.map((item,index)=>{
            return <CategoryItem key={index}>
            <Image src={item.image}/>
            <CategoryTitle>{item.title}</CategoryTitle>
        </CategoryItem>
        })}
    </CategoriesContainer>
    </>
}

export default CategoriesGallery;