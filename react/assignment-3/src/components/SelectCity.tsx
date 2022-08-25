import { useWeatherContext } from '../context';
import cities from '../data/cities.json';

function SelectCity() {
  const { state, dispatch } = useWeatherContext();

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { latitude, longitude, name, id } = cities.find(
      (city) => city.id === +e.target.value
    )!;

    dispatch({ type: 'SET_CITY', payload: { latitude, longitude, name, id } });
  };

  return (
    <header>
      <select
        onChange={handleCityChange}
        value={state.cityId}
        className="bg-gray-50 border-none text-gray-900 text-md rounded-3xl block w-full p-3 outline-none"
      >
        {cities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
    </header>
  );
}

export default SelectCity;
