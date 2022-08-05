import React, { useState, useEffect } from "react";
import Wrapper from "../../../UI/Wrapper";
import { Fade } from "react-awesome-reveal";
import "./styles/weather.css";
import { useContext } from "react";
import DataContext from "../../../Store/data-context";
import { weatherSearch } from "../../../Hooks/use-weather-request";
import { fullWeatherSearch } from "../../../Hooks/use-full-weather-request";
import WeatherDisplay from "./weather/WeatherDisplay";
import { getIcon } from "../../../UI/weatherGetIcon";
import ModalContext from "../../../Store/modal-context";
import FuncDisplayContext from "../../../Store/funcdisplay-context";

const Weather = (props) => {
  const data = useContext(DataContext);
  const ctx = useContext(ModalContext);
  const displayCtx = useContext(FuncDisplayContext);
  const { weatherVisible, toggleWeatherModal } = ctx;
  let [city, changeCity] = useState(data.weatherCity);
  const [dataInfo, changeDataInfo] = useState({ temp: 0 });
  const [fullData, changeFullData] = useState(null);

  const getWeather = async (value) => {
    let cityName;
    if (value !== "none") {
      cityName = value;
    } else {
      cityName = city;
    }
    console.log("Update data on", cityName);
    let data;
    if (cityName === null) {
      data = await weatherSearch("London");
    } else {
      data = await weatherSearch(cityName);
    }
    await changeDataInfo(data);
    let city2 = cityName;
    if (city2 === null) {
      city2 = "Warsaw";
    }
    let fullData = await fullWeatherSearch(city2);
    let fullDataTable = [];
    if (fullData.day.length > 0) {
      for (let i = 0; i < 4; i++) {
        let objectTemperature = {
          day: fullData.name[i],
          id: fullData.day[i].weather[0].id,
          tempMin: fullData.night[i].main.temp,
          tempMax: fullData.day[i].main.temp,
          icon: getIcon(fullData.day[i].weather[0].id),
          key: i,
        };
        fullDataTable.push(objectTemperature);
      }
      changeFullData(fullDataTable);
    }
  };
  const changeMoreDisplay = () => {
    toggleWeatherModal();
  };
  const updateWeatherCity = (value) => {
    changeCity(value);
    toggleWeatherModal();
    getWeather(value);
  };
  useEffect(() => {
    if (
      city !== null ||
      city !== undefined ||
      city !== null ||
      city !== undefined
    ) {
      getWeather("none");
    }
  }, []);

  return (
    <>
      {displayCtx.display.weather ? (
        <Wrapper classes="weather">
          <Fade>
            <Wrapper classes="weatherChild" onClick={changeMoreDisplay}>
              <Wrapper classes="up">
                <i className="fas fa-cloud-sun"></i> <b>{dataInfo.temp}°</b>
              </Wrapper>
              <Wrapper classes="bottom">{city}</Wrapper>
            </Wrapper>
            <Wrapper classes="weatherDisplayChild">
              {weatherVisible && (
                <WeatherDisplay
                  close={changeMoreDisplay}
                  dayData={dataInfo}
                  fullData={fullData}
                  city={city}
                  updateWeatherCityParent={updateWeatherCity}
                />
              )}
            </Wrapper>
          </Fade>
        </Wrapper>
      ) : (
        <Wrapper classes="weather"></Wrapper>
      )}
    </>
  );
};

export default Weather;
