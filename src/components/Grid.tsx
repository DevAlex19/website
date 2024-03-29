import React from "react";
import { useNavigate } from "react-router-dom";
import { GridContainer, GridItem } from "../styles/GridStyles";

const images = [
  "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt9efe4fc82e19e370/62aaf63f51adaf2e03681604/Premier_League_ball_2022-23.jpg",
  "https://wallpaper.dog/large/5486087.jpg",
  "https://wallpaper.dog/large/17066044.jpg",
  "https://wallpapercave.com/wp/wp2461034.jpg",
];

function Grid() {
  const navigate = useNavigate();
  return (
    <GridContainer>
      {images.map((image, index) => {
        return (
          <GridItem
            key={index}
            onClick={() => {
              switch (index) {
                case 0:
                  navigate("/mingi-de-fotbal");
                  break;
                case 1:
                  navigate("/ghete-de-fotbal");
                  break;
                case 2:
                  navigate("/ghete-de-fotbal");
                  break;
                case 3:
                  navigate("/portari");
                  break;
              }
            }}
          >
            <img src={image} alt={image} />
          </GridItem>
        );
      })}
    </GridContainer>
  );
}

export default Grid;
