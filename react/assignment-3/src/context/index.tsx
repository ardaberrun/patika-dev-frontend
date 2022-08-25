import axios from 'axios';
import React, { useReducer, useContext, createContext, useEffect } from 'react';
import reducer, { Weather, WeatherState, INITIAL_STATE } from './reducer';

type ApiType = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  daily: Weather[];
};

interface IWeatherContext {
  state: WeatherState;
  dispatch: React.Dispatch<any>;
}

export const WeatherContext = createContext<IWeatherContext>({} as IWeatherContext);
export const useWeatherContext = () => useContext(WeatherContext);

const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    const fetchWeather = async () => {
      const { data } = await axios.get<ApiType>(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${state.latitude}&lon=${state.longitude}&exclude=hourly,minutely,current&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );

      dispatch({ type: 'SET_WEATHER', payload: data.daily });
    };

    fetchWeather();
  }, [state.cityId]);

  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
