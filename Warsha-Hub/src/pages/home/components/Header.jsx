import { Link } from 'react-router';
import './Header.css';

export function Header() {
  return (
    <header className="main-header">
      <div className="header-container">

        {/* 1. Left: Brand & Logo */}
        <Link to="/" className="header-brand" title="Warsha">
          <div className="header-logo-badge">
            <img src="/images/logo.png" alt="Warsha Logo" className="header-logo" />
          </div>
          <span className="header-brand-name">Warsha Hub</span>
        </Link>

        {/* 2. Center: Search Bar */}
        <div className="header-search">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
          <input
            type="text"
            placeholder="Search for friends, posts..."
            className="search-input"
          />
        </div>

        {/* 3. Right: Messages, Notifications, Avatar */}
        <div className="header-actions">
          <button type="button" className="header-icon-btn" title="Messages" aria-label="Messages">
            <i className="fa-regular fa-comment-dots"></i>
            <span className="badge-count">3</span>
          </button>

          <button type="button" className="header-icon-btn" title="Notifications" aria-label="Notifications">
            <i className="fa-regular fa-bell"></i>
            <span className="badge-count">5</span>
          </button>

          <Link to="/profile" className="header-profile-link" title="My Profile">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Abdelrahman"
              alt="My Profile"
              className="header-avatar"
            />
            <span className="online-dot" title="Online"></span>
          </Link>
        </div>

      </div>
    </header>
  );
}
