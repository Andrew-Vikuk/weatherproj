import React, {useState} from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState({});
  const [loсation, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=Uzhhorod&units=imperial&appid=a3dc501f090463d7c22b1396b8dcf784`
  function callData(){
  axios.get(url).then((response) => {
    setData(response.data)
    console.log(response.data)
  })}

  return (
    <div className="App">
    <button onClick={() => callData()}>Click</button>
     <p>{data.name}</p>
     <p>{data.main.temp} F</p>

     <p>{data.wind.speed}/ ms</p>
    </div>
  );
}

export default App;
