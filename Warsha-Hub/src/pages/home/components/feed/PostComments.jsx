import { useState } from 'react';

export function PostComments({ comments, onAddComment, currentUserAvatar }) {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    onAddComment(commentText.trim());
    setCommentText('');
  };

  return (
    <div className="post-comments-section">
      {/* Comments List */}
      {comments && comments.length > 0 && (
        <div className="comments-list">
          {comments.map((comment) => (
            <div key={comment.id} className="comment-bubble">
              <img
                src={comment.avatar}
                alt={comment.author}
                className="comment-avatar"
              />
              <div className="comment-body">
                <div className="comment-meta">
                  <strong className="comment-author">{comment.author}</strong>
                  <span className="comment-time">{comment.time}</span>
                </div>
                <p className="comment-text">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Comment Input */}
      <form className="comment-form" onSubmit={handleSubmit}>
        <img
          src={currentUserAvatar}
          alt="My Avatar"
          className="comment-form-avatar"
        />
        <input
          type="text"
          className="comment-input"
          placeholder="Write a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button
          type="submit"
          className="comment-submit-btn"
          disabled={!commentText.trim()}
        >
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
}
