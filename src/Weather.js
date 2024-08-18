// WeatherCard.js

import React from 'react';
import './temp.css'

function WeatherCard({ name, country, iconUrl, result, weatherMain, high, low, humidity, wind,feels_like, visibility, pressure, sunrise, sunset }) {
  return (
    <div className='container' >
    <div className="col-md-10 card card2 mt-5">
      <div className="card-body">
        <h2 className="card-title">
          Current Weather at {name}, {country}
        </h2>
        <div className="row row1 mt-4 mb-5">
          <div className="col-md-2">
            <img src={iconUrl} alt="Weather" className="img-fluid" />
          </div>
          <div className="col-md-2 mt-3">
            <h4 className="temperature">{result}°C</h4>
            <p className="card-text text1">{weatherMain}</p>
          </div>
          <div className="col-md-3 mt-4">
            <p className="card-text text1">Hi {high}°C</p>
            <p className="card-text text1">Lo {low}°C</p>
          </div>
          <div className="col-md-3 mt-5">
            <p className="card-text text1">Feels Like {feels_like}°C</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="box col-md-2 col-sm-4 col-xs-6">
            <p>
              <strong>Humidity</strong>
            </p>
            <p>
              <strong>{humidity}</strong>
            </p>
          </div>
          <div className="box col-md-2 col-sm-4 col-xs-6">
            <p>
              <strong>Wind</strong>
            </p>
            <p>
              <strong>{wind}</strong>
            </p>
          </div>
          <div className="box col-md-2 col-sm-4">
            <p>
              <strong>Visibility</strong>
            </p>
            <p>
              <strong>{visibility}</strong>
            </p>
          </div>
          <div className="box col-md-2 col-sm-4">
            <p>
              <strong>Pressure</strong>
            </p>
            <p>
              <strong>{pressure}</strong>
            </p>
          </div>
          <div className="box col-md-2 col-sm-4">
            <p>
              <strong>Sunrise</strong>
            </p>
            <p>
              <strong>{sunrise}</strong>
            </p>
          </div>
          <div className="box col-md-2 col-sm-4">
            <p>
              <strong>Sunset</strong>
            </p>
            <p>
              <strong>{sunset}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default WeatherCard;
