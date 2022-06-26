import React from "react";
import Gallery from "./Gallery";
import Grid from "./Grid";
import SliderGallery from "./SliderGallery";
import CategoriesGallery from "./CategoriesGallery";
import Footer from "./Footer";

function Main(){
    return <>
        <Gallery/>
        <Grid/>
        <SliderGallery/>
        <CategoriesGallery/>
        <Footer/>
    </>
}

export default Main;