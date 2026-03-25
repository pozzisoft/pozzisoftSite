import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">Welcome to Pozzisoft</p>
          <h1 className="hero-title">
            Apps that <span className="gradient-text">inspire</span>
          </h1>
          <p className="hero-subtitle">
            We build clean, thoughtful mobile experiences for Android and iOS.
          </p>
        </div>
        <div className="hero-bg" aria-hidden="true" />
      </section>

      {/* Products */}
      <section className="products" id="products">
        <div className="section-inner">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            A growing collection of apps designed with care.
          </p>

          <div className="product-grid">
            {/* Flippy card */}
            <article className="product-card">
              <div className="product-icon-wrap">
                <svg className="product-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect width="64" height="64" rx="16" fill="url(#flippy-grad)" />
                  <path d="M20 44 L32 20 L44 44" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M23 37 L41 37" stroke="white" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="flippy-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#6c63ff" />
                      <stop offset="1" stopColor="#a78bfa" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="product-body">
                <h3 className="product-name">Flippy</h3>
                <p className="product-tagline">The smart visual search companion</p>
                <p className="product-description">
                  Point your camera at anything and let Flippy do the searching for you.
                  Fast, private, and effortless — your pictures are used only for the
                  search and never saved.
                </p>

                <div className="product-platforms">
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M3.18 23.76a2 2 0 0 0 2.17-.21l12.35-7.13-2.9-2.9-11.62 10.24zM.14 1.16A2 2 0 0 0 0 2v20a2 2 0 0 0 .14.84l.08.08 11.2-11.2v-.27L.22 1.08l-.08.08zM22.78 10.47l-3.14-1.81-3.15 3.16 3.15 3.14 3.16-1.82a2 2 0 0 0 0-2.67zM5.35.45A2 2 0 0 0 3.18.24L14.8 10.86l-2.9-2.9L5.35.45z"/>
                    </svg>
                    Get it on Google Play
                  </a>
                  <span className="badge-coming-soon">
                    <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    iOS – Coming Soon
                  </span>
                </div>

                <Link to="/flippy/privacy" className="privacy-link">
                  Privacy Policy
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* About blurb */}
      <section className="about">
        <div className="section-inner about-inner">
          <div className="about-text">
            <h2 className="section-title">About Pozzisoft</h2>
            <p>
              Pozzisoft is an independent software studio focused on building useful,
              privacy-conscious mobile apps. We believe great software doesn't need to
              compromise your data.
            </p>
            <p>
              More products are on the way. Stay tuned.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
