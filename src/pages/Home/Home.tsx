import './Home.css'

function Home() {

  return (
    <div className="home">
      <div className="hero-section">
        <div className="logo-container">
        </div>
        <h1>🍝 Welcome to Linguine Corp</h1>
        <p className="hero-subtitle">
          Authentic Italian pasta crafted with passion since 1847
        </p>
      </div>

      {/* <div className="interactive-section">
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Pasta count: {count} 🍝
          </button>
          <p>
            Experience the finest linguine in the world. Each strand is carefully crafted 
            using traditional Italian methods passed down through generations.
          </p>
        </div>
      </div> */}

      <div className="welcome-section">
        <p className="italian-greeting">
          🇮🇹 Benvenuti al mondo della pasta! Welcome to the world of pasta!
        </p>
        <p className="brand-description">
          At Linguine Corp, we believe that great pasta starts with great ingredients. 
          Our linguine is made from the finest durum wheat, hand-selected from the 
          golden fields of southern Italy.
        </p>
      </div>
    </div>
  )
}

export default Home
