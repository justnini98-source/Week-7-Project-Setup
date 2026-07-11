function enterCity(city) {
  let apiKey = "8f60tcc18bc942bocf922c235cb83f4a";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiURL).then(displayWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-given");
  enterCity(searchInput.value.trim());
}

function displayWeather(response) {
  let temperatureCurrent = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector("#current-temperature-value");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity-value");
  let speedElement= document.querySelector("#speed-value");
  let timeDisplay = document.querySelector("#currentTime");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");



console.log(response.data);

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperatureCurrent;
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}"/>`;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity} %`;
  speedElement.innerHTML = `${response.data.wind.speed} km/h`;
  timeDisplay.innerHTML = formatDate(date);
}

function formatDate (date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

let searchfield = document.querySelector("#user-search-request");
searchfield.addEventListener("submit", handleSearchSubmit);

enterCity("Paris");
