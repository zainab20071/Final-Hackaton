// src/pages/ThankYou.jsx
import { Link } from 'react-router-dom';

function ThankYou() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>🎉 Thank You!</h1>
      <p>Your feedback has been submitted successfully.</p>
      <Link to="/">
        <button style={{ marginTop: '20px' }}>Submit Another Feedback</button>
      </Link>
    </div>
  );
}

export default ThankYou;
