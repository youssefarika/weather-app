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
  var response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=7f005626759e42938f1201547221501&q=${input.value}`
  );
  const data = await response.json();
  // get the value empty after clicking search
  if (input.value !== "") {
    input.value = "";
  }
  // changing the icon state
  state.src = data.current.condition.icon;
  // changing state description
  hstate.innerText = data.current.condition.text;
  // changing hummidity
  numhumi.innerText = `${data.current.humidity}%`;
  // changing wind speed
  wind.innerText = data.current.wind_mph;
  // changing pressure state
  numaire.innerText = data.current.pressure_mb;
  // changing city Name
  city.innerText = data.location.name;
  // changing degree
  degree.innerText = `${data.current.feelslike_c}°C`;
}
