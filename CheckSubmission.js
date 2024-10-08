import React, { useState } from 'react';

function CheckSubmission() {
  // Sample data for student submission statuses
  const [submissions, setSubmissions] = useState([
    { student: 'Alice', submitted: true },
    { student: 'Bob', submitted: false },
    { student: 'Charlie', submitted: true },
  ]);

  return (
    <div>
      <h2>Check Student Submissions</h2>
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Submitted</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => (
            <tr key={index}>
              <td>{submission.student}</td>
              <td>{submission.submitted ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CheckSubmission;
