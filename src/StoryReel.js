import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return <div className="storyReel">
     <Story
    image="https://wallpaperaccess.com/full/55555.jpg"
   profileSrc="https://images.wunderweib.de/chris-evans-ich-mag-zaertliche-frauen,id=72b6ce6d,b=wunderweib,w=1600,h=,ca=14.67,0,81.33,100,rm=sk.jpeg"
      title="Captain"
    />

    <Story
    image="https://images.hdqwalls.com/download/thor-avengers-endgame-5y-1920x1080.jpg"
    profileSrc="https://www.shutterstock.com/image-photo/los-angeles-oct-10-chris-260nw-737867419.jpg"
    title="Thor"
    />

    <Story
    image="https://wallpapercave.com/wp/wp1885994.jpg"
    profileSrc="https://i.pinimg.com/originals/9e/ed/71/9eed71241bad03baf684bc4939891ec2.jpg"
    title="Hulk"
    />

    <Story
    image="https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
    profileSrc="https://cdn.justjared.com/wp-content/uploads/headlines/2021/03/scarlett-johansson-controversies.jpg"
    title="Widow"
    />
    <Story
    image="https://wallpapercave.com/wp/UcfxRVB.jpg"
    profileSrc="https://media.allure.com/photos/5d9df2a20b653500089da596/1:1/w_2000,h_2000,c_limit/tom-holland-hair-lede.jpg"
    title="Spiderman"
    />

  </div>;
}

export default StoryReel;
