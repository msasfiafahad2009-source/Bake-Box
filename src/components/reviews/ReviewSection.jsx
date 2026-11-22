import ReviewHira from './ReviewHira';
import ReviewSara from './ReviewSara';

export default function ReviewSection() {
  return (
    <section id="reviews" className="section-block">
      <div className="section-header-center">
        <span className="section-kicker">Kind Words</span>
        <h2 className="section-title">Why Visitors Love Our Stall</h2>
        <p className="section-desc">
          Stories from neighbors and dessert lovers who visited Noor&apos;s Bake
          Box.
        </p>
      </div>
      <div className="reviews-grid">
        <ReviewHira />
        <ReviewSara />
      </div>
    </section>
  );
}