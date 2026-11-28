import React, { useState } from "react";
import "./App.css";
import ShopHeader from "./components/Layout/ShopHeader";
import StallInfo from "./components/Layout/StallInfo";
import Footer from "./components/Layout/Footer";
import ProductCard from "./components/products/ProductCard";
import ClassCard from "./components/timetable/ClassCard";
import ReviewSection from "./components/reviews/ReviewSection";
import OrderSection from "./components/order/OrderSection";
import { products } from "./data/products.js";
import { timetable } from "./data/timetable.js";
import { cartItems as initialCart } from "./data/cart.js";

function App() {
  const [cartItems, setCartItems] = useState(initialCart);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === product.name);
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prevItems,
        { id: Date.now(), name: product.name, price: product.price, quantity: 1 },
      ];
    });
  };

  const handleUpdateQuantity = (id, change) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + change } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleResetCart = () => setCartItems(initialCart);

  return (
    <div className="app">
      <ShopHeader />

      <main>
        <StallInfo />

        <section
          id="menu"
          className="products-section"
          style={{ maxWidth: "1050px", margin: "0 auto", padding: "2rem 1.25rem" }}
        >
          <h2>OUR BAKES</h2>
          {products.length === 0 ? (
            <p>No products today. Come back tomorrow!</p>
          ) : (
            <div
              className="products-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gridAutoRows: "1fr",
                gap: "1.5rem",
              }}
            >
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  inStock={product.inStock}
                  left={product.left}
                  image={product.image}
                  onAddToCart={() => handleAddToCart(product)}
                />
              ))}
            </div>
          )}
        </section>

        <section
          id="timetable"
          className="timetable-section"
          style={{ maxWidth: "1050px", margin: "0 auto", padding: "2rem 1.25rem" }}
        >
          <h2>BAKING TIMETABLE</h2>
          <div className="timetable-grid">
            {timetable.map((slot) => (
              <ClassCard
                key={slot.id}
                day={slot.day}
                time={slot.time}
                item={slot.item}
                status={slot.status}
              />
            ))}
          </div>
        </section>

        <ReviewSection />

        <OrderSection
          items={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onResetCart={handleResetCart}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;