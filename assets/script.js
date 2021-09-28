// define global vars
const cityInputEl = $('#city-input');
const buttonEl = $('#submit');
const apiKey = '08387c0aa22c61f897b44875d10245b1';
let cityName;
let lat;
let lon;
let fetchCityCoordURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey;
let fetchWeatherURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon='+ lon + '&appid=' + apiKey;

// event listener that triggers all functions
buttonEl.click(function () {
    console.log(cityInputEl.val())
    getCoordinates(cityInputEl.val());
})

// create function to fetch coordinates of city
function getCoordinates(city) {
    $.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
    .then(function (response) {
      console.log(response)
    })
}

// create function to fetch weather information

// create function to populate current weather on page

// create function to populate forecast weather on page

// CRUD
  // Create || POST
  // Read || GET
  // Update || PUT
  // DESTROY || DELETE
  // default method for fetch is GET

// When user sees page they search for a city.
  // input area / method for city search
    // event handler that links to submit button on click to fetch 3rd party API
    // find city coordinates (lat, long) by city name and give those coords to your onecall api url
