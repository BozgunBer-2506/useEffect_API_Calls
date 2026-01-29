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
    { id: 'userlist', label: 'Part 3: UserList', component: <UserList /> },
    { id: 'userposts', label: 'Part 4: UserPosts', component: <UserPosts /> },
    { id: 'effectdemo', label: 'Part 5: EffectDemo', component: <EffectDemo /> },
    { id: 'postlist', label: 'Part 6: PostList', component: <PostList /> },
    { id: 'usercard', label: 'Part 7: UserCard', component: <UserCard /> },
    { id: 'weather', label: 'Part 8: Weather Dashboard', component: <WeatherDashboard /> },
  ];

  const currentView = views.find(v => v.id === activeView);

  return (
    <div className="app">
      <nav className="nav">
        <h1 className="nav-title">useEffect & API Calls - Practice</h1>
        
        <div className="nav-buttons">
          {views.map(view => (
            <button
              key={view.id}
              onClick={() => setActiveView(view.id)}
              className={`nav-button ${activeView === view.id ? 'active' : ''}`}
            >
              {view.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="main-content">
        {currentView.component}
      </main>
    </div>
  );
}

export default App;