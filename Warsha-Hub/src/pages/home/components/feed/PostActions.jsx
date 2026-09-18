export function PostActions({
  likes,
  isLiked,
  commentsCount,
  onToggleLike,
  onToggleComments,
}) {
  return (
    <div className="post-actions-bar">
      <button
        type="button"
        className={`action-btn ${isLiked ? 'liked' : ''}`}
        onClick={onToggleLike}
      >
        <i className={isLiked ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}></i>
        <span>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
      </button>

      <button type="button" className="action-btn" onClick={onToggleComments}>
        <i className="fa-regular fa-comment"></i>
        <span>{commentsCount} {commentsCount === 1 ? 'Comment' : 'Comments'}</span>
      </button>

      <button type="button" className="action-btn">
        <i className="fa-solid fa-share-nodes"></i>
        <span>Share</span>
      </button>
    </div>
  );
}
