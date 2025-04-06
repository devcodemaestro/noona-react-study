import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";

// 유저 스토리

// 1. 유저는 현재위치의 날씨를 볼 수 있다.(지역,온도,날씨 상태)
// 2. 유저는 다른 도시의 버튼들을 볼 수 있다.
// 3. 유저는 다른 도시 버튼을 클릭하면 해당 도시의 날씨 정보를 볼 수 있다.
// 4. 유저는 데이터가 로딩될 때 로딩 스피너를 볼 수 있다.

// 1. 앱이 실행되자 마자 현재 위치 기반의 날씨가 보인다.
// 2. 날씨 정보에는 도시, 섭씨, 화씨, 날씨상태
// 3. 5개의 버튼이 있다 (1개는 현재위치, 4개는 고정된 도시)
// 4. 도시 버튼을 클릭할 때마다 도시별 날씨가 나오낟.
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다.

const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

function App() {
  const [weather, setWeather] = useState(null);
  const [cityName, setCityName] = useState(null);
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCuttrentLocation(lat, lon);
    });
  };

  const getWeatherByCuttrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric&lang=kr `;
    let response = await fetch(url);
    let data = await response.json();
    let cityNameUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}`;
    let cityNameResponse = await fetch(cityNameUrl);
    let cityNameData = await cityNameResponse.json();
    setWeather(data);
    setCityName(cityNameData[0].local_names.ko);
  };

  useEffect(() => {
    getCurrentLocation();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        background: `url(${process.env.PUBLIC_URL + "/images/background.png"})`,
        backgroundSize: "cover",
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        height: `100vh`,
      }}
    >
      <div className="container">
        <WeatherBox weather={weather} cityName={cityName} />
        <WeatherButton />
      </div>
    </div>
  );
}

export default App;
