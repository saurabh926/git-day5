 import React, { useState } from 'react';
 
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div><div>
       hi i am saurbh rawat
      </div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button><div>
        <h1>Cybrom Connect</h1>
        Codemithra is a leading education and placement platform that helps students achieve certification and get placements in large MNCs.

We help students improve their aptitude skills, communication and interpersonal abilities thus making them industry-ready.

        </div>
      </form>
    </div>
  );
};

export default Login;
