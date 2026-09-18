export function ProfileStats({ stats }) {
  const { posts, followers, following } = stats;

  return (
    <div className="profile-stats">
      <div className="stat-item">
        <strong className="stat-number">{posts}</strong>
        <span className="stat-label">Posts</span>
      </div>

      <div className="stat-divider"></div>

      <div className="stat-item">
        <strong className="stat-number">{followers}</strong>
        <span className="stat-label">Followers</span>
      </div>

      <div className="stat-divider"></div>

      <div className="stat-item">
        <strong className="stat-number">{following}</strong>
        <span className="stat-label">Following</span>
      </div>
    </div>
  );
}
