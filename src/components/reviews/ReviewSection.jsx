import { reviews } from "../../data/reviews.js";
import ReviewCard from './ReviewCard';

function ReviewSection() {
  if (reviews.length === 0) {
    return <p>No reviews yet. Be the first!</p>;
  }

  let totalRating = 0;
  for (let i = 0; i < reviews.length; i++) {
    totalRating += reviews[i].rating;
  }
  const average = (totalRating / reviews.length).toFixed(1);

  return (
    <section id="reviews" className="reviews-section">
      <h2>WHAT CUSTOMERS SAY</h2>
      <p>Average rating: {average}</p>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            rating={review.rating}
            comment={review.comment}
          />
        ))}
      </div>
    </section>
  );
}

export default ReviewSection;