import { useState } from 'react';
import CitySearch from './CitySearch';
import WeatherDisplay from './WeatherDisplay';

function WeatherDashboard() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '24px' }}>
      <h1 style={{ textAlign: 'center' }}>Wetter-Dashboard</h1>

      <CitySearch onCitySelect={setSelectedCity} />

      {selectedCity ? (
        <WeatherDisplay city={selectedCity} />
      ) : (
        <p style={{ textAlign: 'center', color: '#999', padding: '40px' }}>
          Suche nach einer Stadt, um das Wetter anzuzeigen.
        </p>
      )}
    </div>
  );
}

export default WeatherDashboard;