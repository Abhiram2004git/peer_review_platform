import React, { useState, useEffect } from 'react';

function ViewScore() {
  // Sample data for now. Later, this can be fetched from a backend API.
  const [scores, setScores] = useState([
    { student: 'Alice', score: 85 },
    { student: 'Bob', score: 90 },
    { student: 'Charlie', score: 78 },
  ]);

  return (
    <div>
      <h2>Student Scores</h2>
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={index}>
              <td>{score.student}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewScore;
