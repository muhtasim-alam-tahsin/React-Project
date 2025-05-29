import { useState, useEffect } from 'react'
import Search from './Index'

export default function Weather(){
    const [search,setSearch] = useState(' ');
    const [weatherData,setWeatherData] = useState([null]);

    async function fetchWeatherData(param){
        try {
            const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`);
            const data = await response.json();
            console.log(data);

            if(data){
                setWeatherData(data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    async function handleSearch(){
        fetchWeatherData(search)
    }
    useEffect(()=>{
        fetchWeatherData("dhaka");
    },[]);

    function getCurrentData(){
        return new Date().toLocaleDateString('en-us',{
            weekday: 'long',
            month: 'long',
            day:'numeric',
            year: 'numeric'
        })
    }

    return <div>
        
        <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        />
        {
            <div>
                <div className='city-name'>
                    <h2>{weatherData?.name}, <span>{weatherData?.sys?.country}</span></h2>
                </div>
                <div className='date'>
                    <span>{getCurrentData()}</span>
                </div>
                <div className='temp'>
                    Temperature: {weatherData?.main?.temp}
                </div>
                <p className='description'>{weatherData && weatherData.weather && weatherData.weather[0]?weatherData.weather[0].description:""}</p>
                <div className="weather-info">
                    <div className="column">
                        <div>
                            <p className="wind">{weatherData?.wind?.speed}</p>
                            <p>Wind Speed</p>
                        </div>
                    </div>
                    <div className="column">
                        <div>
                            <p className="humidity">{weatherData?.main?.humidity}%</p>
                            <p>Humidity</p>
                        </div>
                     </div>
                </div>
                
            </div>
        }
        </div>
}