import './About.css'
import Logo from '../../Assets/Logo.png'
import heritage from '../../Assets/heritage.jpg'
import innovation from '../../Assets/innovation.jpg'
import performance from '../../Assets/performance.png'

const About = () => {
  return (
    <div id="about" className='about'>
      <div className="about-container">
        <div className="about-header">
          <h1>About Koenigsegg</h1>
          <p>Where Dreams Meet Reality</p>
        </div>
        
        <div className="about-content">
          <div className="about-intro">
            <div className="about-text">
              <h2>The Vision</h2>
              <p>
                Founded in 1994 by Christian von Koenigsegg, Koenigsegg Automotive AB has established itself as one of the world's most exclusive hypercar manufacturers. Our mission is simple yet profound: to create the ultimate driving experience through relentless innovation, uncompromising performance, and meticulous craftsmanship.
              </p>
              <p>
                Every Koenigsegg is a masterpiece of engineering excellence, where cutting-edge technology meets artistic design. We don't just build cars; we create automotive legends that push the boundaries of what's possible.
              </p>
            </div>
            <div className="about-image">
              <img src={Logo} alt="Koenigsegg Logo" />
            </div>
          </div>

          <div className="about-features">
            <div className="feature-card">
              <img src={heritage} alt="Heritage" />
              <div className="feature-content">
                <h3>Heritage</h3>
                <p>Nearly three decades of automotive excellence, with each model representing a milestone in hypercar evolution.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <img src={innovation} alt="Innovation" />
              <div className="feature-content">
                <h3>Innovation</h3>
                <p>Pioneering technologies like the Freevalve engine, carbon fiber expertise, and revolutionary aerodynamics.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <img src={performance} alt="Performance" />
              <div className="feature-content">
                <h3>Performance</h3>
                <p>World-record breaking speeds, unmatched acceleration, and track-dominating capabilities in every model.</p>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <h3>1994</h3>
              <p>Founded</p>
            </div>
            <div className="stat-item">
              <h3>25+</h3>
              <p>Years of Excellence</p>
            </div>
            <div className="stat-item">
              <h3>1500+</h3>
              <p>Horsepower</p>
            </div>
            <div className="stat-item">
              <h3>330+</h3>
              <p>MPH Top Speed</p>
            </div>
          </div>

          <div className="about-philosophy">
            <h2>Our Philosophy</h2>
            <p>
              "The goal has always been to create the ultimate performance car. We believe that the impossible is just an opinion, and we're here to prove it wrong. Every Koenigsegg is born from a passion for perfection and a relentless pursuit of automotive excellence."
            </p>
            <span className="quote-author">- Christian von Koenigsegg, Founder & CEO</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About