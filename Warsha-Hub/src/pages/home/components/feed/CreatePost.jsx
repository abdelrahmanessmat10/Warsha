import { useState } from 'react';

export function CreatePost({ user, onAddPost }) {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    onAddPost({
      id: Date.now(),
      author: user.name,
      handle: user.handle,
      avatar: user.avatar,
      time: 'Just now',
      content: content.trim(),
      likes: 0,
      isLiked: false,
      comments: [],
    });

    setContent('');
  };

  return (
    <div className="create-post-card">
      <form onSubmit={handleSubmit}>
        <div className="create-post-top">
          <img src={user.avatar} alt={user.name} className="create-post-avatar" />
          <textarea
            className="create-post-input"
            placeholder={`What's on your mind, ${user.name.split(' ')[0]}?`}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={2}
          />
        </div>

        <div className="create-post-bottom">
          <div className="create-post-tools">
            <button type="button" className="tool-btn" title="Add Photo">
              <i className="fa-regular fa-image"></i>
              <span>Photo</span>
            </button>
            <button type="button" className="tool-btn" title="Feeling">
              <i className="fa-regular fa-face-smile"></i>
              <span>Feeling</span>
            </button>
            <button type="button" className="tool-btn" title="Tag Friends">
              <i className="fa-solid fa-user-tag"></i>
              <span>Tag</span>
            </button>
          </div>

          <button
            type="submit"
            className="btn-submit-post"
            disabled={!content.trim()}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
