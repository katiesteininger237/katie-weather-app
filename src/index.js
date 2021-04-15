
function formatDate(date) {

  let hours = date.getHours();
  if (hours<10){
    hours = `0${hours}`;
  }
  
  let minutes = date.getMinutes();
  if (minutes<10){
    minutes = `0${minutes}`;
  }
  
  let dayIndex = date.getDay();
  let days = 
  ["Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"];
  
  
    return `${days[dayIndex]} ${hours}:${minutes}`;
  }
  
    let dateElement = document.querySelector("#time-display");
    let currentTime = new Date();
  
    dateElement.innerHTML = formatDate(currentTime);


  function formatDay(timestamp){
    let date = new Date(timestamp*1000);
    let day = date.getDay();
    let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    return days[day];

  }
  

  function getForecast(coordinates){
    console.log(coordinates);
    let apiKey = "88ff65df154309d8c97f7b13168954a5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayForecast);
  }

  
  function showWeather(response) {

  document.querySelector("#selected-city").innerHTML = response.data.name;

  
  let temperature = Math.round(response.data.main.temp);
  let temperatureResult = document.querySelector("#the-temperature");
  temperatureResult.innerHTML =`${temperature}`;  
  
  let weatherDescription = response.data.weather[0].description;
  let descriptionResult = document.querySelector("#weather-description");
  descriptionResult.innerHTML = `${weatherDescription}`;
  

  let humidity = response.data.main.humidity;
  let humidityResult = document.querySelector("#the-humidity");
  humidityResult.innerHTML = `${humidity}`;

  let wind = Math.round(response.data.wind.speed);
  let windResult = document.querySelector("#the-wind");
  windResult.innerHTML = `${wind}`;


  let iconResult = document.querySelector("#icon");
  iconResult.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);

  let dateElement = document.querySelector("#time-display");
  let currentTime = new Date();

  dateElement.innerHTML = formatDate(currentTime);

  getForecast(response.data.coord);

  }
  
  function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector ("#city-search").value;
  search(city);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  function search(city) {
  let apiKey = "88ff65df154309d8c97f7b13168954a5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showWeather);
  }

  function searchLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "88ff65df154309d8c97f7b13168954a5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(showWeather);
  }

  let searchForm = document.querySelector("#city-form");
  searchForm.addEventListener("submit", handleSubmit);


  let currentLocationButton = document.querySelector ("#my-location");
  currentLocationButton. addEventListener("click", getCurrentLocation)



function displayForecast(response) {

  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 6){
    forecastHTML =
      forecastHTML +
      `
      <div class="col-2">
        <div class="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
        <img
          src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png"
          alt=""
          width="42"
        />
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature-max"> ${Math.round(forecastDay.temp.max)}° </span> │
          <span class="weather-forecast-temperature-min"> ${Math.round(forecastDay.temp.min)}° </span>
        </div>
      </div>
  `;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;

}


  search("Oslo");



  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  