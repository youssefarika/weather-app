const input = document.querySelector("input");
const button = document.querySelector("button");
const state = document.querySelector(".state");
const hstate = document.querySelector(".hstate");
const numhumi = document.querySelector(".num-humi");
const wind = document.querySelector(".num-wind");
const numaire = document.querySelector(".num-air");
const city = document.querySelector(".city");
const degree = document.querySelector(".degree");
button.addEventListener("click", get);
async function get() {
  const response = await fetch(
    `http://api.weatherstack.com/current?access_key=58fe21f36181fb70ba571f48e3826b18&query=${input.value}`
  );
  const data = await response.json();
  // get the value empty after clicking search
  if (input.value !== "") {
    input.value = "";
  }
  // changing the icon state
  state.src = data.current.weather_icons;
  // changing state description
  hstate.innerText = data.current.weather_descriptions;
  // changing hummidity
  numhumi.innerText = `${data.current.humidity}%`;
  // changing wind speed
  wind.innerText = data.current.wind_speed;
  // changing pressure state
  numaire.innerText = data.current.pressure;
  // changing city Name
  city.innerText = data.location.name;
  // changing degree
  degree.innerText = `${data.current.temperature}°C`;
}
