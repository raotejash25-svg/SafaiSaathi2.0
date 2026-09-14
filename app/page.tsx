const features = [
  { title: "Live vehicle tracking", text: "See collection vehicles and upcoming stops in real time." },
  { title: "Reliable ETAs", text: "Know when your neighborhood collection point is next." },
  { title: "Civic accountability", text: "Report missed collections and help improve route coverage." },
]

export default function HomePage() {
  return (
    <main className="page-shell">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span><strong>SafaiSaathi</strong><small>Cleanliness companion</small></span>
        </a>
        <div className="nav-links">
          <a className="active" href="/">Citizen view</a>
          <a href="/driver">Driver cockpit</a>
          <a href="/impact">Impact report</a>
        </div>
      </nav>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Ward 14 · Model Town</p>
          <h1 id="hero-title">A cleaner city starts with knowing what&apos;s next.</h1>
          <p className="hero-text">SafaiSaathi connects residents, collection teams, and municipal officers with a shared, transparent view of every route.</p>
          <div className="hero-actions">
            <a className="button primary" href="#features">Explore the platform</a>
            <a className="button secondary" href="/impact">View pilot impact</a>
          </div>
        </div>
        <div className="status-card" aria-label="Current route status">
          <div className="status-top"><span className="live-dot" /> Live route status <span className="status-badge">On track</span></div>
          <div className="eta">12 <span>min</span></div>
          <p>Vehicle arrival estimate</p>
          <div className="route-line"><span>Block A Market</span><span>DAV School Lane</span></div>
          <div className="progress"><span /></div>
          <small>Stop 3 of 8 · 850 m away</small>
        </div>
      </section>

      <section id="features" className="feature-grid" aria-label="Platform features">
        {features.map((feature) => <article className="feature-card" key={feature.title}><span className="feature-icon" aria-hidden="true">✓</span><h2>{feature.title}</h2><p>{feature.text}</p></article>)}
      </section>

      <section className="callout"><div><p className="eyebrow">Built for Swachh Bharat</p><h2>Every completed stop is a visible step forward.</h2></div><a className="button light" href="/impact">Read the impact report</a></section>
      <footer>SafaiSaathi · 1M1B civic innovation pilot</footer>
    </main>
  )
}

