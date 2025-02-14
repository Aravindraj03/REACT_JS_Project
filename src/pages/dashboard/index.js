import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Replace with your backend URL

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Listen for product updates from the server
    socket.on("productListUpdate", (newProducts) => {
      setProducts(newProducts);
    });

    return () => {
      socket.off("productListUpdate");
    };
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Product List</h1>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-img" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price}</p>
              <button className="buy-btn">Buy Now</button>
            </div>
          ))
        ) : (
          <p className="no-products">No products available</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
