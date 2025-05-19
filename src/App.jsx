import React, { useState } from 'react';

const questions = [
  {
    text: "If lunch costs $4.50 each day and school is 5 days a week, how much do you spend in a week?",
    options: ["$20.50", "$22.50", "$23.00", "$25.00"],
    correct: 1
  },
  {
    text: "You have $10. Each snack costs $1.25. How many snacks can you buy?",
    options: ["6", "7", "8", "9"],
    correct: 2
  },
  {
    text: "A new game costs $30. You save $5 each week. How many weeks to buy it?",
    options: ["4", "5", "6", "7"],
    correct: 2
  },
  {
    text: "You order a pizza with 8 slices and have 3 friends over. How many slices does each person get?",
    options: ["2", "3", "4", "8"],
    correct: 2
  },
  {
    text: "You earn $3 for trash and $5 for washing the dog. How much if you do both 3 times?",
    options: ["$16", "$20", "$24", "$27"],
    correct: 2
  },
  {
    text: "Your bottle holds 12 oz. You drink 3 of them a day. How many ounces total?",
    options: ["24 oz", "30 oz", "36 oz", "48 oz"],
    correct: 2
  }
];

function App() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionClick = (index) => {
    if (showAnswer) return;
    setSelected(index);
    setShowAnswer(true);
    if (index === questions[step].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setStep(step + 1);
    setSelected(null);
    setShowAnswer(false);
  };

  const buttonStyle = (index) => ({
    padding: '1rem',
    margin: '0.5rem',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '300px',
    border: '2px solid #004aad',
    backgroundColor: showAnswer
      ? index === questions[step].correct
        ? '#c8f7c5'
        : index === selected
        ? '#f7c5c5'
        : '#fff'
      : '#fff',
    cursor: showAnswer ? 'default' : 'pointer'
  });

  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem', backgroundColor: '#f0f8ff', minHeight: '100vh' }}>
      <h1 style={{ color: '#004aad', textAlign: 'center' }}>Everyday Math Lab</h1>
      {step < questions.length ? (
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '1.25rem' }}>{questions[step].text}</p>
          {questions[step].options.map((opt, idx) => (
            <button key={idx} style={buttonStyle(idx)} onClick={() => handleOptionClick(idx)}>
              {opt}
            </button>
          ))}
          {showAnswer && (
            <button onClick={handleNext} style={{ marginTop: '1rem', padding: '0.75rem 1.5rem', borderRadius: '8px', backgroundColor: '#004aad', color: '#fff' }}>
              Next
            </button>
          )}
          <p style={{ marginTop: '2rem' }}>Score: {score} / {questions.length}</p>
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#004aad' }}>You're a Math Boss!</h2>
          <p style={{ fontSize: '1.25rem' }}>You got {score} out of {questions.length} correct.</p>
          <p>{score === questions.length ? "Perfect score! You're unstoppable!" : score >= 4 ? "Nice job!" : "Keep practicing — you're getting there!"}</p>
        </div>
      )}
    </div>
  );
}

export default App;
