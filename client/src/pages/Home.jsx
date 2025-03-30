import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Design Without Limits</h1>
        <p>Create stunning graphics with SparkPost's intuitive editor</p>
        <div className="cta-buttons">
          <Link to="/editor" className="btn primary">Start Designing</Link>
          <Link to="/pricing" className="btn secondary">See Plans</Link>
        </div>
      </div>
      
      <div className="features-section">
        <div className="feature-card">
          <h3>Easy-to-Use Editor</h3>
          <p>Drag-and-drop interface for effortless design</p>
        </div>
        <div className="feature-card">
          <h3>100+ Templates</h3>
          <p>Professionally designed starting points</p>
        </div>
      </div>
    </div>
  );
}