import React from "react";
import Header from "../../components/Header/Header";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Teacher from "./components/Teacher/Teacher";
import style from "./Homepage.module.scss";

const Homepage = () => {
  return (
    <>
      <div className={`${style.background}`}>
        <Header />
        <HeroBanner />
      </div>
      <Teacher />
    </>
  );
};

export default Homepage;
