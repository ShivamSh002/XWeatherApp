import React, { useEffect, useState } from 'react'
import axios from "axios"
import WeatherCard from './WeatherCard'
import "./WeatherDisplay.css"

const WeatherDisplay = ({city}) => {
    const[data,setData] = useState("")
    const[loading,setLoading] = useState(false)

    const fetchData = async() =>{
        if(city){
            setLoading(true)
            try{
            let res = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=6d4a4ca2ce3848d285a81618232612&q=${city}`)
            setData(res.data);
      } 
      catch(e){
          alert("Failed to fetch weather data");
      }
      finally{
          setLoading(false);
      }}
    }

    useEffect(()=>{
       fetchData();
       
    },[city])


  return (
    <div  className="wrapper"> {loading && <p>Loading data...</p>}
    {!loading  && data && (<div className='weatherCards'>
        <WeatherCard title="Temperature"
        data={`${data.current.temp_c}°C`}/>
        <WeatherCard
            title="Humidity"
            data={`${data.current.humidity}%`}
          />
          <WeatherCard
            title="Condition"
            data={`${data.current.condition.text}`}
          />
          <WeatherCard
            title="Temperature"
            data={`${data.current.wind_kph} kph`}
          />
    </div>)}
    </div>
  )
}

export default WeatherDisplay