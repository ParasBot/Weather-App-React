import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
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
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App by Paras</h1>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherinfo}></InfoBox>
        </div>
    );
}