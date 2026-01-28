import { useState } from 'react'
import './App.css'

import UserList from './components/UserList'
import UserPosts from './components/UserPosts'
import EffectDemo from './components/EffectDemo'
import PostList from './components/PostList'
import UserCard from './components/UserCard'
import WeatherDashboard from './components/WeatherDashboard'

function App() {
  const [activeView, setActiveView] = useState('weather');

  const views = [
    { id: 'userlist', label: 'Teil 3: UserList', component: <UserList /> },
    { id: 'userposts', label: 'Teil 4: UserPosts', component: <UserPosts /> },
    { id: 'effectdemo', label: 'Teil 5: EffectDemo', component: <EffectDemo /> },
    { id: 'postlist', label: 'Teil 6: PostList', component: <PostList /> },
    { id: 'usercard', label: 'Teil 7: UserCard', component: <UserCard /> },
    { id: 'weather', label: 'Teil 8: Wetter-Dashboard', component: <WeatherDashboard /> },
  ];

  const currentView = views.find(v => v.id === activeView);

  return (
    <div className="app">
      {/* Navigation Menu */}
      <nav style={{
        backgroundColor: '#2c3e50',
        padding: '16px',
        marginBottom: '24px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ 
          color: '#fff', 
          margin: '0 0 16px 0',
          textAlign: 'center',
          fontSize: '24px'
        }}>
          useEffect & API Calls - Übung
        </h1>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          justifyContent: 'center',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {views.map(view => (
            <button
              key={view.id}
              onClick={() => setActiveView(view.id)}
              style={{
                padding: '10px 16px',
                fontSize: '14px',
                cursor: 'pointer',
                backgroundColor: activeView === view.id ? '#3498db' : '#34495e',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                if (activeView !== view.id) {
                  e.currentTarget.style.backgroundColor = '#4a5f7f';
                }
              }}
              onMouseLeave={(e) => {
                if (activeView !== view.id) {
                  e.currentTarget.style.backgroundColor = '#34495e';
                }
              }}
            >
              {view.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Current View */}
      <main>
        {currentView.component}
      </main>
    </div>
  );
}

export default App;