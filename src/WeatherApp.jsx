import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import { useEffect } from "react";

function getTheme(temp, hour) {
    if (hour >= 19 || hour < 6) return "theme-night";
    if (temp > 25) return "theme-hot";
    if (temp < 10) return "theme-cold";
    return "theme-mild";
}

export default function WeatherApp() {
    let [weatherinfo , setWeatherInfo] = useState({
        city : "Delhi",
        feelsLike: 24.80,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });
    let [theme, setTheme] = useState("theme-mild");

    useEffect(() => {
        const hour = new Date().getHours();
        setTheme(getTheme(weatherinfo.temp, hour));
    }, [weatherinfo]);

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div className={`weather-root ${theme}`} style={{textAlign:"center", minHeight: "100vh", transition: "background 1s"}}>
            <h1 style={{marginTop: 0}}>Weather App by Paras</h1>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherinfo} theme={theme}></InfoBox>
            {/* Particle effects or animated backgrounds can be conditionally rendered here based on theme or weatherinfo.weather */}
        </div>
    );
}
