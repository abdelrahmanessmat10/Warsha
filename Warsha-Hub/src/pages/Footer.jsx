import { Link } from 'react-router';

export function Footer() {
  return (
    <p className="auth-footer">
      Don't have an account? <Link to="/register">Create account</Link>
    </p>
  );
}