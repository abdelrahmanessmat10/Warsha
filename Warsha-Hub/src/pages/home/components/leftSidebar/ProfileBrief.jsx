export function ProfileBrief({ name, handle, avatar }) {
  return (
    <div className="profile-brief">
      <img src={avatar} alt={name} className="profile-brief-avatar" />
      <h3 className="profile-brief-name">{name}</h3>
      <span className="profile-brief-handle">{handle}</span>
    </div>
  );
}
