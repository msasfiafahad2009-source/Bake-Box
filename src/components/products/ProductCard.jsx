import Badge from './Badge';
function ProductCard({
  id,
  name,
  badgeText,
  badgeType,
  description,
  price,
  imageSrc,
  imageAlt,
  illustration,
}) {
  return (
    <article className="product-card" data-product={id}>
      <div className="card-shine" aria-hidden="true"></div>

      <div className="product-media">
        {imageSrc ? (
          <img src={imageSrc} alt={imageAlt || name} className="product-img" />
        ) : (
          illustration
        )}
        {badgeText && <Badge text={badgeText} variant={badgeType} />}
      </div>

      <div className="product-body">
        <div className="product-header">
          <h3 className="product-title">{name}</h3>
          <span className="product-price">Rs. {price}</span>
        </div>

        <p className="product-desc">{description}</p>

        <div className="product-actions">
          <label className="like-toggle" aria-label={`Favorite ${name}`}>
            <input type="checkbox" className="like-checkbox" />
            <span className="heart-icon">♥</span>
          </label>

          <div className="qty-selector" role="radiogroup" aria-label={`Quantity for ${name}`}>
            <label className="qty-pill">
              <input type="radio" name={`qty-${id}`} value="1" defaultChecked className={`qty-radio qty-${id}-1`} />
              <span>1</span>
            </label>
            <label className="qty-pill">
              <input type="radio" name={`qty-${id}`} value="2" className={`qty-radio qty-${id}-2`} />
              <span>2</span>
            </label>
            <label className="qty-pill">
              <input type="radio" name={`qty-${id}`} value="3" className={`qty-radio qty-${id}-3`} />
              <span>3</span>
            </label>
            <label className="qty-pill">
              <input type="radio" name={`qty-${id}`} value="4" className={`qty-radio qty-${id}-4`} />
              <span>4</span>
            </label>
            <label className="qty-pill">
              <input type="radio" name={`qty-${id}`} value="5" className={`qty-radio qty-${id}-5`} />
              <span>5</span>
            </label>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;