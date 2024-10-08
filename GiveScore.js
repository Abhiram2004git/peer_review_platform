import React, { useState } from 'react';

function GiveScore() {
  const [score, setScore] = useState('');
  const [assignment, setAssignment] = useState({
    student: 'John Smith',
    title: 'Sample Assignment',
    description: 'This is a sample assignment.',
  });

  const handleSubmitScore = () => {
    if (score) {
      // Here you'd send the score to the backend to save it
      console.log('Score submitted:', score);
      alert(`Score of ${score} submitted for ${assignment.student}`);
    } else {
      alert('Please enter a score');
    }
  };

  return (
    <div>
      <h2>Give Score to Assignment</h2>
      <div>
        <p><strong>Student:</strong> {assignment.student}</p>
        <p><strong>Assignment:</strong> {assignment.title}</p>
        <p>{assignment.description}</p>
      </div>
      <input
        type="number"
        placeholder="Enter score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />
      <button onClick={handleSubmitScore}>Submit Score</button>
    </div>
  );
}

export default GiveScore;
