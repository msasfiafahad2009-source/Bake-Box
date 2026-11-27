function ReviewCard({ name, rating, comment }) {
  return (
    <article className="review-card">
      <div className="review-header">
        <strong>{name}</strong>
        <span className="review-stars">{"★".repeat(rating)}</span>
      </div>
      <p>{comment}</p>
    </article>
  );
}

export default ReviewCard;