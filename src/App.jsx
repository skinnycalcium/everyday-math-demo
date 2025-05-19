import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();

  const cards = [
    { title: "Budget Like a Boss", description: "Plan a party and keep your spending on track", path: "/module/budget" },
    { title: "Smart Shopper", description: "Compare discounts to get the best deal", path: "#" },
    { title: "Your First Job", description: "Understand your paycheck and taxes", path: "#" }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#004aad', color: '#fff', minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem' }}>Explore our curriculum</h1>
      <div style={{ marginTop: '2rem' }}>
        {cards.map((card, idx) => (
          <div
            key={idx}
            onClick={() => card.path !== "#" && navigate(card.path)}
            style={{
              marginBottom: '1.5rem',
              cursor: card.path !== "#" ? 'pointer' : 'not-allowed',
              backgroundColor: '#fff',
              color: '#004aad',
              padding: '1rem',
              borderRadius: '12px',
              maxWidth: '400px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          >
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
