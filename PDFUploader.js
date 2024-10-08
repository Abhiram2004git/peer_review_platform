import React, { useState } from 'react';

function PDFUploader() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      // Here you'd send the file to the backend to be uploaded
      console.log('Uploading:', file);
      alert('PDF uploaded successfully');
    } else {
      alert('Please select a file first');
    }
  };

  return (
    <div>
      <h2>Upload Assignment (PDF)</h2>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default PDFUploader;
