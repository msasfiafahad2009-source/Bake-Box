import React from "react";
import { reviews } from "../../data/reviews.js";
import ReviewCard from "./ReviewCard";

function ReviewSection() {
  if (reviews.length === 0) {
    return <p>No customer reviews yet. Be the first to review!</p>;
  }

  return (
    <section id="reviews" className="reviews-section">
      <h2>CUSTOMER REVIEWS</h2>
      <div className="reviews-grid">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            customer={review.customer}
            rating={review.rating}
            comment={review.comment}
            verified={review.verified}
          />
        ))}
      </div>
    </section>
  );
}

export default ReviewSection;