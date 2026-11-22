import Avatar from './Avatar';
import Rating from './Rating';

export default function ReviewHira() {
  return (
    <article className="review-card">
      <div className="review-header">
        <Avatar />
        <div>
          <h4>Hira Malik</h4>
          <span className="review-author-role">Weekend Regular • Clifton</span>
          <Rating />
        </div>
      </div>
      <p>
        &ldquo;I stopped by Noor&apos;s wooden stall just for one brownie and ended
        up taking a whole box home! The fudge center is warm, rich, and melts
        right on your tongue.&rdquo;
      </p>
    </article>
  );
}