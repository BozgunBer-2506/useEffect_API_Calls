# useEffect & API Calls - Practice Exercise

A React practice project focused on learning `useEffect` hook and API integration. This project was completed as part of my React learning journey.

## 🌐 Live Demo

Check out the live application: [https://use-effect-api-calls.vercel.app/](https://use-effect-api-calls.vercel.app/)

## 📚 What I Learned

This exercise helped me understand and practice:

- How to use the `fetch` API for making HTTP requests
- Working with Promises and `async/await` syntax
- Using React's `useEffect` hook for side effects
- Managing component lifecycle with dependency arrays
- Handling loading and error states in applications
- Creating custom hooks for reusable logic
- Integrating multiple APIs in a single application

## 🎯 Project Structure

The project is divided into 8 parts (Teil 1-8), each focusing on different concepts:

### Teil 3: UserList
My first component using `useEffect` to fetch data from an API and display a list of users.

**What I practiced:**
- Basic `useEffect` usage
- API calls on component mount
- Displaying fetched data

### Teil 4: UserPosts
A component with a dropdown to select users and display their posts dynamically.

**What I practiced:**
- Reactive API calls based on user input
- Dependency arrays with variables
- Dynamic data loading

### Teil 5: EffectDemo
An interactive demo showing how different dependency arrays work.

**What I practiced:**
- Understanding when effects run
- Empty dependency array `[]`
- Single dependency `[variable]`
- Multiple dependencies `[a, b]`
- Console logging for debugging

### Teil 6: PostList
A blog post list with proper loading and error handling.

**What I practiced:**
- Three-state pattern (data, loading, error)
- Loading indicators
- Error messages
- Retry functionality
- `try/catch/finally` blocks

### Teil 7: UserCard
My first custom hook! A reusable `useFetch` hook that simplifies data fetching.

**What I practiced:**
- Creating custom hooks
- Reusing logic across components
- Hook composition
- One-line data fetching

### Teil 8: Wetter-Dashboard (Weather Dashboard)
The final project! A weather application using two different APIs.

**What I practiced:**
- Multi-API integration
- Search functionality
- Real-time data fetching
- Component composition
- User experience optimization

## 🛠️ Technologies Used

- **React 18** - JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Open-Meteo API** - Free weather and geocoding API
- **JSONPlaceholder** - Fake REST API for testing

## 🚀 Getting Started

### Prerequisites

- Node.js v20.19+ or v22.12+
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/BozgunBer-2506/useEffect_API_Calls.git

# Navigate to project directory
cd useEffect_API_Calls

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:3000`

## 📂 Project Structure
```
src/
├── api/
│   └── fetchUsers.js          # API utility functions
├── hooks/
│   └── useFetch.js            # Custom fetch hook
├── components/
│   ├── UserList.jsx           # Teil 3: Basic useEffect
│   ├── UserPosts.jsx          # Teil 4: Dynamic API calls
│   ├── EffectDemo.jsx         # Teil 5: Dependency arrays
│   ├── PostList.jsx           # Teil 6: Loading & error states
│   ├── UserCard.jsx           # Teil 7: Custom hook usage
│   ├── WeatherDashboard.jsx   # Teil 8: Main weather component
│   ├── CitySearch.jsx         # Teil 8: City search
│   └── WeatherDisplay.jsx     # Teil 8: Weather display
├── App.jsx                    # Navigation and routing
└── main.jsx                   # Application entry point
```

## 🎓 Key Concepts Practiced

### useEffect Hook
```javascript
// Runs once on mount
useEffect(() => {
  fetchData();
}, []);

// Runs when dependency changes
useEffect(() => {
  fetchData(userId);
}, [userId]);
```

### Custom Hooks
```javascript
// Reusable fetch logic
const { data, loading, error } = useFetch(url);
```

### Error Handling
```javascript
try {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
  const data = await response.json();
  setData(data);
} catch (error) {
  setError(error.message);
} finally {
  setLoading(false);
}
```

## 🌟 Features

- ✅ Interactive navigation between different exercises
- ✅ Real-time city search with autocomplete
- ✅ Live weather data from Open-Meteo API
- ✅ Loading states and error handling
- ✅ Responsive design
- ✅ Clean and documented code

## 🐛 Challenges I Faced

1. **Understanding useEffect dependency arrays** - Learned when to use empty arrays vs. variables
2. **Handling async operations** - Practiced proper error handling with try/catch
3. **Race conditions** - Discovered why cleanup functions are important
4. **API integration** - Learned to work with multiple APIs simultaneously

## 📖 What's Next?

After completing this exercise, I plan to:
- Learn about React Context API for global state management
- Explore React Router for multi-page applications
- Practice with more complex API integrations
- Build a full-stack application

## 📝 Notes

- This project uses **inline CSS** for styling (as required by the exercise)
- All API calls are made to **free, public APIs** (no API keys required)
- The project demonstrates **best practices** for handling API calls in React

## 🙏 Acknowledgments

This project was completed as part of a React Hooks learning curriculum. Special thanks to the instructors and the open-source community for the excellent learning resources.

---

**Created as a learning project by The_Bozgun** | **January 2026**