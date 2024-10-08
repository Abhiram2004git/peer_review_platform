import React, { useState } from 'react';

function CreateAssignment() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateAssignment = () => {
    // Here you'd send the assignment data to the backend to be saved
    console.log({ title, description });
    alert('Assignment Created Successfully');
  };

  return (
    <div>
      <h2>Create Assignment</h2>
      <input
        type="text"
        placeholder="Assignment Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Assignment Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleCreateAssignment}>Create Assignment</button>
    </div>
  );
}

export default CreateAssignment;
