const stops = [
  ["Stop 1", "Block A Market", "45 households", "Completed"],
  ["Stop 2", "Model Town Park", "62 households", "Completed"],
  ["Stop 3", "DAV School Lane", "38 households", "Next stop"],
  ["Stop 4", "Green Avenue", "51 households", "Queued"],
  ["Stop 5", "Community Centre", "44 households", "Queued"],
  ["Stop 6", "Railway Colony", "57 households", "Queued"],
]

export default function DriverPage() {
  return <main className="page-shell">
    <nav className="topbar" aria-label="Primary navigation"><a className="brand" href="/"><span className="brand-mark">S</span><span><strong>SafaiSaathi</strong><small>Driver cockpit</small></span></a><div className="nav-links"><a href="/">Citizen view</a><a className="active" href="/driver">Driver cockpit</a><a href="/admin">Admin desk</a><a href="/impact">Impact report</a></div></nav>
    <section className="hero" style={{paddingBottom: "35px"}}><div className="hero-copy"><p className="eyebrow">Ward 14 · Morning route</p><h1>Keep every stop visible.</h1><p className="hero-text">Broadcast your route location and mark collection checkpoints as you move through the ward.</p><div className="hero-actions"><button className="button primary" type="button">Start route</button><a className="button secondary" href="/">Open citizen view</a></div></div><div className="status-card"><div className="status-top"><span className="live-dot" /> Route status <span className="status-badge">Ready</span></div><div className="eta">2.4 <span>km</span></div><p>Distance remaining today</p><div className="route-line"><span>2 completed</span><span>6 stops</span></div><div className="progress"><span style={{width: "33%"}} /></div><small>Stop 3 of 8 · DAV School Lane next</small></div></section>
    <section className="feature-grid" aria-label="Driver route controls">{stops.map(([number, name, households, status]) => <article className="feature-card" key={number}><span className="eyebrow" style={{display: "block", marginBottom: "10px"}}>{number}</span><h2 style={{marginTop: 0}}>{name}</h2><p>{households}</p><strong style={{color: status === "Next stop" ? "var(--green)" : "var(--muted)"}}>{status}</strong></article>)}</section>
    <footer>SafaiSaathi · Driver operations</footer>
  </main>
}
