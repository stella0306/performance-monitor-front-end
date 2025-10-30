import React from "react";
import HomeHeader from "./components/HomeHeader";
import HomeButtons from "./components/HomeButtons";
import HomeFooter from "./components/HomeFooter";
import "./styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <HomeHeader />
      <HomeButtons />
      <HomeFooter />
    </div>
  );
};

export default Home;
