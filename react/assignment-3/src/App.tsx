import SelectCity from './components/SelectCity';
import CurrentWeather from './components/CurrentWeather';
import Forecasts from './components/Forecasts';

function App() {
  return (
    <div className="h-full bg-gradient-to-b from-blue-100 to-blue-300">
      <div className="w-5/6 mx-auto py-12">
        <SelectCity />
        <main>
          <CurrentWeather />
          <Forecasts />
        </main>
      </div>
    </div>
  );
}

export default App;
