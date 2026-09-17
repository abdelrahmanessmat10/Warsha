import { Link } from 'react-router';
import { BrandHeader } from './BrandHeader';
import { RegisterForm } from './RegisterForm';
import './LogIn.css';

export function Register() {
  return (
    <div className="auth-container">
      <div className="auth-card">

        <BrandHeader />
        <RegisterForm />
        
        <p className="auth-footer">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>

      </div>
    </div>
  );
}
