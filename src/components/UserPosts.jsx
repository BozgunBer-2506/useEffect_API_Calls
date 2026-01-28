import { useState, useEffect } from 'react';

function UserPosts() {
  // State for users list
  const [users, setUsers] = useState([]);
  // State for selected user ID
  const [selectedUserId, setSelectedUserId] = useState('');
  // State for posts of selected user
  const [posts, setPosts] = useState([]);

  // Effect 1: Load all users on mount
  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        setUsers(data);
        console.log('✅ Users loaded for dropdown');
      } catch (error) {
        console.error('❌ Error loading users:', error);
      }
    }

    loadUsers();
  }, []); // Run only once

  // Effect 2: Load posts when selectedUserId changes
  useEffect(() => {
    // Don't load if no user is selected
    if (!selectedUserId) {
      setPosts([]);
      return;
    }

    async function loadPosts() {
      try {
        console.log(`🔄 Loading posts for user ${selectedUserId}...`);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId}`
        );

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        setPosts(data);
        console.log(`✅ Loaded ${data.length} posts for user ${selectedUserId}`);
      } catch (error) {
        console.error('❌ Error loading posts:', error);
      }
    }

    loadPosts();
  }, [selectedUserId]); // Run whenever selectedUserId changes!

  return (
    <div style={{ maxWidth: '700px', margin: '40px auto', padding: '24px' }}>
      <h2>User Posts</h2>

      {/* User selection dropdown */}
      <select
        value={selectedUserId}
        onChange={(e) => setSelectedUserId(e.target.value)}
        style={{ 
          padding: '10px', 
          fontSize: '16px', 
          width: '100%', 
          marginBottom: '24px' 
        }}
      >
        <option value="">-- Select a user --</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      {/* Display posts or placeholder */}
      {selectedUserId === '' ? (
        <p style={{ color: '#999', textAlign: 'center' }}>
          Select a user to see their posts.
        </p>
      ) : (
        <div>
          <h3>{posts.length} posts found</h3>
          {posts.map(post => (
            <div key={post.id} style={{
              padding: '16px',
              marginBottom: '12px',
              border: '1px solid #eee',
              borderRadius: '8px'
            }}>
              <h4 style={{ margin: '0 0 8px 0' }}>{post.title}</h4>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                {post.body}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserPosts;