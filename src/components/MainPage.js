import React from "react";
import RickAndMortImage from "../assests/rickandmortymain.webp";

const MainPage = () => {
  return (
    <div className="flex h-screen w-full">
      <img className="w-full" src={RickAndMortImage} alt="RickAndMortImage" />
    </div>
  );
};

export default MainPage;
