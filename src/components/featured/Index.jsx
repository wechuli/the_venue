import React,{useState} from "react";
import Carousel from "./Carousel";
import CountDown from './CountDown'

const Index = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carousel />
      <div className="artist_name">
        <div className="wrapper">Ariana Grande</div>
      </div>
      <CountDown/>
    </div>
  );
};

export default Index;
