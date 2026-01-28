import { useFetch } from '../hooks/useFetch';

// Weather code to description mapping
function getWeatherDescription(code) {
  const descriptions = {
    0: 'Klar',
    1: 'Überwiegend klar',
    2: 'Teilweise bewölkt',
    3: 'Bedeckt',
    45: 'Nebel',
    48: 'Nebel mit Reif',
    51: 'Leichter Nieselregen',
    53: 'Nieselregen',
    55: 'Starker Nieselregen',
    61: 'Leichter Regen',
    63: 'Regen',
    65: 'Starker Regen',
    71: 'Leichter Schnee',
    73: 'Schnee',
    75: 'Starker Schnee',
    80: 'Regenschauer',
    81: 'Starke Regenschauer',
    95: 'Gewitter'
  };
  return descriptions[code] || 'Unbekannt';
}

function WeatherDisplay({ city }) {
  // Use our custom hook to fetch weather data
  const { data, loading, error } = useFetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current=temperature_2m,wind_speed_10m,weather_code&timezone=auto`
  );

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <p>Lade Wetterdaten...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', color: '#e74c3c' }}>
        <p>Fehler: {error}</p>
      </div>
    );
  }

  if (!data) return null;

  const current = data.current;

  return (
    <div style={{
      padding: '24px',
      border: '1px solid #ddd',
      borderRadius: '12px',
      textAlign: 'center'
    }}>
      <h2 style={{ margin: '0 0 4px 0' }}>{city.name}</h2>
      <p style={{ margin: '0 0 16px 0', color: '#999' }}>
        {city.country}{city.admin1 ? `, ${city.admin1}` : ''}
      </p>

      <p style={{ fontSize: '48px', margin: '0 0 8px 0', fontWeight: 'bold' }}>
        {Math.round(current.temperature_2m)}°C
      </p>

      <p style={{ fontSize: '18px', color: '#666', margin: '0 0 16px 0' }}>
        {getWeatherDescription(current.weather_code)}
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
        <div>
          <p style={{ margin: 0, fontSize: '14px', color: '#999' }}>Wind</p>
          <p style={{ margin: 0, fontWeight: 'bold' }}>
            {current.wind_speed_10m} km/h
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;