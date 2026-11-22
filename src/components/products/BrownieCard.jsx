import Badge from './Badge';

export default function BrownieCard() {
  return (
    <article className="product-card">
      <Badge />
      <div className="product-image-wrap">
        <img
          src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
          alt="Rich gooey chocolate fudge walnut brownie squares"
        />
        <label>
          <input type="checkbox" className="like-toggle-input" />
          <span className="like-chip">
            <span className="heart-icon-pulse">❤️</span> 940 Likes
          </span>
        </label>
      </div>
      <div className="product-body">
        <div>
          <h3>Starlight Fudge Walnut Brownie</h3>
          <p>
            Thick, gooey 70% dark Belgian chocolate brownie with a shiny crackly
            top and crunchy roasted walnuts.
          </p>
        </div>
        <div className="product-footer-bar">
          <span className="product-price">Rs 450</span>
          <span className="product-tag-pill">Warm &amp; Gooey</span>
        </div>
      </div>
    </article>
  );
}