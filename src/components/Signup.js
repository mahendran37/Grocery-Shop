import React, { useState } from 'react';

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
    <div className="container mt-4"
    style={{display:'flex', alignItems:'center', justifyContent:'center',}}>
      <h2>Simple Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="form-control mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{width:'300px'}}
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
        <button className="btn btn-success">Signup</button>
      </form>
    </div>
  );
}

export default Signup;