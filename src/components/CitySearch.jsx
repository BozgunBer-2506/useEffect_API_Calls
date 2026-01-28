import { useState, useEffect } from 'react';

function CitySearch({ onCitySelect }) {
  const [search, setSearch] = useState('');
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  // Search cities when search text changes
  useEffect(() => {
    // Don't search if less than 3 characters
    if (search.length < 3) {
      setCities([]);
      return;
    }

    async function searchCities() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(search)}&count=5&language=de`
        );

        if (!response.ok) {
          throw new Error(`HTTP-Fehler: ${response.status}`);
        }

        const data = await response.json();
        setCities(data.results || []);
      } catch (error) {
        console.error('Fehler bei Stadtsuche:', error);
        setCities([]);
      } finally {
        setLoading(false);
      }
    }

    searchCities();
  }, [search]);

  return (
    <div style={{ marginBottom: '24px' }}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Stadt suchen (z.B. Berlin)..."
        style={{
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          boxSizing: 'border-box',
          borderRadius: '8px',
          border: '1px solid #ddd'
        }}
      />

      {loading && <p style={{ color: '#999' }}>Suche...</p>}

      {cities.length > 0 && (
        <ul style={{
          listStyle: 'none',
          padding: 0,
          marginTop: '8px',
          border: '1px solid #eee',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          {cities.map(city => (
            <li
              key={city.id}
              onClick={() => {
                onCitySelect(city);
                setSearch('');
                setCities([]);
              }}
              style={{
                padding: '10px 12px',
                borderBottom: '1px solid #eee',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#f5f5f5'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <span>{city.name}</span>
              <span style={{ color: '#999', fontSize: '14px' }}>
                {city.country}
                {city.admin1 ? `, ${city.admin1}` : ''}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CitySearch;