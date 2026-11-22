import nankhataiImg from '../../assets/Screenshot 2026-11-21 182024.png';

export default function NankhataiCard() {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img
          src={nankhataiImg}
          alt="Golden baked almond and pistachio cardamom nankhatai shortbread cookies"
        />
        <label>
          <input type="checkbox" className="like-toggle-input" />
          <span className="like-chip">
            <span className="heart-icon-pulse">❤️</span> 820 Likes
          </span>
        </label>
      </div>
      <div className="product-body">
        <div>
          <h3>Enchanted Cardamom Nankhatai</h3>
          <p>
            Melt-in-your-mouth pure desi ghee shortbread cookies scented with
            crushed green cardamom and topped with roasted almonds and pistachios.
          </p>
        </div>
        <div className="product-footer-bar">
          <span className="product-price">Rs 600</span>
          <span className="product-tag-pill">Box of 8 Cookies</span>
        </div>
      </div>
    </article>
  );
}