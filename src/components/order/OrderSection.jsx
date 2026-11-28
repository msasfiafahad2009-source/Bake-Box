import React from "react";
import CartSummary from "./CartSummary";

function OrderSection({ items, onUpdateQuantity, onResetCart }) {
  return (
    <section
      id="order"
      className="order-section"
      style={{ maxWidth: "650px", margin: "2rem auto", padding: "1.5rem" }}
    >
      <h2>ORDER YOUR BOX</h2>
      <CartSummary
        items={items}
        onUpdateQuantity={onUpdateQuantity}
        onResetCart={onResetCart}
      />
    </section>
  );
}

export default OrderSection;