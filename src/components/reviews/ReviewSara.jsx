import Avatar from './Avatar';
import Rating from './Rating';

export default function ReviewSara() {
  return (
    <article className="review-card">
      <div className="review-header">
        <Avatar />
        <div>
          <h4>Sara Ahmed</h4>
          <span className="review-author-role">Pastry Lover • DHA Phase 5</span>
          <Rating />
        </div>
      </div>
      <p>
        &ldquo;The aroma of cardamom and cinnamon around Noor&apos;s stall feels
        straight out of a storybook bakery. Best nankhatai and cinnamon rolls in
        town!&rdquo;
      </p>
    </article>
  );
}