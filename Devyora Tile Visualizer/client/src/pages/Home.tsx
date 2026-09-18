import './Home.css'

const LOGO_SRC =
  'https://lh3.googleusercontent.com/aida/AEtjO1WtFhkYkqGoBmQILH5fWGUR9_xP0LcxA_C7Hm6RM7Ngg4Yxs7gsBWyQvPg2r7QMyaBuBZVhM2RrlN7uKwz6JPvAqfs8ccTb_m-q2o-hzA5lIblHn7cyMpjQtoLV5iyqvVa2kTkgNck0KLGOEtA00-k9y88fkjUeT5-Im1ZUXNIobvVStBdpp1uvISBWQNsw4HUXHKDstoAHUYSsU6wBWNPU23xRnW80vGeofmhMRmaBUc1ECxC9ClFxId4'

const TILE_SRC =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDO9Sw_P-OLg87i2fEL8bhqb8bY9LFOd8fpZLTLgsoNtXVRfm4NFxWPp5kgtuBAq_3oWjY-p9xi5--YUo1YRWwX8h9JbDuKMofZI84duIuJfsosmMt4mZEjXhis9pAeFbvoarHs3sctbv9E-YilGGMdjHJVn47bq9zisvF5og0lnYdS3vFJ9cVcicux8PaxpbdreYFD8zBNR3uQ_My1Ke46aBZ9BTwLWTm5VzOau3JhRtLoE-M0gHoRsQ'

function Home() {
  const handleThemeToggle = () => {}
  const handleStart = () => {}

  return (
    <main className="home">
      <div className="home__frame">
        <header className="home__header">
          <div className="home__brand">
            <img
              alt="DEVYORA Architectural Logo"
              className="home__logo"
              src={LOGO_SRC}
            />
          </div>
          <div className="home__header-actions">
            <button
              id="theme-toggle-btn"
              type="button"
              aria-label="Toggle theme"
              className="home__theme-toggle"
              onClick={handleThemeToggle}
            >
              <span className="material-symbols-outlined home__theme-icon">
                light_mode
              </span>
            </button>
            <div className="home__atelier-badge">
              <span className="home__atelier-dot"></span>
              <span className="home__atelier-label">Milan Atelier</span>
            </div>
          </div>
        </header>

        <section className="home__hero">
          <p className="home__eyebrow">Atelier Showroom Suite</p>
          <h1 className="home__brand-title">DEVYORA</h1>
          <h2 className="home__subtitle">Tile Visualizer</h2>
          <p className="home__vision">
            Turn a physical tile into architectural concepts.
          </p>

          <div className="home__sample">
            <div className="home__corner home__corner--top-left">
              <div className="home__corner-bar home__corner-bar--h"></div>
              <div className="home__corner-bar home__corner-bar--v"></div>
            </div>
            <div className="home__corner home__corner--top-right">
              <div className="home__corner-bar home__corner-bar--h"></div>
              <div className="home__corner-bar home__corner-bar--v"></div>
            </div>
            <div className="home__corner home__corner--bottom-left">
              <div className="home__corner-bar home__corner-bar--v"></div>
              <div className="home__corner-bar home__corner-bar--h"></div>
            </div>
            <div className="home__corner home__corner--bottom-right">
              <div className="home__corner-bar home__corner-bar--v"></div>
              <div className="home__corner-bar home__corner-bar--h"></div>
            </div>

            <div className="home__sample-surface">
              <img
                alt="Architectural porcelain slab tile preview"
                className="home__sample-image"
                src={TILE_SRC}
              />
              <div className="home__spec-tag">
                <span className="home__spec-name">Navona Travertine</span>
                <span className="home__spec-size">1200×600</span>
              </div>
            </div>
          </div>

          <div className="home__metrics">
            <div className="home__metric">
              <span className="home__metric-label">Matte Honed</span>
            </div>
            <span className="home__metric-dot">•</span>
            <div className="home__metric">
              <span className="home__metric-label">10.5 mm</span>
            </div>
            <span className="home__metric-dot">•</span>
            <div className="home__metric">
              <span className="home__metric-label">R10 A+B</span>
            </div>
          </div>
        </section>

        <footer className="home__footer">
          <div className="home__actions">
            <button
              type="button"
              aria-label="Start visualizer session"
              className="home__start"
              id="start-consultation-btn"
              onClick={handleStart}
            >
              <span className="home__start-label">Start</span>
              <span className="material-symbols-outlined home__start-icon">
                arrow_forward
              </span>
            </button>
            <div className="home__mode">
              <span className="material-symbols-outlined home__mode-icon">
                concierge
              </span>
              <span className="home__mode-label">
                Showroom Client Consultation Mode
              </span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default Home
