import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const modules = {
  "Budget Like a Boss": [
    { text: "Pizza is $12, drinks are $5, decorations are $8. What's the total?", options: ["$23", "$25", "$26", "$30"], correct: 1 },
    { text: "You have $40. You spend $25. How much is left?", options: ["$10", "$15", "$20", "$25"], correct: 1 },
    { text: "Cake slices are $1.50 and you buy 6. What's the total?", options: ["$6", "$7.50", "$9", "$10"], correct: 2 }
  ],
  "Smart Shopper": [
    { text: "A $40 backpack is 25% off. What's the sale price?", options: ["$25", "$28", "$30", "$35"], correct: 2 },
    { text: "You have a $5 off coupon on a $20 shirt. Final price?", options: ["$10", "$15", "$17", "$18"], correct: 1 },
    { text: "Sneakers: $48 vs. $60 with 20% off. Which is cheaper?", options: ["$60", "$48", "$50", "$55"], correct: 1 }
  ],
  "Your First Job": [
    { text: "Earn $100, 10% tax. How much do you keep?", options: ["$85", "$90", "$95", "$100"], correct: 1 },
    { text: "You earn $15/hour and work 8 hours. Total?", options: ["$100", "$110", "$120", "$130"], correct: 2 },
    { text: "Save 20% of $50 paycheck. How much to save?", options: ["$5", "$10", "$15", "$20"], correct: 1 }
  ]
};

function App() {
  const moduleNames = Object.keys(modules);
  const [moduleIndex, setModuleIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [completed, setCompleted] = useState(false);

  const currentModule = modules[moduleNames[moduleIndex]];
  const question = currentModule[step];

  const handleOptionClick = (index) => {
    if (showAnswer) return;
    setSelected(index);
    setShowAnswer(true);
    if (index === question.correct) setScore(score + 1);
  };

  const handleNext = () => {
    if (step + 1 < currentModule.length) {
      setStep(step + 1);
      setSelected(null);
      setShowAnswer(false);
    } else if (moduleIndex + 1 < moduleNames.length) {
      setModuleIndex(moduleIndex + 1);
      setStep(0);
      setSelected(null);
      setShowAnswer(false);
    } else {
      setCompleted(true);
    }
  };

  const buttonStyle = (idx) => ({
    padding: '1rem',
    margin: '0.5rem',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '300px',
    border: '2px solid #004aad',
    backgroundColor: showAnswer
      ? idx === question.correct
        ? '#c8f7c5'
        : idx === selected
        ? '#f7c5c5'
        : '#fff'
      : '#fff',
    cursor: showAnswer ? 'default' : 'pointer'
  });

  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem', backgroundColor: '#f0f8ff', minHeight: '100vh' }}>
      <h1 style={{ color: '#004aad', textAlign: 'center' }}>Everyday Math Lab</h1>
      {!completed ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={`${moduleIndex}-${step}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}
          >
            <h2>{moduleNames[moduleIndex]}</h2>
            <p style={{ fontSize: '1.25rem' }}>{question.text}</p>
            {question.options.map((opt, idx) => (
              <motion.button
                whileTap={{ scale: 0.95 }}
                key={idx}
                style={buttonStyle(idx)}
                onClick={() => handleOptionClick(idx)}
              >
                {opt}
              </motion.button>
            ))}
            {showAnswer && (
              <button onClick={handleNext} style={{ marginTop: '1rem', padding: '0.75rem 1.5rem', borderRadius: '8px', backgroundColor: '#004aad', color: '#fff' }}>
                Next
              </button>
            )}
            <p style={{ marginTop: '2rem' }}>Score: {score}</p>
          </motion.div>
        </AnimatePresence>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#004aad' }}>You're a Math Boss!</h2>
          <p style={{ fontSize: '1.25rem' }}>You completed all modules and scored {score} out of 9.</p>
          <p>{score >= 7 ? "Amazing job!" : score >= 5 ? "Great effort!" : "Keep practicing!"}</p>
        </div>
      )}
    </div>
  );
}

export default App;
