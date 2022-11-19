import React, {useState} from "react";
import axios from "axios";


function App() {

  const [data, setData] = useState();
  const [loсation, setLocation] = useState("");
  
  const url = `http://localhost:5000/users/posts`
  
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

      </div>
    </div>
  );
}

export default App;
