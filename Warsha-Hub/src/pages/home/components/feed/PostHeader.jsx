export function PostHeader({ author, handle, avatar, time, onDelete }) {
  return (
    <header className="post-header">
      <div className="post-author-info">
        <img src={avatar} alt={author} className="post-avatar" />
        <div>
          <h4 className="post-author-name">{author}</h4>
          <span className="post-meta">
            {handle} • {time}
          </span>
        </div>
      </div>

      <button
        type="button"
        className="post-menu-btn"
        onClick={onDelete}
        title="Delete post"
        aria-label="Delete post"
      >
        <i className="fa-solid fa-ellipsis"></i>
      </button>
    </header>
  );
}
