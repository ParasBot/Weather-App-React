import TextField from '@mui/material/TextField';
import './SearchBox.css';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="2d5a5d6d542dbc763d6676f71b786b1e";

    let getWeatherInfo = async () => {
        try {
            let respone = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await respone.json();
        //console.log(jsonResponse);
        let result = {
            city : city,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feels_Like : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,
        };
        console.log(result);
        return result
        } catch(err) {
            throw err;
        }
    }

    let [city , setCity] = useState("");
    let [error , setError] = useState(false);

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let hadleSubmit = async (evt) => {
        try {
            evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        } catch(err) {
            setError(true);
        }
    }
    return(
        <div className='search'>
            <form onSubmit={hadleSubmit}>
            <TextField id="outlined-basic" 
                label="City Name" 
                variant="outlined" 
                required value={city} 
                onChange={handleChange} 
                className='TextField'
            />
            <br /><br /><br />
            <Button variant="contained" startIcon={<SearchIcon />} type='submit'>Search</Button>
            {error && <p style={{color:"red"}}>No Such Place Exists in API</p>}
            </form>
        </div>
    );
}