// challenge 1
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
  

  
  
  //homework week 5 

  
  function showWeather(response) {
  document.querySelector("#selected-city").innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let temperatureResult = document.querySelector("#the-temperature");
  temperatureResult.innerHTML =`${temperature}`;    
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

  search("Oslo");



  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  