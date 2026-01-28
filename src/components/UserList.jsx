import { useState, useEffect } from 'react';

function UserPosts() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [posts, setPosts] = useState([]);

  // Effect 1: Load all users on mount
  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );

        if (!response.ok) {
          throw new Error(`HTTP-Fehler: ${response.status}`);
        }

        const data = await response.json();
        setUsers(data);
        console.log('✅ Benutzer für Dropdown geladen');
      } catch (error) {
        console.error('❌ Fehler beim Laden der Benutzer:', error);
      }
    }

    loadUsers();
  }, []);

  // Effect 2: Load posts when selectedUserId changes
  useEffect(() => {
    if (!selectedUserId) {
      setPosts([]);
      return;
    }

    async function loadPosts() {
      try {
        console.log(`🔄 Lade Posts für Benutzer ${selectedUserId}...`);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId}`
        );

        if (!response.ok) {
          throw new Error(`HTTP-Fehler: ${response.status}`);
        }

        const data = await response.json();
        setPosts(data);
        console.log(`✅ ${data.length} Posts für Benutzer ${selectedUserId} geladen`);
      } catch (error) {
        console.error('❌ Fehler beim Laden der Posts:', error);
      }
    }

    loadPosts();
  }, [selectedUserId]);

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '40px auto', 
      padding: '24px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h2 style={{ 
        fontSize: '32px', 
        marginBottom: '24px',
        color: '#333'
      }}>
        User Posts
      </h2>

      {/* User selection dropdown */}
      <select
        value={selectedUserId}
        onChange={(e) => setSelectedUserId(e.target.value)}
        style={{ 
          padding: '12px', 
          fontSize: '16px', 
          width: '100%', 
          marginBottom: '32px',
          borderRadius: '8px',
          border: '2px solid #ddd',
          cursor: 'pointer'
        }}
      >
        <option value="">-- Benutzer auswählen --</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      {/* Display posts or placeholder */}
      {selectedUserId === '' ? (
        <p style={{ 
          color: '#999', 
          textAlign: 'center',
          fontSize: '18px',
          padding: '60px 20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '12px'
        }}>
          Wähle einen Benutzer aus, um seine Posts zu sehen.
        </p>
      ) : (
        <div>
          <h3 style={{ 
            fontSize: '20px', 
            marginBottom: '20px',
            color: '#666'
          }}>
            {posts.length} Posts gefunden
          </h3>
          
          {posts.map(post => (
            <div key={post.id} style={{
              padding: '24px',
              marginBottom: '16px',
              border: '2px solid #e0e0e0',
              borderRadius: '12px',
              backgroundColor: '#fff',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
            }}>
              {/* Post number badge */}
              <span style={{
                display: 'inline-block',
                backgroundColor: '#3498db',
                color: '#fff',
                padding: '4px 12px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: 'bold',
                marginBottom: '12px'
              }}>
                Post #{post.id}
              </span>
              
              {/* Post title */}
              <h4 style={{ 
                margin: '8px 0 12px 0',
                fontSize: '20px',
                color: '#2c3e50',
                lineHeight: '1.4'
              }}>
                {post.title}
              </h4>
              
              {/* Post body */}
              <p style={{ 
                margin: 0, 
                color: '#555', 
                fontSize: '16px',
                lineHeight: '1.6'
              }}>
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