import React from "react";

function CartSummary({ items = [], onUpdateQuantity, onResetCart }) {
  if (items.length === 0) {
    return (
      <div
        className="cart-summary"
        style={{
          border: "1px solid #e0d5c8",
          borderRadius: "12px",
          padding: "1.25rem",
          marginTop: "1rem",
        }}
      >
        <h3>YOUR BOX SUMMARY</h3>
        <p>Your box is empty. Pick a bake from the menu above!</p>
        <button type="button" onClick={onResetCart} style={{ marginTop: "0.5rem" }}>
          Restore Default Box
        </button>
      </div>
    );
  }

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const freeDeliveryThreshold = 3000;
  const deliveryFee = subtotal >= freeDeliveryThreshold ? 0 : 200;
  const total = subtotal + deliveryFee;

  return (
    <div
      className="cart-summary"
      style={{
        border: "1px solid #e0d5c8",
        borderRadius: "12px",
        padding: "1.25rem",
        marginTop: "1rem",
      }}
    >
      <h3>YOUR BOX SUMMARY</h3>

      <ul style={{ listStyle: "none", padding: 0, margin: "1rem 0" }}>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.6rem 0",
              borderBottom: "1px solid #f0e8df",
              gap: "0.75rem",
            }}
          >
            <div style={{ flex: 1 }}>
              <strong>{item.name}</strong>
              <div style={{ fontSize: "0.85rem", opacity: 0.8 }}>
                Rs {item.price} each
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <button
                type="button"
                onClick={() => onUpdateQuantity(item.id, -1)}
                aria-label={`Decrease ${item.name}`}
                style={{ width: "28px", height: "28px", cursor: "pointer" }}
              >
                -
              </button>
              <span style={{ minWidth: "24px", textAlign: "center", fontWeight: 600 }}>
                {item.quantity}
              </span>
              <button
                type="button"
                onClick={() => onUpdateQuantity(item.id, 1)}
                aria-label={`Increase ${item.name}`}
                style={{ width: "28px", height: "28px", cursor: "pointer" }}
              >
                +
              </button>
            </div>

            <span style={{ minWidth: "75px", textAlign: "right", fontWeight: 600 }}>
              Rs {item.price * item.quantity}
            </span>
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.75rem" }}>
        <span>Subtotal</span>
        <span>Rs {subtotal}</span>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.4rem" }}>
        <span>Delivery</span>
        <span>{deliveryFee === 0 ? "Free delivery" : `Rs ${deliveryFee}`}</span>
      </div>

      {subtotal < freeDeliveryThreshold ? (
        <p style={{ fontSize: "0.9rem", marginTop: "0.6rem" }}>
          Add Rs {freeDeliveryThreshold - subtotal} more for <strong>Free delivery</strong>!
        </p>
      ) : (
        <p style={{ fontSize: "0.9rem", marginTop: "0.6rem", color: "green" }}>
          You unlocked <strong>Free delivery</strong>!
        </p>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "0.75rem",
          paddingTop: "0.75rem",
          borderTop: "2px solid #e0d5c8",
          fontSize: "1.1rem",
        }}
      >
        <strong>Total</strong>
        <strong>Rs {total}</strong>
      </div>
    </div>
  );
}

export default CartSummary;