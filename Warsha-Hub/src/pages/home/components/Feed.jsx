import { useState } from 'react';
import { CreatePost } from './feed/CreatePost';
import { PostCard } from './feed/PostCard';
import './Feed.css';

export function Feed() {
  const currentUser = {
    name: 'Abdelrahman Essmat',
    handle: '@abdelrahman',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Abdelrahman',
  };

  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Ziaf',
      handle: '@ziaf',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ziaf',
      time: '25m ago',
      content:
        'Just pushed the new updates to the repo! The component structure is looking so clean now.',
      likes: 6,
      isLiked: false,
      comments: [
        {
          id: 101,
          author: 'Seif',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Seif',
          text: 'Great work man, checking it out now!',
          time: '15m ago',
        },
      ],
    },
    {
      id: 2,
      author: 'Gomaa',
      handle: '@gomaa',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Gomaa',
      time: '2h ago',
      content:
        'Who is down for a group call tonight to plan the next phase of Warsha Hub?',
      likes: 12,
      isLiked: true,
      comments: [
        {
          id: 102,
          author: 'Wageeh',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Wageeh',
          text: 'Count me in around 9 PM 👍',
          time: '1h ago',
        },
      ],
    },
  ]);

  // 1. Create a new post
  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  // 2. Toggle like on a post
  const handleToggleLike = (postId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          const isLiked = !post.isLiked;
          return {
            ...post,
            isLiked,
            likes: isLiked ? post.likes + 1 : post.likes - 1,
          };
        }
        return post;
      })
    );
  };

  // 3. Add comment to a specific post
  const handleAddComment = (postId, text) => {
    const newComment = {
      id: Date.now(),
      author: currentUser.name.split(' ')[0],
      avatar: currentUser.avatar,
      text,
      time: 'Just now',
    };

    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...(post.comments || []), newComment],
          };
        }
        return post;
      })
    );
  };

  // 4. Delete a post
  const handleDeletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <section className="feed-container">
      <CreatePost user={currentUser} onAddPost={handleAddPost} />

      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          currentUser={currentUser}
          onToggleLike={handleToggleLike}
          onAddComment={handleAddComment}
          onDelete={handleDeletePost}
        />
      ))}
    </section>
  );
}
