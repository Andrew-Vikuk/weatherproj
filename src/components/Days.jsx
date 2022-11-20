import React from 'react'

function Days({info, day}) {

    const project = (a) => {
        switch(a) {
    
          case "Clouds": return <img src={require("../images/cloudy.png")} alt="" className="mx-auto h-20"/>;
          case "Snow": return <img src={require("../images/snow.png")} alt="" className="h-20 mx-auto"/>;
          case "Clear": return <img src={require("../images/clear.png")} alt="" className="h-20 mx-auto"/>;
          case "Rain": return <img src={require("../images/rain.png")} alt="" className="h-20 mx-auto"/>;
    
          default: return <h1>404</h1>
        }
      }

  return (
    <div className="main border-2 py-3 rounded-xl">
        <p>{info.list[day].main.temp.toFixed(0)} °C</p>
        {project(info.list[day].weather[0].main)}
    </div>
  )
}

export default Days