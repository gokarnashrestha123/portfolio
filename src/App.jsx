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
      {/* HOME */}
      <section id="home">
        <Header />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="overview">
        <Overview />
      </section>

      <section id="portfolio">
        <PortfolioDisplay />
      </section>

      <section id="testimonial">
        <Testimonial />
      </section>

      <section id="blog">
        <BlogSide />
      </section>

      <section id="pricing">
        <PricingandPackage />
      </section>
    </div>
  );
};

export default App;
