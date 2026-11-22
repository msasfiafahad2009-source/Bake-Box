import Logo from './Logo';
import NavLinks from './NavLinks';

export default function ShopHeader() {
  return (
    <>
      <span className="sparkle-particle sp-1" aria-hidden="true">✨</span>
      <span className="sparkle-particle sp-2" aria-hidden="true">🧁</span>
      <span className="sparkle-particle sp-3" aria-hidden="true">💖</span>
      <span className="sparkle-particle sp-4" aria-hidden="true">🌟</span>

      <div className="welcome-sparkle-bar">
        ✨ Welcome to Noor&apos;s Storybook Bake Box — Warm pastries &amp; free tastings at the stall! ✨
      </div>

      <header className="shop-header">
        <Logo />
        <div className="header-actions">
          <NavLinks />
          <label className="theme-switch" title="Switch Light / Dark Mode">
            <input type="checkbox" className="theme-toggle-input" />
            <span className="theme-pill">
              <span className="icon-sun">☀️ Day</span>
              <span className="icon-moon">🌙 Night</span>
            </span>
          </label>
        </div>
      </header>

      <section className="hero-banner">
        <span className="hero-orb-glow" aria-hidden="true"></span>

        <div>
          <span className="hero-tag">✨ The Storybook Bakery • Lantern Lane</span>
          <h1>
            Where Every Bite Feels Like a{' '}
            <span className="hero-highlight">Warm Fairytale.</span>
          </h1>
          <p className="hero-subtitle">
            Step up to Noor&apos;s whimsical weekend stall for gooey Belgian fudge
            brownies, cardamom moon-cookies, and warm glazed cinnamon rolls
            baked fresh at dawn.
          </p>
          <div className="hero-cta-group">
            <a href="#menu" className="btn-primary">
              Explore Yummy Menu ↓
            </a>

            <label>
              <input type="checkbox" className="like-toggle-input" />
              <span className="hero-like-pill">
                <span className="heart-icon-pulse">❤️</span> Tap to Love (2,480)
              </span>
            </label>
          </div>
        </div>

        <div className="hero-visual-wrap">
          <div className="rotating-seal" aria-hidden="true">
            Baked Fresh Dawn
          </div>
          <div className="hero-photo-frame">
            <img
              src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80"
              alt="Assorted warm pastries, chocolate brownies, and glazed desserts on a bakery platter"
            />
            <div className="hero-photo-caption">
              🥐 Pulled warm from Noor&apos;s brick oven every weekend morning
            </div>
          </div>
        </div>
      </section>

      <div className="bakery-marquee" aria-hidden="true">
        <div className="bakery-marquee-track">
          <span>✨ 70% BELGIAN FUDGE BROWNIES</span>
          <span>🍪 PURE DESI GHEE CARDAMOM NANKHATAI</span>
          <span>🥐 WARM VANILLA GLAZED CINNAMON ROLLS</span>
          <span>🎀 HAND-TIED SATIN GIFT BOXES</span>
          <span>✨ 70% BELGIAN FUDGE BROWNIES</span>
          <span>🍪 PURE DESI GHEE CARDAMOM NANKHATAI</span>
          <span>🥐 WARM VANILLA GLAZED CINNAMON ROLLS</span>
          <span>🎀 HAND-TIED SATIN GIFT BOXES</span>
        </div>
      </div>
    </>
  );
}