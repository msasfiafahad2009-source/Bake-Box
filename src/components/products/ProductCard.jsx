import React from "react";
import Badge from "./Badge";

function ProductCard({ name, price, inStock, left, image, onAddToCart }) {
  return (
    <article
      className="product-card"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        padding: "1rem",
        borderRadius: "12px",
        boxSizing: "border-box",
        gap: "0.75rem",
      }}
    >
      {image && (
        <img
          src={image}
          alt={name}
          className="product-image"
          style={{
            width: "100%",
            height: "165px",
            minHeight: "165px",
            maxHeight: "165px",
            objectFit: "cover",
            borderRadius: "8px",
            display: "block",
          }}
        />
      )}

      <div
        className="product-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "32px",
          gap: "0.5rem",
        }}
      >
        <h3 className="product-title" style={{ margin: 0, fontSize: "1.1rem" }}>
          {name}
        </h3>
        <span className="product-price" style={{ fontWeight: 600 }}>
          Rs {price}
        </span>
      </div>

      <div
        className="product-badge-slot"
        style={{
          height: "30px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {!inStock && <Badge text="Sold out" variant="sold-out" />}
        {inStock && left < 5 && (
          <span className="badge badge-low-stock">Only {left} left!</span>
        )}
      </div>

      <div className="product-actions" style={{ marginTop: "auto" }}>
        {inStock ? (
          <button
            type="button"
            className="add-btn"
            onClick={onAddToCart}
            style={{ width: "100%", height: "40px", cursor: "pointer" }}
          >
            Add to box
          </button>
        ) : (
          <button
            type="button"
            className="add-btn"
            disabled
            style={{ width: "100%", height: "40px" }}
          >
            Unavailable
          </button>
        )}
      </div>
    </article>
  );
}

export default ProductCard;