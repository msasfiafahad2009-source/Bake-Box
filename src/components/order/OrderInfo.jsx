export default function OrderInfo() {
  const itemName = 'Starlight Fudge Walnut Brownie';
  const unitPrice = 450;
  const deliveryFee = 100;

  return (
    <section id="order" className="section-block">
      <div className="section-header-center">
        <span className="section-kicker">Simple &amp; Transparent</span>
        <h2 className="section-title">Your Bake Box Order Slip</h2>
        <p className="section-desc">
          Tap how many warm brownies you&apos;d like in your box—your total updates automatically.
        </p>
      </div>

      <div className="order-wrapper">
        <div className="order-card qty-calculator">
          {/* Hidden Radio Inputs (Default set to 5 Brownies) */}
          <input type="radio" name="brownie-qty" id="qty-1" className="qty-radio" />
          <input type="radio" name="brownie-qty" id="qty-2" className="qty-radio" />
          <input type="radio" name="brownie-qty" id="qty-3" className="qty-radio" />
          <input type="radio" name="brownie-qty" id="qty-4" className="qty-radio" />
          <input type="radio" name="brownie-qty" id="qty-5" className="qty-radio" defaultChecked />
          <input type="radio" name="brownie-qty" id="qty-6" className="qty-radio" />

          <div className="receipt-top">
            <span>Order #NBB-104 • Freshly Packed</span>
            <h3>Noor&apos;s Bake Box Receipt</h3>
          </div>

          <div className="order-row">
            <span>
              <strong>{itemName}</strong>
            </span>
            <span>Rs {unitPrice} each</span>
          </div>

          {/* Interactive Quantity Selector */}
          <div className="order-row qty-selector-row">
            <span>
              <strong>Select Quantity:</strong>
            </span>
            <div className="qty-pills">
              <label htmlFor="qty-1" className="qty-pill">1</label>
              <label htmlFor="qty-2" className="qty-pill">2</label>
              <label htmlFor="qty-3" className="qty-pill">3</label>
              <label htmlFor="qty-4" className="qty-pill">4</label>
              <label htmlFor="qty-5" className="qty-pill">5</label>
              <label htmlFor="qty-6" className="qty-pill">6</label>
            </div>
          </div>

          {/* Dynamic Subtotal Row */}
          <div className="order-row">
            <span>
              Box Subtotal (
              <span className="val-1">1 × Rs {unitPrice}</span>
              <span className="val-2">2 × Rs {unitPrice}</span>
              <span className="val-3">3 × Rs {unitPrice}</span>
              <span className="val-4">4 × Rs {unitPrice}</span>
              <span className="val-5">5 × Rs {unitPrice}</span>
              <span className="val-6">6 × Rs {unitPrice}</span>
              )
            </span>
            <strong>
              <span className="val-1">Rs {1 * unitPrice}</span>
              <span className="val-2">Rs {2 * unitPrice}</span>
              <span className="val-3">Rs {3 * unitPrice}</span>
              <span className="val-4">Rs {4 * unitPrice}</span>
              <span className="val-5">Rs {5 * unitPrice}</span>
              <span className="val-6">Rs {6 * unitPrice}</span>
            </strong>
          </div>

          <div className="order-row">
            <span>Warm Doorstep Delivery</span>
            <strong>Rs {deliveryFee}</strong>
          </div>

          {/* Dynamic Total Row */}
          <div className="order-total">
            <span>Total Payable</span>
            <span className="order-total-amount">
              <span className="val-1">Rs {1 * unitPrice + deliveryFee}</span>
              <span className="val-2">Rs {2 * unitPrice + deliveryFee}</span>
              <span className="val-3">Rs {3 * unitPrice + deliveryFee}</span>
              <span className="val-4">Rs {4 * unitPrice + deliveryFee}</span>
              <span className="val-5">Rs {5 * unitPrice + deliveryFee}</span>
              <span className="val-6">Rs {6 * unitPrice + deliveryFee}</span>
            </span>
          </div>

          <div className="receipt-note">
            🎀 Includes a complimentary handwritten storybook note &amp; satin ribbon!
          </div>
        </div>
      </div>
    </section>
  );
}