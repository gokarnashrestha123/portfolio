import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/services";
import Overview from "./components/Overview";
import PortfolioDisplay from "./components/PortfolioDisplay";
import Testimonial from "./components/Testimonial";
import BlogSide from "./components/BlogSide";
import PricingandPackage from "./components/PricingandPackage";

const App = () => {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Services></Services>
      <Overview></Overview>
      <PortfolioDisplay></PortfolioDisplay>
      <Testimonial></Testimonial>
      <BlogSide></BlogSide>
      <PricingandPackage></PricingandPackage>
    </div>
  );
};

export default App;
