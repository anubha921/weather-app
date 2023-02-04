import hotBg from "./assets/hot.jpg";
import coldBg from "./assets/cold.jpg";
import Descriptions from "./components/Descriptions";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [city,setCity] = useState(null);
  const [searchCity,setSearchCity] = useState("");
  const [bg, setBg] = useState(coldBg);

  useEffect(()=>{
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Hapur&units=metric&appid=54ea182838ff9712010d603b7b45b78b')
    .then(res=>{
      setCity(res.data);
    });
  },[]);

  function handleSearch(){
    const searchURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=54ea182838ff9712010d603b7b45b78b`
    axios.get(searchURL)
    .then(res=>{
      setCity(res.data);
      if (res.data.main.temp <= 15) setBg(coldBg)
      else setBg(hotBg);
    })
  }
  

  return (
    <div className="App" style={{backgroundImage: `url(${bg})`}}>
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input type="text" name="city" placeholder="Enter City.." onChange={(e)=>setSearchCity(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
          </div>

          <div className="section section__temperature">
            <div className="icon">
              <h3>{city?.name}, {city?.sys?.country}</h3>
              <h3>{city?.weather[0]?.description}</h3>
            </div>
            <div className="temperature">
              <h1>{city?.main?.temp} ℃</h1>
            </div>
          </div>
          <Descriptions temp_min={city?.main?.temp_min} temp_max={city?.main?.temp_max} feels_like={city?.main?.feels_like} pressure={city?.main?.pressure} humidity={city?.main?.humidity} wind_speed={city?.wind?.speed}/>
        </div>
      </div>    
    </div>
  );
}

export default App
