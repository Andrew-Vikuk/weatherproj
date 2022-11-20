import React, {useState} from "react";
import axios from "axios";
import Days from "./components/Days"

function App() {

  const [data, setData] = useState({});
  const [loсation, setLocation] = useState("");
  const [loading, setLoading] = useState(true);

  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${loсation}&cnt=7&units=metric&appid=a3dc501f090463d7c22b1396b8dcf784`
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

  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 1000);
  }

  //find what day is it today react.
// Source: https://stackoverflow.com/a/54754427 .






  return (
    !loading && (
    <div className="App pt-14">
      <div className="main">
        <input
            className="border-2 border-grey-400 rounded-xl px-6 py-2"
            value={loсation}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder='Enter Location'
            type="text" />

          {/* MAIN INFORMATION */}

            {data.list ? project(data.list[0].weather[0].main) : null}
            {data.city ? <h2 className="mb-6">{data.city.name}</h2> : null}
            {data.list ? <h1>{data.list[0].main.temp.toFixed(0)} °C</h1> : null}

          {/* MIN & MAX TEMP */}

          <div className="min-max mb-3">
            {data.list ? <p>{data.list[0].weather[0].main}</p> : null}
            {data.list ? <p>Min: {data.list[0].main.temp_min.toFixed(0)} °C &nbsp;&nbsp; Max: {data.list[0].main.temp_max.toFixed(0)} °C</p>: null}
          </div>

          {/* INFO BLOCK */}

          <div className="info flex w-96 justify-between mx-auto bg-slate-400 bg-opacity-30 py-2 px-8 rounded-xl pl-11 mb-5">
            {data.list ? <p className="info_pressure info_card">{(data.list[0].main.pressure / 100).toFixed(0)} %</p> : null}
            {data.list ? <p className="info_speed info_card">{(data.list[0].wind.speed).toFixed(0)} m/s</p> : null}
            {data.list ? <p className="info_humidity info_card">{(data.list[0].main.humidity)} %</p> : null}
          </div>

          {/* WEATHER BY DAY BLOCK */}

          <div className="day_forcast flex w-5/12 justify-between py-2 px-2 rounded-xl mx-auto align-middle">
            {data.list ? <Days info={data} day="2"/>: null}
            {data.list ? <Days info={data} day="3"/>: null}
            {data.list ? <Days info={data} day="4"/>: null}
            {data.list ? <Days info={data} day="5"/>: null}
            {data.list ? <Days info={data} day="6"/>: null}
          </div>
          
      </div>
    </div>
  ));
}

export default App;
