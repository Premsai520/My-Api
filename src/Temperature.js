import { useState, Suspense, lazy } from "react";
import "./temp.css";
const WeatherCard = lazy(() => import("./Weather.js"));

function App() {
  const [result, setResult] = useState("");
  const [city, setCity] = useState("");
  const [weatherMain, setWeatherMain] = useState("");
  const [country, setCountry] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [icon, setIcon] = useState("");
  const [name, setName] = useState("");
  const [high, setHigh] = useState("");
  const [low, setLow] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const [visibility, setVisibility] = useState("");
  const [pressure, setPressure] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [error, setError] = useState("");
  const [feels , setFeels] = useState("")
  const changeHandler = (e) => {
    setCity(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setError("");
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b5567ebe9b72599c79a1ef5ea996bf8d`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("City Not Found");
        }
        return response.json();
      })

      .then((data) => {
        const kelvin = data.main.temp;
        const celsius = kelvin - 273.15;
        //console.log(celsius)

        setResult(Math.round(celsius));
        setShowCard(true);
        setWeatherMain(data.weather[0].main);
        setIcon(data.weather[0].icon);
        setCountry(data.sys.country);
        setName(data.name);
        var templow = Math.round(data.main.temp_min - 273.15);
        setLow(templow);
        setHigh(Math.round(data.main.temp_max - 273.15));
        setWind(`${data.wind.speed} m/s`);
        setHumidity(`${data.main.humidity}%`);
        setVisibility(`${data.visibility / 1000} km`);
        setPressure(`${data.main.pressure} hPa`);
        setFeels(Math.round(data.main.feels_like- 273.15))

        const sunriseTime = new Date(data.sys.sunrise * 1000);
        const formattedSunrise = sunriseTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        setSunrise(formattedSunrise);
        // Convert the UNIX timestamp to a human-readable time for sunset
        const sunsetTime = new Date(data.sys.sunset * 1000);
        const formattedSunset = sunsetTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        setSunset(formattedSunset);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setError("City not found");
        setShowCard(false);
      });
  };
  const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;

  return (
    <>
    <div className="temp" style={{marginTop:"-20px",height:"100vh"}}>
      {/* Main Part */}
      <h2 className="heading text-dark mt-3 pt-5 mb-3">Find a forecast</h2>
      <form onSubmit={submitHandler}>
        <input
          className="cityinput"
          type="text"
          placeholder="Search by City Name . ."
          value={city}
          onChange={changeHandler}
        />
        <input className="submit1 mb-3" type="submit" />
        {error && <span id="city">{error}</span>}
      </form>
      {showCard && (
        <Suspense fallback={<center><div>Loading Weather Data...</div></center>}>
        <WeatherCard 
          name={name}
          country={country}
          iconUrl={iconUrl}
          result={result}
          weatherMain={weatherMain}
          high={high}
          low={low}
          feels_like={feels}
          wind={wind}
          humidity={humidity}
          visibility={visibility}
          pressure={pressure}
          sunrise={sunrise}
          sunset={sunset}
        />
      </Suspense>
      )}
      </div>
    </>
  );
}
export default App;
