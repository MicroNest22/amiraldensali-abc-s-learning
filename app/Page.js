

import React from 'react';

const Login = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        
        <img src="ABC.jpg" alt="Learning ABC" style={styles.logo} />
      </div>
      <h2 style={styles.title}>LOGIN</h2>
      <p style={styles.welcomeText}>Welcome to Learning ABC's</p>
      <input type="email" placeholder="Email" style={styles.input} />
      <input type="password" placeholder="Password" style={styles.input} />
      <div style={styles.forgotPassword}>
        <a href="#">Forgot Password?</a>
      </div>
      <button style={styles.loginButton}>LOGIN</button>
      <div style={styles.registerText}>
        Don't have an account? <a href="#">Register Now!</a>
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
    height: '100vh',
    background: 'linear-gradient(to bottom, #fecd72, #ffffff)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  backButton: {
    background: 'none',
    border: 'none',
    fontSize: '24px',
    marginRight: '10px',
  },
  logo: {
    width: '80px',
    height: '80px',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  welcomeText: {
    marginBottom: '20px',
    fontSize: '18px',
  },
  input: {
    width: '80%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginRight: '10%',
    marginBottom: '20px',
  },
  loginButton: {
    width: '80%',
    padding: '15px',
    backgroundColor: '#d97706',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    marginBottom: '20px',
  },
  registerText: {
    fontSize: '16px',
  },
};

export default Login;
