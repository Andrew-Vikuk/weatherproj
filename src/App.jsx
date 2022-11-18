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
        <h1>{data.name}</h1>
        {data.main ? <h2>{(5/9 * (data.main.temp - 32)).toFixed(2)} °C</h2> : null}
        {data.main ? <h2>{data.wind.speed} m/s</h2> : null} 
      </div>
    </div>
  );
}

export default App;
