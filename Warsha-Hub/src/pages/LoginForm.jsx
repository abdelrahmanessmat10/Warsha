export function LoginForm() {
  return (
    <form className="auth-form" id="login-form">
      <div className="form-group">
        <label htmlFor="username">Username or Email</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
          required
          autoComplete="username"
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <div className="password-wrapper">
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
            autoComplete="current-password"
          />
          <button
            type="button"
            className="toggle-password"
            id="toggle-password"
            aria-label="Toggle password visibility"
          >
            <i className="fa-regular fa-eye"></i>
          </button>
        </div>
      </div>

      <div className="form-options">
        <label className="remember-me">
          <input
            type="checkbox"
            id="remember-me"
            defaultChecked
          />
          <span>Remember me</span>
        </label>
        <a href="#" className="forgot-link">Forgot password?</a>
      </div>

      <button type="submit" className="auth-submit-btn">
        <span>Sign In</span>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </form>

  );
}