import React, { useState } from 'react';

function App() {
  const [originalText, setOriginalText] = useState('');
  const [encodedText, setEncodedText] = useState('');
  const [decodedText, setDecodedText] = useState('');

  const handleEncode = () => {
    const encoded = btoa(originalText);
    setEncodedText(encoded);
  };

  const handleDecode = () => {
    const decoded = atob(encodedText);
    setDecodedText(decoded);
  };

  return (
    <div>
      <h1>Base64 Encode and Decode</h1>
      <div>
        <label>Original Text:</label>
        <input
          type="text"
          value={originalText}
          onChange={(e) => setOriginalText(e.target.value)}
        />
        <button onClick={handleEncode}>Encode</button>
      </div>
      <div>
        <label>Encoded Text:</label>
        <input
          type="text"
          value={encodedText}
          readOnly
        />
      </div>
      <div>
        <label>Decoded Text:</label>
        <input
          type="text"
          value={decodedText}
          readOnly
        />
        <button onClick={handleDecode}>Decode</button>
      </div>
    </div>
  );
}

export default App;
