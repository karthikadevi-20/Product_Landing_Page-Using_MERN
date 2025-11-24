// src/components/Hero.jsx
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <span className="hero-highlight">New season sale</span>
          <h1 className="hero-title">Welcome to ShopVerse</h1>
          <p className="hero-subtitle">
            Best products at great prices. Discover top tech and lifestyle picks
            curated just for you.
          </p>
          <button className="hero-cta">Start shopping →</button>
        </div>
        <div className="hero-image">
          <div className="hero-banner">
            <p className="hero-banner-label">Limited Time</p>
            <h3 className="hero-banner-title">Up to 50% off gadgets</h3>
            <p className="hero-banner-sub">
              Trending headphones, smartwatches and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
