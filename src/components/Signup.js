import React, { useState } from 'react';
import '../components/Signup.css';
function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert('All fields are required ❌');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Invalid email format ❌');
    } else if (password.length < 6) {
      alert('Password must be at least 6 characters ❌');
    } else {
      alert('Signup Successful ✅');
      console.log({ name, email, password });
    }
  };

  return (
    <>
    <div className=" signup-container mt-4">
      <form onSubmit={handleSubmit} className='signup-form'>
        <h2> Signup</h2>
        <input
          type="text"
          placeholder="Name"
          className="form-control mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{width:'300px',}}
        />
        <input
          type="email"
          placeholder="Email"
          className="form-control mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{width:'300px'}}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{width:'300px',}}
        />
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
    </>
  );
}

export default Signup;