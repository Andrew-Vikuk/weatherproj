import React, {useState} from "react";
import axios from "axios";


function App() {

  const [data, setData] = useState({});
  const [loсation, setLocation] = useState("");
  
  const url = `http://localhost:5000/users/6366d318439bc00440944b1c`
  const url2 = `https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=a3dc501f090463d7c22b1396b8dcf784`
  const searchLocation = () => {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
         
  }

  return (
    <div className="App">
      <div className="main">
      <button onClick={()=>searchLocation()}>Click</button> 
      {data.result ? <h1>{data.result.name}</h1> : null}
      </div>
    </div>
  );
}

export default App;
