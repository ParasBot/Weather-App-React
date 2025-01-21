import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import './InfoBox.css'

export default function InfoBox({info}) {
    const INIT_URL = "https://th.bing.com/th/id/OIP.IWX4BJ_abeyaOxfKwv7u4QHaEJ?w=276&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";

    const HOT_URL = "https://th.bing.com/th/id/OIP.tu_tLQuMJSMACn9InKkZDAHaER?w=281&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
    const COLD_URL = "https://th.bing.com/th/id/OIP.gayyuMl64rQKgwCIfsJ8DQHaHa?pid=ImgDet&w=197&h=197&c=7&dpr=1.3";
    const RAIN_URL = "https://th.bing.com/th/id/OIP.nmlojOfMZLus8pgAPsjLzQHaEJ?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
    return (
        <div className="InfoBox">
            <div className="card-container">
                <Card sx={{ maxWidth: 345 }} className="card">
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL }
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {
                              info.humidity > 80 ? <ThunderstormIcon></ThunderstormIcon> : info.temp > 15 ? <WbSunnyIcon></WbSunnyIcon> : <AcUnitIcon></AcUnitIcon> 
                            }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Feels Like: {info.feelsLike}°C</p>
                        <p>Temperature: {info.temp}°C</p>
                        <p>Min Temp: {info.tempMin}°C</p>
                        <p>Max Temp: {info.tempMax}°C</p>
                        <p>Humidity: {info.humidity}%</p>
                        <p>
                          The weather can be described as {info.weather} and feels like {info.feelsLike}°C
                        </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
