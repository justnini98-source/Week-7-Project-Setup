let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

function checkCity(event) {
  let city = prompt("Enter a city");

  let cityKey = city.toLowerCase().trim();

  if (cityKey in weather) {
    let cityData = weather[cityKey];
    let tempC = cityData.temp;
    let tempF = (tempC * 9) / 5 + 32;
    let humidity = cityData.humidity;

    tempC = Math.round(tempC);
    tempF = Math.round(tempF);

    alert(
      `It is currently ${tempC}°C (${tempF}°F) in ${city} with a humidity of ${humidity}%`
    );
  } else {
    alert(
      `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city.toLowerCase()}`
    );
  }
}
// fct removed for week 4 homework

// #feature 1: TIME
let now = new Date();
let dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayToday = now.getDay();
let dayDisplay = document.querySelector("#currentTime");
const timeNow = now.toLocaleTimeString("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
});
dayDisplay.innerHTML = dayNames[dayToday] + ` ` + timeNow;
console.log(timeNow);
console.log(dayNames[dayToday]);

// #feature 2: Search engine

// #feature 3: check for the actual temperature and replace placeholder

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
  temperatureElement.innerHTML = temperatureCurrent;

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
}

let searchfield = document.querySelector("#user-search-request");
searchfield.addEventListener("submit", handleSearchSubmit);

enterCity("Paris");
