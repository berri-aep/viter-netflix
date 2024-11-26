import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import SliderMovie from "./SliderMovie";



const Homepage = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className=" py-24 mt-20 bg-dark">
        <SliderMovie title="TV Shows" filter="TV Shows" />
        <SliderMovie title="Western Movie" filter="Western Movie" />
      </div>
    </>
  );
};

export default Homepage;
