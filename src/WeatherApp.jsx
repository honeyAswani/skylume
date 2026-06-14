import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 24.84,
        temp: 25.01,
        tempMin: 23.33,
        tempMax: 27.78,
        humidity: 88,
        weather: "overcast clouds",
        icon: "04d",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    let weatherBg = "#f4f6f8";

if (weatherInfo.weather.includes("rain")) {
  weatherBg = "#dbeafe";
}
else if (weatherInfo.weather.includes("clear")) {
  weatherBg = "#fef3c7";
}
else if (weatherInfo.weather.includes("cloud")) {
  weatherBg = "#e5e7eb";
}
else if (weatherInfo.weather.includes("thunderstorm")) {
  weatherBg = "#cbd5e1";
}
    return(
        <div
  style={{
    
    textAlign: "center",
    paddingTop: "40px",
    paddingBottom: "60px",
    minHeight: "100vh",
    backgroundColor: weatherBg,
    transition: "background-color 0.4s ease",
  }}
>
  <h1
    style={{
      fontSize: "2.8rem",
      marginBottom: "12px",
      color: "#1f2937",
      fontWeight: "700",
    letterSpacing: "-1px",
    marginTop: "0px",
    }}
  >
    SkyLume
  </h1>

  <p style={{ color: "#6b7280", marginBottom: "35px" , fontsize: "1rem" }}>
    Clean, real-time weather updates powered by OpenWeather API.
  </p>

  <SearchBox updateInfo={updateInfo} />
  <InfoBox info={weatherInfo} />
  <p
  style={{
    marginTop: "40px",
    color: "#6b7280",
    fontSize: "0.9rem",
  }}
>
  Built with React & OpenWeather API
</p>
</div>
    );
};