import { useState } from 'react';

export function RegisterForm() {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Account created for ${fullName}!`);
  };

  return (
    <form className="auth-form" id="register-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          id="fullname"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your full name"
          required
          autoComplete="name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Choose a username"
          required
          autoComplete="username"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          autoComplete="email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <div className="password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a strong password"
            required
            autoComplete="new-password"
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
            aria-label="Toggle password visibility"
          >
            <i className={showPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'}></i>
          </button>
        </div>
      </div>

      <button type="submit" className="auth-submit-btn">
        <span>Create Account</span>
        <i className="fa-solid fa-user-plus"></i>
      </button>
    </form>
  );
}
