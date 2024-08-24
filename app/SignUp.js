import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthMonth: '',
    birthDate: '',
    birthYear: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields (e.g., passwords match)
    if (form.password === form.confirmPassword) {
      // Here you can add your logic to handle sign-up (e.g., API call)
      console.log('Form Submitted:', form);
      
      // After successful sign-up, redirect to login
      navigate('/login');
    } else {
      alert("Passwords don't match!");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button style={styles.backButton} onClick={() => navigate(-1)}>&larr;</button>
        <img src="path_to_logo.png" alt="Learning ABC" style={styles.logo} />
      </div>
      <h2 style={styles.title}>Sign up</h2>
      <p style={styles.subtitle}>Just a few quick things to get started</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={form.confirmPassword}
          onChange={handleChange}
          style={styles.input}
        />
        <label style={styles.birthLabel}>Birthdate:</label>
        <div style={styles.birthDateContainer}>
          <input
            type="text"
            name="birthMonth"
            placeholder="Month"
            value={form.birthMonth}
            onChange={handleChange}
            style={styles.birthInput}
          />
          <input
            type="text"
            name="birthDate"
            placeholder="Date"
            value={form.birthDate}
            onChange={handleChange}
            style={styles.birthInput}
          />
          <input
            type="text"
            name="birthYear"
            placeholder="Year"
            value={form.birthYear}
            onChange={handleChange}
            style={styles.birthInput}
          />
        </div>
        <select style={styles.select}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          {/* Add more options as needed */}
        </select>
        <button type="submit" style={styles.signupButton}>CREATE ACCOUNT</button>
      </form>
      <div style={styles.loginText}>
        Already have an account? <a href="/login">Log in</a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
    background: 'linear-gradient(to bottom, #fecd72, #ffffff)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    width: '100%',
    justifyContent: 'space-between',
  },
  backButton: {
    background: 'none',
    border: 'none',
    fontSize: '24px',
  },
  logo: {
    width: '50px',
    height: '50px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '16px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    maxWidth: '400px',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  birthLabel: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    fontSize: '14px',
    marginBottom: '5px',
  },
  birthDateContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '400px',
    marginBottom: '10px',
  },
  birthInput: {
    width: '30%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  select: {
    width: '100%',
    maxWidth: '400px',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  signupButton: {
    width: '100%',
    maxWidth: '400px',
    padding: '15px',
    backgroundColor: '#d97706',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    marginBottom: '20px',
    cursor: 'pointer',
  },
  loginText: {
    fontSize: '14px',
    textAlign: 'center',
  },
};

export default SignUp;
