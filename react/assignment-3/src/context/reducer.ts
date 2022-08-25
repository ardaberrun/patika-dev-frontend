export type Weather = {
  dt: number
  sunrise: number
  sunset: number
  moonrise: number
  moonset: number
  moon_phase: number
  temp: Temp
  feels_like: FeelsLike
  pressure: number
  humidity: number
  dew_point: number
  wind_speed: number
  wind_deg: number
  wind_gust: number
  weather: WeatherIcon[]
  clouds: number
  pop: number
  rain: number
  uvi: number
}

type Temp = {
  day: number
  min: number
  max: number
  night: number
  eve: number
  morn: number
}

type FeelsLike = {
  day: number
  night: number
  eve: number
  morn: number
}

type WeatherIcon ={
  id: number
  main: string
  description: string
  icon: string
}


export type WeatherState = {
  cityId: number;
  latitude: string;
  longitude: string;
  cityName: string;
  weather?: Weather[];
};

export const INITIAL_STATE: WeatherState = {
  latitude: '39.9208',
  longitude: '32.8541',
  cityId: 6,
  cityName: 'Ankara',
};

type SetCityAction = {
  type: 'SET_CITY';
  payload: { id: number; latitude: string; longitude: string; name: string };
};

type SetWeatherAction = { 
  type: 'SET_WEATHER';
  payload: Weather[];
};

type Actions = SetCityAction | SetWeatherAction;

const reducer = (state: WeatherState = INITIAL_STATE, action: Actions) => {
  switch (action.type) {
    case 'SET_CITY':
      return {
        ...state,
        cityId: action.payload.id,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        cityName: action.payload.name,
      };
    case 'SET_WEATHER':
      return {
        ...state,
        weather: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
