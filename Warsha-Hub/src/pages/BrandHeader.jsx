export function BrandHeader() {
  return (
    <>
      <div className="auth-logo-container" title="Warsha Hub">
        <img
          src="/images/logo.png"
          alt="Warsha Hub Logo"
          className="auth-logo"
        />
      </div>
      <h1 className="auth-title">Warsha Hub</h1>
      <p className="auth-subtitle">
        Connect <span className="dot">•</span> Learn <span className="dot">•</span> Grow
      </p>
    </>

  );
}