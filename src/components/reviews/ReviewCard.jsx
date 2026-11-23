import React from 'react';
import Avatar from './Avatar';
import Rating from './Rating';

function ReviewCard({
  reviewerName,
  initials,
  badgeLabel,
  rating,
  quote,
  orderedItem,
}) {
  return (
    <article className="review-card">
      <div className="review-header">
        <Avatar name={reviewerName} initials={initials} />

        <div className="reviewer-meta">
          <h3 className="reviewer-name">{reviewerName}</h3>
          {badgeLabel && <span className="reviewer-badge">{badgeLabel}</span>}
        </div>

        <Rating stars={rating} />
      </div>

      <p className="review-quote">&ldquo;{quote}&rdquo;</p>

      {orderedItem && (
        <span className="review-order-tag">Ordered: {orderedItem}</span>
      )}
    </article>
  );
}

export default ReviewCard;