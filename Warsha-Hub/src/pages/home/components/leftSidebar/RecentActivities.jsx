export function RecentActivities({ activities }) {
  return (
    <div className="recent-activities">
      <h4 className="activities-title">Recent Activity</h4>

      {activities && activities.length > 0 ? (
        <ul className="activities-list">
          {activities.map((item) => (
            <li key={item.id} className="activity-item">
              <i className={`activity-icon fa-solid ${item.icon || 'fa-bell'}`}></i>
              <div className="activity-info">
                <p className="activity-text">{item.text}</p>
                <span className="activity-time">{item.time}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="activities-empty">No recent activity yet.</p>
      )}
    </div>
  );
}
