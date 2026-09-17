import { BrandHeader } from './BrandHeader';
import { Footer } from './Footer';
import './LogIn.css'
import { LoginForm } from './LoginForm';
export function LogIn() {
  return (
    <div className="auth-container">
      <div className="auth-card">

        <BrandHeader />
        <LoginForm />
        <Footer />

      </div>
    </div>
  );
}