import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import './SearchBox.css';
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
    const [loading, setLoading] = useState(false);
    let [city, setCity] = useState("");
    let [error, setError] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    let getWeatherInfo = async () =>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        if (jsonResponse.cod != 200) {
            throw new Error("City not found");
        }
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
            icon: jsonResponse.weather[0].icon,
        };
        console.log(result);
        return result;
        }catch(err){
            setError("City not found. Please try again.");
            throw err;
        }
        
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        try{
            setLoading(true);
            setError("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
        }catch(err){
            console.error(err);
        }
        finally {
        setLoading(false);
    }
    }
    let getCurrentLocationWeather = async () => {

    navigator.geolocation.getCurrentPosition(async (position) => {

        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        let response = await fetch(
            `${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );

        let jsonResponse = await response.json();

        let result = {
            city: jsonResponse.name,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };

        updateInfo(result);
    },
    (error) => {
    console.log(error);
  },

  {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  }
);
};
    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required />
                <Button variant="contained" type="submit" disabled={loading} sx={{ marginTop: "0px" }}>
                    {loading ? "Loading..." : "Search"}
                </Button>
                <Button
  variant="outlined"
  sx={{ marginTop: "10px" }}
  onClick={getCurrentLocationWeather}
>
  Use My Location
</Button>
                
                {error && (
  <Alert
    severity="error"
    sx={{
      marginTop: 2,
      width: "300px",
    }}
  >
    {error}
  </Alert>
)}
            </form>
        </div>
    );
}