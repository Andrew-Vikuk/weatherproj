import React from 'react'

function Days({info, dayNum, dayName}) {

  const weatherIcon = (a) => {
    
    // WEATHER ICONS CASES
    
    switch(a) {

      case "Clouds": return <img src={require("../images/cloudy.png")} alt="" className="daily_icon"/>;
      case "Snow": return <img src={require("../images/snow.png")} alt="" className="daily_icon"/>;
      case "Clear": return <img src={require("../images/clear.png")} alt="" className="daily_icon"/>;
      case "Rain": return <img src={require("../images/rain.png")} alt="" className="daily_icon"/>;

      default: return <h1>404</h1>
    }
  }

    // SET DAY FOR EACH BLOCK 

    var now = new Date();
    var todaysDay = now.getDay();
    var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat','Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

  return (
    <div className='days_main border-b-2 flex justify-around py-3'>
      <h5 className='text-xl'>{days[todaysDay + dayName + 1]}</h5>
        {weatherIcon(info.list[dayNum].weather[0].main)}
        <span className="text-xl">{info.list[dayNum].main.temp.toFixed(0)} °C</span>
    </div>
  )
}

export default Days