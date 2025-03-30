import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Designs.css';

export default function Designs() {
  const [designs, setDesigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDesigns = async () => {
      try {
        const response = await axios.get('/api/designs');
        setDesigns(response.data);
      } catch (error) {
        console.error("Failed to fetch designs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDesigns();
  }, []);

  return (
    <div className="designs-container">
      <h2>Your Designs</h2>
      {loading ? (
        <p>Loading your designs...</p>
      ) : (
        <div className="designs-grid">
          {designs.map(design => (
            <Link to={`/editor/${design._id}`} key={design._id} className="design-card">
              <div className="design-thumbnail">
                <h3>{design.title || 'Untitled Design'}</h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}