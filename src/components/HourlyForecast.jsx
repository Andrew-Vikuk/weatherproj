import React from 'react'

function HourlyForecast({info, day}) {

    const weatherIcon = (a) => {

        // WEATHER ICON CASES

        switch(a) {
    
          case "Clouds": return <img src={require("../images/cloudy.png")} alt="" className="hourly_icon"/>;
          case "Snow": return <img src={require("../images/snow.png")} alt="" className="hourly_icon"/>;
          case "Clear": return <img src={require("../images/clear.png")} alt="" className="hourly_icon"/>;
          case "Rain": return <img src={require("../images/rain.png")} alt="" className="hourly_icon"/>;
    
          default: return <h1>404</h1>
        }
      }

  return (
    <div className="main border-2 py-3 rounded-xl">
        <p>{info.list[day].dt_txt.slice(11,16)}</p>
        {weatherIcon(info.list[day].weather[0].main)}
        <p>{info.list[day].main.temp.toFixed(0)} °C</p>
    </div>
  )
}

export default HourlyForecast