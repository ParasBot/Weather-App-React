import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css'

function AnimatedWeatherIcon({ weather, temp, humidity, theme }) {
  // Use animated SVGs for demo; you can swap for Lottie if desired
  if (humidity > 80) {
    // Rain/Thunderstorm
    return (
      <span className="animated-weather-icon" title="Rain">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <ellipse cx="20" cy="20" rx="14" ry="10" fill="#90caf9">
            <animate attributeName="cy" values="20;22;20" dur="1.2s" repeatCount="indefinite"/>
          </ellipse>
          <rect x="17" y="28" width="2" height="8" rx="1" fill="#2196f3">
            <animate attributeName="y" values="28;32;28" dur="0.8s" repeatCount="indefinite"/>
          </rect>
          <rect x="21" y="28" width="2" height="8" rx="1" fill="#2196f3">
            <animate attributeName="y" values="28;34;28" dur="1s" repeatCount="indefinite"/>
          </rect>
        </svg>
      </span>
    );
  } else if (temp > 15) {
    // Sunny
    return (
      <span className="animated-weather-icon" title="Sunny">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="10" fill="#FFD600">
            <animate attributeName="r" values="10;12;10" dur="1.2s" repeatCount="indefinite"/>
          </circle>
          <g>
            <line x1="20" y1="2" x2="20" y2="10" stroke="#FFD600" strokeWidth="2">
              <animate attributeName="y2" values="10;6;10" dur="1.2s" repeatCount="indefinite"/>
            </line>
            <line x1="20" y1="30" x2="20" y2="38" stroke="#FFD600" strokeWidth="2"/>
            <line x1="2" y1="20" x2="10" y2="20" stroke="#FFD600" strokeWidth="2"/>
            <line x1="30" y1="20" x2="38" y2="20" stroke="#FFD600" strokeWidth="2"/>
          </g>
        </svg>
      </span>
    );
  } else {
    // Cold/Snow
    return (
      <span className="animated-weather-icon" title="Snow">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="10" fill="#b3e5fc">
            <animate attributeName="r" values="10;12;10" dur="1.2s" repeatCount="indefinite"/>
          </circle>
          <g>
            <line x1="20" y1="30" x2="20" y2="38" stroke="#81d4fa" strokeWidth="2">
              <animate attributeName="y2" values="38;34;38" dur="1.2s" repeatCount="indefinite"/>
            </line>
            <circle cx="20" cy="36" r="2" fill="#81d4fa">
              <animate attributeName="cy" values="36;38;36" dur="1.2s" repeatCount="indefinite"/>
            </circle>
          </g>
        </svg>
      </span>
    );
  }
}

function getThermometerClass(theme) {
  if (theme === 'theme-hot') return '';
  if (theme === 'theme-cold') return 'thermometer-cold';
  if (theme === 'theme-mild') return 'thermometer-mild';
  if (theme === 'theme-night') return 'thermometer-night';
  return '';
}

function getTempTextClass(theme) {
  if (theme === 'theme-hot') return 'temp-text';
  if (theme === 'theme-cold') return 'temp-text temp-text-cold';
  if (theme === 'theme-mild') return 'temp-text temp-text-mild';
  if (theme === 'theme-night') return 'temp-text temp-text-night';
  return 'temp-text';
}

export default function InfoBox({info, theme}) {
    const INIT_URL = "https://th.bing.com/th/id/OIP.IWX4BJ_abeyaOxfKwv7u4QHaEJ?w=276&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
    const HOT_URL = "https://th.bing.com/th/id/OIP.tu_tLQuMJSMACn9InKkZDAHaER?w=281&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
    const COLD_URL = "https://th.bing.com/th/id/OIP.gayyuMl64rQKgwCIfsJ8DQHaHa?pid=ImgDet&w=197&h=197&c=7&dpr=1.3";
    const RAIN_URL = "https://th.bing.com/th/id/OIP.nmlojOfMZLus8pgAPsjLzQHaEJ?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";

    // Thermometer fill height (0-100%)
    const tempPercent = Math.max(0, Math.min(1, (info.temp - (-10)) / 45)); // -10°C to 35°C
    const thermometerFillStyle = {
      height: `${Math.round(tempPercent * 100)}%`,
      background: undefined,
    };
    if (theme === 'theme-hot') thermometerFillStyle.background = 'linear-gradient(to top, #ff5e62 0%, #ff9966 100%)';
    if (theme === 'theme-cold') thermometerFillStyle.background = 'linear-gradient(to top, #83a4d4 0%, #b6fbff 100%)';
    if (theme === 'theme-mild') thermometerFillStyle.background = 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)';
    if (theme === 'theme-night') thermometerFillStyle.background = 'linear-gradient(to top, #232526 0%, #414345 100%)';

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
                            {info.city} <AnimatedWeatherIcon weather={info.weather} temp={info.temp} humidity={info.humidity} theme={theme} />
                        </Typography>
                        {/* Thermometer visualization */}
                        <div className={`thermometer ${getThermometerClass(theme)}`}> 
                          <div className="thermometer-fill" style={thermometerFillStyle}></div>
                        </div>
                        <div className={getTempTextClass(theme)}>
                          {info.temp}°C
                        </div>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Feels Like: {info.feelsLike}°C</p>
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
