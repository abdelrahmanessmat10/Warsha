import { useState } from 'react';
import { PostHeader } from './PostHeader';
import { PostActions } from './PostActions';
import { PostComments } from './PostComments';

export function PostCard({
  post,
  currentUser,
  onToggleLike,
  onAddComment,
  onDelete,
}) {
  const [showComments, setShowComments] = useState(false);

  return (
    <article className="post-card">
      <PostHeader
        author={post.author}
        handle={post.handle}
        avatar={post.avatar}
        time={post.time}
        onDelete={() => onDelete(post.id)}
      />

      <div className="post-body">
        <p className="post-text">{post.content}</p>
        {post.image && (
          <img src={post.image} alt="Post attachment" className="post-media-image" />
        )}
      </div>

      <PostActions
        likes={post.likes}
        isLiked={post.isLiked}
        commentsCount={post.comments ? post.comments.length : 0}
        onToggleLike={() => onToggleLike(post.id)}
        onToggleComments={() => setShowComments(!showComments)}
      />

      {showComments && (
        <PostComments
          comments={post.comments || []}
          currentUserAvatar={currentUser.avatar}
          onAddComment={(text) => onAddComment(post.id, text)}
        />
      )}
    </article>
  );
}
