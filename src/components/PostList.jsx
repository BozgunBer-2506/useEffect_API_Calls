import { useState, useEffect, useCallback } from 'react';

function PostList() {
  // Three states for professional API calls
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Extract fetch logic so we can reuse it
  const loadPosts = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=10'
      );

      if (!response.ok) {
        throw new Error(`HTTP-Fehler: ${response.status}`);
      }

      const data = await response.json();
      setPosts(data);
      console.log('✅ Posts geladen:', data.length);
    } catch (err) {
      setError(err.message);
      console.error('❌ Fehler beim Laden:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Load posts on mount
  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  // Loading state
  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '4px solid #eee',
          borderTop: '4px solid #3498db',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 16px'
        }} />
        <p>Lade Posts...</p>
        <style>{`
          @keyframes spin { 
            to { transform: rotate(360deg); } 
          }
        `}</style>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <p style={{ color: '#e74c3c', fontSize: '18px', marginBottom: '16px' }}>
          Fehler: {error}
        </p>
        <button
          onClick={loadPosts}
          style={{
            padding: '10px 24px',
            fontSize: '16px',
            cursor: 'pointer',
            background: '#3498db',
            color: '#fff',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Erneut laden
        </button>
      </div>
    );
  }

  // Success state
  return (
    <div style={{ maxWidth: '700px', margin: '40px auto', padding: '24px' }}>
      <h2>Blog Posts ({posts.length})</h2>

      {posts.map(post => (
        <article 
          key={post.id} 
          style={{
            padding: '16px',
            marginBottom: '16px',
            border: '1px solid #eee',
            borderRadius: '8px'
          }}
        >
          <h3 style={{ margin: '0 0 8px 0' }}>{post.title}</h3>
          <p style={{ margin: 0, color: '#666' }}>{post.body}</p>
        </article>
      ))}
    </div>
  );
}

export default PostList;