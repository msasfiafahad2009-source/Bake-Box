import React from 'react';
import ReviewCard from './ReviewCard';

function ReviewSection() {
  return (
    <section id="reviews" className="reviews-section">
      <div className="section-heading">
        <h2>Kind Words from Bake Box Guests</h2>
        <p>Freshly baked in small batches and loved across campus.</p>
      </div>

      <div className="reviews-grid">
        <ReviewCard
          reviewerName="Hira Malik"
          initials="HM"
          badgeLabel="Verified Order"
          rating={5}
          quote="The Fudge Walnut Brownie arrived still warm with that glossy crackly top—hands down the richest cocoa flavor I've had all semester."
          orderedItem="Fudge Walnut Brownie"
        />

        <ReviewCard
          reviewerName="Sara Ahmed"
          initials="SA"
          badgeLabel="Repeat Guest"
          rating={5}
          quote="Melts right on the tongue! The cardamom and roasted pistachio aroma in the Nankhatai feels straight out of a storybook kitchen."
          orderedItem="Cardamom Pistachio Nankhatai"
        />
      </div>
    </section>
  );
}

export default ReviewSection;