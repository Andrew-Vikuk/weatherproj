import React, {useState} from "react";
import axios from "axios";


function App() {

  const [data, setData] = useState();
  const [loсation, setLocation] = useState("");
  
  const url = `http://localhost:5000/users/6366d633aa420447a8bdcdb2`
  
  const searchLocation = () => {
    fetch(url, { mode: "no-cors" }) .then((response) => response).then((data) => { 
      console.log(data) 
   });

  }

  const searchLocation2 = () => {
    axios.get(url, {
      headers: {
        'Access-Control-Allow-Credentials':true
      }
    }).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
  }

  return (
    <div className="App">
      <div className="main">
      <button onClick={()=>searchLocation()}>Click</button> 

      </div>
    </div>
  );
}

export default App;
