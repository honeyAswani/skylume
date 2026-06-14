import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import RainIcon from '@mui/icons-material/Grain';
import ClearIcon from '@mui/icons-material/WbSunny';
import CloudsIcon from '@mui/icons-material/Cloud';

export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let COLD_URL = "https://images.unsplash.com/photo-1516116216624-53e697fedbe2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let HOT_URL = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60";
    let RAIN_URL = "https://images.unsplash.com/photo-1527766833261-b09c3163a791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbmV5JTIwd2VhdGh8ZW58MHx8MHx8fHww";
  const ICON_URL = `https://openweathermap.org/img/wn/${info.icon}@2x.png`;
    const today = new Date().toDateString();

    return (
        <div className='InfoBox'>
            
            <div className="CardContainer">
            <Card
  sx={{
    width: {
      xs: "90%",
      sm: 380,
    },
    borderRadius: 4,
  }}
>
      <CardMedia
        sx={{ height: 100 }}
        image={info.weather.toLowerCase().includes("rain")
    ? Rain_URl
    : info.weather.toLowerCase().includes("clear")
    ? HOT_URL
    : info.weather.toLowerCase().includes("cloud")
    ? INIT_URL
    : info.weather.toLowerCase().includes("thunderstorm")
    ? Rain_URl
    : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography
  gutterBottom
  variant="h5"
  component="div"
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: 600,
  }}
>
  {info.city.toUpperCase()}

  <img
    src={ICON_URL}
    alt="weather icon"
    style={{ width: "50px", height: "50px" }}
  />
</Typography>
        <Typography
  variant="body2"
  sx={{
    color: "text.secondary",
    marginTop: "10px",
    lineHeight: "1.8",
    fontSize: "0.95rem",
  }}
>{today} <br />

  Temperature: {info.temp}&deg;C <br />
  Feels Like: {info.feelsLike}&deg;C <br />
  Min Temp: {info.tempMin}&deg;C <br />
  Max Temp: {info.tempMax}&deg;C <br />
  Humidity: {info.humidity}% <br />
  Weather: {info.weather.charAt(0).toUpperCase() + info.weather.slice(1)}

</Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}