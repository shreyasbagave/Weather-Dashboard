const apiKey = "651aae60883c0c27be4a8747284af5a8";  // Replace with your OpenWeatherMap API key

document.getElementById("weather-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const city = document.getElementById("city-input").value.trim();
  if (city) {
    fetchWeather(city);
  }
});

function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => displayWeather(data))
    .catch(error => alert(error.message));
}

function displayWeather(data) {
  document.getElementById("city-name").textContent = data.name;
  document.getElementById("temperature").textContent = data.main.temp;
  document.getElementById("humidity").textContent = data.main.humidity;
  document.getElementById("wind-speed").textContent = data.wind.speed;
  document.getElementById("weather-description").textContent = data.weather[0].description;
}
