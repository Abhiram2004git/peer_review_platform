import React, { useState } from 'react';

function ViewScores() {
  // Sample data of assignment scores
  const [scores, setScores] = useState([
    { assignment: 'Assignment 1', score: 85 },
    { assignment: 'Assignment 2', score: 90 },
    { assignment: 'Assignment 3', score: 78 },
  ]);

  return (
    <div>
      <h2>Your Assignment Scores</h2>
      <table>
        <thead>
          <tr>
            <th>Assignment</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={index}>
              <td>{score.assignment}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewScores;
