
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
  

  
  function showWeather(response) {



  document.querySelector("#selected-city").innerHTML = response.data.name;

    celsiusTemp = response.data.main.temp;
  
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
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
  }

  function searchLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "88ff65df154309d8c97f7b13168954a5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
  }

  let searchForm = document.querySelector("#city-form");
  searchForm.addEventListener("submit", handleSubmit);


  let currentLocationButton = document.querySelector ("#my-location");
  currentLocationButton. addEventListener("click", getCurrentLocation)


  function displayFarenheitTemperature(event) {
    event.preventDefault;
    let temperatureElement = document.querySelector("#the-temperature");
    celsiusLink.classList.remove("active");
    farenheitLink.classList.add("active");
    let farenheitTemp = (celsiusTemp * 9) / 5 + 32;
    temperatureElement.innerHTML = Math.round(farenheitTemp);

  }


    function displayCelsiusTemperature(event) {
    event.preventDefault;
    let temperatureElement = document.querySelector("#the-temperature");
    farenheitLink.classList.remove("active");
    celsiusLink.classList.add("active");
    temperatureElement.innerHTML = Math.round(celsiusTemp)

  }

  let celsiusTemp = null

let farenheitLink = document.querySelector("#farenheit-link");
farenheitLink.addEventListener("click", displayFarenheitTemperature);


let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);


function displayForecast() {
  let forecastElement = document.querySelector("#forecast");

  let days = ["Thu", "Fri", "Sat", "Sun","Mon","Tue"];

  let forecastHTML = `<div class="row">`;
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `
      <div class="col-2">
        <div class="weather-forecast-date">${day}</div>
        <img
          src="http://openweathermap.org/img/wn/50d@2x.png"
          alt=""
          width="42"
        />
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature-max"> 18° </span>
          <span class="weather-forecast-temperature-min"> 12° </span>
        </div>
      </div>
  `;
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
  console.log(forecastHTML);
}





  search("Oslo");

  displayForecast();

  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  