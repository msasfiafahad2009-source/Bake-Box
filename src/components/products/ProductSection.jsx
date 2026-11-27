import ProductCard from "./ProductCard";
import nankhataiImg from "./assets/Nankhatai.png";
import brownieImg from "./assets/Brownie.png";
import rollImg from "./assets/Roll.png";
function ProductSection() {
  return (
    <section id="menu" className="products-section">
      <div className="section-heading">
        <h2>Today&apos;s Bake Box Menu</h2>
        <p>Select your quantities below — your order slip updates automatically.</p>
      </div>
      <div className="products-grid">
        <ProductCard
          id="brownie"
          name="Fudge Walnut Brownie"
          badgeText="Bestseller"
          badgeType="jam"
          description="Dark roasted cocoa folded with toasted walnuts and a crisp, crackly top."
          price={350}
          imageSrc={brownieImg}
        />
        <ProductCard
          id="nankhatai"
          name="Cardamom Pistachio Nankhatai"
          badgeText="Fresh Batch"
          badgeType="pistachio"
          description="Melt-in-your-mouth traditional shortbread infused with green cardamom and roasted pistachio."
          price={250}
          imageSrc={nankhataiImg}
          imageAlt="Golden cardamom pistachio nankhatai cookies"
        />

        <ProductCard
          id="roll"
          name="Caramel Cinnamon Roll"
          badgeText="Warm & Glazed"
          badgeType="caramel"
          description="Soft brioche spiral swirled with Ceylon cinnamon and drizzled with salted honey caramel."
          price={400}
          imageSrc={rollImg}
          imageAlt="Warm caramel cinnamon roll"
        />
      </div>
    </section>
  );
}

export default ProductSection;