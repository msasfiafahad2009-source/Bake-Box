import ShopHeader from './components/Layout/ShopHeader';
import ProductSection from './components/products/ProductSection';
import ReviewSection from './components/reviews/ReviewSection';
import OrderInfo from './components/order/OrderInfo';
import Footer from './components/Layout/Footer';

export default function App() {
  return (
    <div className="app-container">
      <ShopHeader />
      <main>
        <ProductSection />
        <ReviewSection />
        <OrderInfo />
      </main>
      <Footer />
    </div>
  );
}