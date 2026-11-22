import BrownieCard from './BrownieCard';
import NankhataiCard from './NankhataiCard';
import RollCard from './RollCard';

export default function ProductSection() {
  return (
    <section id="menu" className="section-block">
      <div className="section-header-center">
        <span className="section-kicker">Fresh From Noor&apos;s Oven</span>
        <h2 className="section-title">Signature Storybook Treats</h2>
        <p className="section-desc">
          Baked in small batches every morning using real butter, Belgian
          cocoa, and aromatic spices.
        </p>
      </div>
      <div className="products-grid">
        <BrownieCard />
        <NankhataiCard />
        <RollCard />
      </div>
    </section>
  );
}