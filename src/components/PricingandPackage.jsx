import React from "react";
import "./PricingandPackage.css"; // Import the CSS file

const pricingandPackages = [
  {
    title: "Basic Package",
    price: "$500",
    description:
      "A comprehensive system to manage school operations. A comprehensive system to manage school operations.",
  },
  {
    title: "Standard Package",
    price: "$1000",
    description: "A complete solution for managing school operations.",
  },
  {
    title: "Premium Package",
    price: "$2000",
    description: "An advanced system with all features and support.",
  },
];

const PricingandPackage = () => {
  return (
    <div className="pricing-section">
      <div>
        <h3>My Price</h3>
        <h1>Pricing and Package</h1>
      </div>
      <div className="packages-container">
        {pricingandPackages.map((item, index) => (
          <div className="package-card" key={index}>
            <h1>{item.title}</h1>
            <p>Price: {item.price}</p>
            <p>{item.description}</p>
            <button>GET STARTED</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingandPackage;
