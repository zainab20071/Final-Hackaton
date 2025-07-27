// src/pages/FeedbackForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FeedbackForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    course: '',
    rating: '',
    comments: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Backend ko bhejne ka kaam baad mein karenge
    console.log(form);

    // Success ke baad redirect
    navigate('/thankyou');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto' }}>
      <h2>Student Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="text" name="course" placeholder="Course" onChange={handleChange} required />
        <input type="number" name="rating" placeholder="Rating (1-5)" onChange={handleChange} required min="1" max="5" />
        <textarea name="comments" placeholder="Comments" onChange={handleChange} required></textarea>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
