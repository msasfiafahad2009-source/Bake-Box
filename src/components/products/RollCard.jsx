export default function RollCard() {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img
          src="https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=80"
          alt="Warm glazed cinnamon swirl brioche roll"
        />
        <label>
          <input type="checkbox" className="like-toggle-input" />
          <span className="like-chip">
            <span className="heart-icon-pulse">❤️</span> 720 Likes
          </span>
        </label>
      </div>
      <div className="product-body">
        <div>
          <h3>Cloud-Spun Cinnamon Cream Roll</h3>
          <p>
            Ultra-soft brioche dough swirled with sweet Ceylon cinnamon and
            drizzled with velvety vanilla cream glaze.
          </p>
        </div>
        <div className="product-footer-bar">
          <span className="product-price">Rs 520</span>
          <span className="product-tag-pill">Fresh Glaze</span>
        </div>
      </div>
    </article>
  );
}