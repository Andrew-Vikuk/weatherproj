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
      setLocation('')
    }
  }


  return (
    <div className="App">
      <div className="main">
      <input
          value={loсation}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
        <h1>{data.name}</h1>
        {data.main ? <h2>{(5/9 * (data.main.temp - 32)).toFixed(2)} °C</h2> : null}
        {data.main ? <h2>{data.wind.speed} m/h</h2> : null} 
      </div>
    </div>
  );
}

export default App;
