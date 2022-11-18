import React, {useState} from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState({});
  const [loсation, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${loсation}&units=imperial&appid=a3dc501f090463d7c22b1396b8dcf784`
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }
  }

  const project = (a) => {
    switch(a) {

      case "Clouds": return <img src={require("./images/cloudy.png")} alt="" className="h-52 mx-auto"/>;
      case "Snow": return <img src={require("./images/snow.png")} alt="" className="h-52 mx-auto"/>;
      case "Clear": return <img src={require("./images/clear.png")} alt="" className="h-52 mx-auto"/>;
      case "Rain": return <img src={require("./images/rain.png")} alt="" className="h-52 mx-auto"/>;

      default: return <h1>404</h1>
    }
  }



  var today = new Date(),

  time = today.getHours();
console.log(time)



  return (
    <div className="App pt-14">
      <div className="main">
      <input
          className="border-2 border-grey-400 rounded-xl px-6 py-2"
          value={loсation}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
          {data.weather ? project(data.weather[0].main) : null}
          <h2 className="mb-6">{data.name}</h2>
          {data.main ? <h1>{(5/9 * (data.main.temp - 32)).toFixed(0)} °C</h1> : null}

        {/* MIN & MAX TEMP */}

        <div className="min-max mb-3">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
          {data.main ? <p>Min: {(5/9 * (data.main.temp_min - 32)).toFixed(0)} °C &nbsp;&nbsp; Max: {(5/9 * (data.main.temp_max - 32)).toFixed(0)} °C</p>: null}
        </div>

        {/* INFO DIV */}

        <div className="info flex w-96 justify-between mx-auto bg-slate-400 bg-opacity-30 py-2 px-8 rounded-xl pl-11">
          {data.main ? <p className="info_pressure info_card">{(data.main.pressure / 100).toFixed(0)} %</p> : null}
          {data.wind ? <p className="info_speed info_card">{(data.wind.speed).toFixed(0)} m/s</p> : null}
          {data.main ? <p className="info_humidity info_card">{(data.main.humidity)} %</p> : null}

        </div>
        
      </div>
    </div>
  );
}

export default App;
