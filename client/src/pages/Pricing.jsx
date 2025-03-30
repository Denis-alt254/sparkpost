import { Link } from 'react-router-dom';
import '../styles/Pricing.css';

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: [
        "Basic templates",
        "3 exports/month",
        "Community support"
      ],
      cta: "Get Started"
    },
    {
      name: "Pro",
      price: "$9.99",
      features: [
        "All templates",
        "Unlimited exports",
        "Premium assets",
        "Priority support"
      ],
      cta: "Subscribe Now"
    }
  ];

  return (
    <div className="pricing-container">
      <h2>Choose Your Plan</h2>
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div key={index} className={`plan-card ${plan.name.toLowerCase()}`}>
            <h3>{plan.name}</h3>
            <div className="price">{plan.price}<span>/month</span></div>
            <ul className="features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <Link 
              to={plan.name === 'Free' ? '/register' : '/checkout'} 
              className="cta-button"
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}