import React, {useState} from "react";
import axios from "axios";
import HourlyForecast from "./components/HourlyForecast"
import SECRET from "./SECRET"
import Days from "./components/Days";


function App() {

  const [data, setData] = useState({});
  const [loсation, setLocation] = useState("");
  const [loading, setLoading] = useState(true);
  const [listDays, setListDays] = useState([]);


  const forecastLength = 40;


  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${loсation}&cnt=${forecastLength}&units=metric&appid=${SECRET.API_KEY}`
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data);

        // GET NUMBER OF TODAYS DAY FORECAST HOURS

        response.data.list.forEach(element => {
          if(response.data.list[0].dt_txt.slice(8,10) === element.dt_txt.slice(8,10)){
          setListDays(current => [...current, element.dt_txt.slice(8,10)])
        }
        });
      })
    setLocation("");
    setListDays([]);
    }
  }

  function mapInDays(array){
    const resultArr = [];
    for(var i = array.length + 1; i < 40; i += 8){
      resultArr.push(i);
    }
    return resultArr;
  }



  const weatherIcon = (a) => {
    switch(a) {

      case "Clouds": return <img src={require("./images/cloudy.png")} alt="" className="h-52 mx-auto"/>;
      case "Snow": return <img src={require("./images/snow.png")} alt="" className="h-52 mx-auto"/>;
      case "Clear": return <img src={require("./images/clear.png")} alt="" className="h-52 mx-auto"/>;
      case "Rain": return <img src={require("./images/rain.png")} alt="" className="h-52 mx-auto"/>;

      default: return <h1>404</h1>
    }
  }

  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 1000);
  }


  return (
    !loading && (
    <div className="App pt-14">
      <div className="main">
        <input
            className="border-2 border-grey-400 rounded-xl px-6 py-2"
            value={loсation}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder='Enter Location'
            type="text" />

          {/* MAIN INFORMATION */}

            {data.list ? weatherIcon(data.list[0].weather[0].main) : null}
            {data.city ? <h2 className="mb-6">{data.city.name}</h2> : null}
            {data.list ? <h1>{data.list[0].main.temp.toFixed(0)} °C</h1> : null}

          {/* MIN & MAX TEMP */}

          <div className="min-max mb-3">
            {data.list ? <p>{data.list[0].weather[0].main}</p> : null}
            {data.list ? <p>Min: {data.list[0].main.temp_min.toFixed(0)} °C &nbsp;&nbsp; Max: {data.list[0].main.temp_max.toFixed(0)} °C</p>: null}
          </div>

          {/* INFO BLOCK */}

          <div className="info flex w-96 justify-between mx-auto bg-slate-400 bg-opacity-30 py-2 px-8 rounded-xl pl-11 mb-5">
            {data.list ? <p className="info_pressure info_card">{(data.list[0].main.pressure / 100).toFixed(0)} %</p> : null}
            {data.list ? <p className="info_speed info_card">{(data.list[0].wind.speed).toFixed(0)} m/s</p> : null}
            {data.list ? <p className="info_humidity info_card">{(data.list[0].main.humidity)} %</p> : null}
          </div>

          {/* WEATHER FORECAST BY DAY BLOCK */}

          <div className="day_forcast flex max-w-xl justify-between py-2 px-2 rounded-xl mx-auto align-middle">
            {listDays.map((item, index)=>{
              return data.list ? <HourlyForecast info={data} day={index}/>: null
            })}
          </div>
            {/* 8 */}
          <div className="daily_weather flex flex-col max-w-xl justify-between m-auto">
            
            <h4>5 Day Forecast</h4>
            {mapInDays(listDays).map((dayNumber) => {
              return data.list ? <Days info={data} dayNum={dayNumber}/> : null
            })}
          </div>
          
      </div>
    </div>
  ));
}

export default App;
