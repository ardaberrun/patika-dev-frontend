import { useWeatherContext } from '../context';

function Forecasts() {
  const { state } = useWeatherContext();

  const getDate = (dt: number) => {
    const date = new Date(dt * 1000);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return days[date.getDay()];
  };

  return (
    <section className="forecast rounded-lg bg-white p-8 mt-8 max-w-4xl mx-auto">
      <h3 className="text-gray-500 text-xl font-semibold">Next 7 Days</h3>
      <div className="weathers flex flex-wrap mt-8 gap-4 justify-center">
        {state.weather &&
          state.weather.map(
            (weather, index) =>
              index > 0 && (
                <div className="flex flex-col gap-1 items-center">
                  <p className="text-sky-700 font-bold text-lg">
                    {getDate(weather.dt)}
                  </p>
                  <img
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt={weather.weather[0].description}
                  />
                  <p className="text-sky-700 font-bold text-lg">
                    {weather.weather[0].main}
                  </p>
                  <p className="text-sky-700 font-normal text-lg">
                    {Math.round(weather.temp.max)}°/
                    {Math.round(weather.temp.min)}°
                  </p>
                </div>
              )
          )}
      </div>
    </section>
  );
}

export default Forecasts;
