import React, { useState } from 'react';

const questions = [
  { id: 'lunch', text: 'If lunch costs $4.50 each day and school is 5 days a week, how much do you spend in a week?' },
  { id: 'snacks', text: 'You have $10. Each snack costs $1.25. How many snacks can you buy?' },
  { id: 'game', text: 'A new game costs $30. You save $5 each week. How many weeks to buy it?' },
  { id: 'pizza', text: 'You order a pizza with 8 slices and have 3 friends over. How many slices does each person get?' },
  { id: 'chores', text: 'You earn $3 for trash and $5 for washing the dog. How much if you do both 3 times?' },
  { id: 'water', text: 'Your bottle holds 12 oz. You drink 3 of them a day. How many ounces total?' }
];

function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleNext = (value) => {
    setAnswers({ ...answers, [questions[step].id]: value });
    setStep(step + 1);
  };

  const inputStyle = {
    fontSize: '1.25rem',
    padding: '0.5rem',
    width: '100%',
    maxWidth: '300px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    marginTop: '1rem'
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f8ff', minHeight: '100vh', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ color: '#004aad' }}>Everyday Math Lab</h1>
      {step < questions.length ? (
        <div>
          <p style={{ fontSize: '1.5rem' }}>{questions[step].text}</p>
          <input
            type="text"
            placeholder="Type your answer..."
            style={inputStyle}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleNext(e.target.value);
            }}
          />
        </div>
      ) : (
        <div>
          <h2 style={{ color: '#004aad' }}>You're a Math Boss!</h2>
          <p style={{ fontSize: '1.25rem' }}>Here's what you worked on:</p>
          <div style={{ textAlign: 'left', display: 'inline-block' }}>
            {Object.entries(answers).map(([key, value]) => (
              <p key={key}><strong>{key}:</strong> {value}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
