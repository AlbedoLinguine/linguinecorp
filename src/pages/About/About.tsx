import { Helmet } from 'react-helmet-async'
import './About.css'

function About() {
  return (
    <div className="about">
      <Helmet>
        <title>About Us - Linguine Corp | Our Story Since 1847</title>
        <meta name="description" content="Learn about Linguine Corp's rich history. Founded in 1847 in Liguria, Italy, we've been crafting authentic Italian pasta for over 175 years using traditional methods and the finest ingredients." />
      </Helmet>
      <div className="about-header">
        <h1>🇮🇹 About Linguine Corp</h1>
        <p>A story of passion, tradition, and authentic Italian craftsmanship</p>
      </div>

      <div className="about-content">
        <div className="story-section">
          <h2>Our Story</h2>
          <p>
            Founded in 1847 in the heart of Liguria, Linguine Corp has been crafting 
            the finest pasta for over 175 years. What started as a small family business 
            in Genoa has grown into a beloved brand that represents the authentic taste 
            of Italian cuisine worldwide.
          </p>
          <p>
            Our founder, Giuseppe Linguine, believed that great pasta should be made 
            with only the finest ingredients and traditional methods. This philosophy 
            continues to guide us today as we hand-select the best durum wheat from 
            the golden fields of southern Italy.
          </p>
        </div>

        <div className="color-palette-section">
        <h2>Our Brand Colors</h2>
        <div className="color-grid">
          <div className="color-box pasta-gold">
            <strong>🍝 Pasta Gold</strong>
            <span>The warm golden hue of perfectly cooked linguine</span>
          </div>
          <div className="color-box olive-green">
            <strong>🫒 Olive Green</strong>
            <span>Rich olive oil from the hills of Tuscany</span>
          </div>
          <div className="color-box tomato-red">
            <strong>🍅 Tomato Red</strong>
            <span>Fresh San Marzano tomatoes at peak ripeness</span>
          </div>
          <div className="color-box parmesan-white">
            <strong>🧀 Parmesan</strong>
            <span>Aged Parmigiano-Reggiano, 24 months</span>
          </div>
        </div>
      </div>

        <div className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>🌾 Quality</h3>
              <p>We use only the finest durum wheat, sourced from trusted Italian farmers.</p>
            </div>
            <div className="value-item">
              <h3>🏛️ Tradition</h3>
              <p>Our recipes and techniques have been passed down through generations.</p>
            </div>
            <div className="value-item">
              <h3>💚 Sustainability</h3>
              <p>We're committed to sustainable farming and eco-friendly packaging.</p>
            </div>
            <div className="value-item">
              <h3>❤️ Passion</h3>
              <p>Every strand of pasta is made with love and dedication to perfection.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
