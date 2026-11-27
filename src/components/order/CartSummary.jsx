import { cart } from 'data/cart.js';

function CartSummary() {
  if (cart.length === 0) {
    return <p>Your box is empty. Add something yummy!</p>;
  }

  let subtotal = 0;
  for (let i = 0; i < cart.length; i++) {
    subtotal += cart[i].price * cart[i].qty;
  }

  const delivery = subtotal >= 3000 ? 0 : 100;
  const total = subtotal + delivery;

  return (
    <section className="cart-summary">
      <h2>YOUR BOX</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <span>{item.name} × {item.qty}</span>
            <span>Rs {item.price * item.qty}</span>
          </li>
        ))}
        <li>
          <span>Delivery</span>
          <span>{delivery === 0 ? "Free" : `Rs ${delivery}`}</span>
        </li>
      </ul>
      <div className="cart-total">
        <strong>Total</strong>
        <strong>Rs {total}</strong>
      </div>
    </section>
  );
}

export default CartSummary;