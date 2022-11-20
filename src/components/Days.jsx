import React from 'react'

function Days({info, day}) {

    const project = (a) => {
        switch(a) {
    
          case "Clouds": return <img src={require("../images/cloudy.png")} alt="" className="daily_icon"/>;
          case "Snow": return <img src={require("../images/snow.png")} alt="" className="daily_icon"/>;
          case "Clear": return <img src={require("../images/clear.png")} alt="" className="daily_icon"/>;
          case "Rain": return <img src={require("../images/rain.png")} alt="" className="daily_icon"/>;
    
          default: return <h1>404</h1>
        }
      }

    var now = new Date();
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var today_day = days[ now.getDay() + parseInt(day) - 1 ];

  return (
    <div className="main border-2 py-3 rounded-xl">
        <p>{today_day.substring(0,3)}</p>
        {project(info.list[day].weather[0].main)}
        <p>{info.list[day].main.temp.toFixed(0)} °C</p>
    </div>
  )
}

export default Days