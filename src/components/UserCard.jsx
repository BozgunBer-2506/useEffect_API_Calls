import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

function UserCard() {
  const [userId, setUserId] = useState(1);

  // ✨ Magic! One line for all the fetch logic!
  const { data: user, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (loading) {
    return (
      <p style={{ textAlign: 'center', padding: '40px' }}>
        Lade User...
      </p>
    );
  }

  if (error) {
    return (
      <p style={{ color: 'red', textAlign: 'center', padding: '40px' }}>
        Fehler: {error}
      </p>
    );
  }

  if (!user) return null;

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '24px' }}>
      <h2>User Details</h2>

      <div style={{
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '12px',
        marginBottom: '16px',
        backgroundColor: '#f8f9fa'
      }}>
        <h3 style={{ margin: '0 0 8px 0' }}>{user.name}</h3>
        <p style={{ margin: '4px 0', color: '#666' }}>📧 {user.email}</p>
        <p style={{ margin: '4px 0', color: '#666' }}>📞 {user.phone}</p>
        <p style={{ margin: '4px 0', color: '#999', fontSize: '14px' }}>
          🏢 {user.company.name} | 📍 {user.address.city}
        </p>
      </div>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {[1, 2, 3, 4, 5].map(id => (
          <button
            key={id}
            onClick={() => setUserId(id)}
            style={{
              padding: '8px 16px',
              background: userId === id ? '#3498db' : '#ecf0f1',
              color: userId === id ? '#fff' : '#333',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            User {id}
          </button>
        ))}
      </div>
    </div>
  );
}

export default UserCard;