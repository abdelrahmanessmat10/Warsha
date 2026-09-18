import { useState } from 'react';
import { Link } from 'react-router';
import { ProfileBrief } from './leftSidebar/ProfileBrief';
import { ProfileStats } from './leftSidebar/ProfileStats';
import { RecentActivities } from './leftSidebar/RecentActivities';
import './LeftSidebar.css';

export function LeftSidebar() {
  const [currentUser] = useState({
    name: 'Abdelrahman Essmat',
    handle: '@abdelrahman',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Abdelrahman',
    stats: {
      posts: 24,
      followers: 480,
      following: 312,
    },
    activities: [
      { id: 1, text: 'Liked a post by Ziaf', time: '15m ago', icon: 'fa-heart' },
      { id: 2, text: "Commented on Seif's update", time: '2h ago', icon: 'fa-comment' },
      { id: 3, text: 'Shared a photo in Warsha Group', time: 'Yesterday', icon: 'fa-share' },
    ],
  });

  return (
    <aside className="left-sidebar">
      <div className="profile-card">
        <ProfileBrief
          name={currentUser.name}
          handle={currentUser.handle}
          avatar={currentUser.avatar}
        />
        <ProfileStats stats={currentUser.stats} />

        <Link to="/profile" className="btn-view-profile">
          <i className="fa-regular fa-user"></i>
          <span>View Profile</span>
        </Link>
      </div>

      <RecentActivities activities={currentUser.activities} />
    </aside>
  );
}
