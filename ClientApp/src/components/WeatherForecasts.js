import React, { useEffect, useState } from 'react';
import './WeatherForecasts.css';

function WeatherForecasts() {
  const [forecasts, setForecasts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);
    fetch('https://localhost:5001/api/SampleData/WeatherForecasts')
      .then(response => response.json())
      .then(data => {
        setForecasts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="weather-container">
      {loading && <div className="full-page-spinner"></div>}
      <h1>Weather Forecasts</h1>
      <button className="refresh-button" onClick={fetchData} disabled={loading}>
        Refresh
      </button>
      <div className="forecast-list">
        {forecasts.map((forecast, index) => (
          <div key={index} className="forecast-item">
            <div className="forecast-date">{forecast.dateFormatted}</div>
            <div className="forecast-temp">{forecast.temperatureC}°C</div>
            <div className="forecast-summary">{forecast.summary}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherForecasts;
