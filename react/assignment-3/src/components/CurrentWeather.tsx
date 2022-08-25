import { useWeatherContext } from '../context';

function CurrentWeather() {
  const { state } = useWeatherContext();

  return (
    <section className="current-weather-card rounded-lg bg-white mt-12 p-8 max-w-lg mx-auto">
      <h3 className="text-gray-500 text-xl font-semibold">Current Weather</h3>
      {state.weather && (
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="left-card flex flex-col gap-4 mt-4">
            <h4 className="text-sky-600 font-semibold text-xl">
              {state.cityName}
            </h4>
            <div className="flex items-center gap-4">
              <img
                src={`http://openweathermap.org/img/wn/${state.weather[0].weather[0].icon}@2x.png`}
                alt={state.weather[0].weather[0].description}
              />
              <p className="text-sky-600 font-thin text-8xl">
                {Math.round(state.weather[0].temp.day)}°
              </p>
            </div>
            <p className="text-gray-600 text-xl">
              {state.weather[0].weather[0].description}
            </p>
          </div>
          <div className="text-lg font-normal mt-8 md:mt-0">
            <div className="flex items-center">
              <p className=" text-gray-500 w-24">Max</p>
              <span className="text-sky-600 ">
                {Math.round(state.weather[0].temp.max)}°
              </span>
            </div>
            <div className="flex items-center">
              <p className=" text-gray-500 w-24">Min</p>
              <span className="text-sky-600">
                {Math.round(state.weather[0].temp.min)}°
              </span>
            </div>
            <div className="flex items-center">
              <p className=" text-gray-500 w-24">Humidity</p>
              <span className="text-sky-600">{state.weather[0].humidity}%</span>
            </div>
            <div className="flex items-center">
              <p className=" text-gray-500 w-24">Wind</p>
              <span className="text-sky-600">
                {state.weather[0].wind_speed}m/s
              </span>
            </div>
            <div className="flex items-center">
              <p className=" text-gray-500 w-24">Pressure</p>
              <span className="text-sky-600">
                {state.weather[0].pressure}hPA
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CurrentWeather;
