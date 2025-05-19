import React, { useState } from 'react';

function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    { id: 'income', text: 'What is your monthly income?' },
    { id: 'rent', text: 'How much do you pay for rent?' },
    { id: 'groceries', text: 'Monthly grocery budget?' },
    { id: 'entertainment', text: 'Monthly entertainment budget?' },
    { id: 'savings', text: 'How much do you save each month?' },
    { id: 'emergency', text: 'Do you have an emergency fund?' },
    { id: 'goal', text: 'What is your next big savings goal?' }
  ];

  const handleNext = (value) => {
    setAnswers({ ...answers, [questions[step].id]: value });
    setStep(step + 1);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Everyday Math Lab</h1>
      {step < questions.length ? (
        <div>
          <p>{questions[step].text}</p>
          <input
            type="text"
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleNext(e.target.value);
            }}
          />
        </div>
      ) : (
        <div>
          <h2>Summary</h2>
          <pre>{JSON.stringify(answers, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
