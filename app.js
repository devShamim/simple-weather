/* all selectors */
var date = document.querySelector(".date");
var time = document.querySelector(".time");
var humidity = document.querySelector("#humidity");
var pressure = document.querySelector("#pressure");
var wind = document.querySelector("#wind");
var tempNow = document.querySelector(".cw");
var refresh = document.querySelector(".refresh");
var feelLike = document.querySelector(".wfeels-rate");
var loc = document.querySelector(".location");
var lastUp = document.querySelector(".last_up");
var notice = document.querySelector(".notice");

/* current date and time */
var d = new Date();
date.innerHTML = d.toDateString();
function setTime() {
    var d2 = new Date();
    time.innerHTML = d2.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
}
setInterval(setTime, 1000);

/* current weather */
const BASE = "https://api.apixu.com/v1";
const KEY = "06e0d2890928424fa85162140192705";

refresh.addEventListener('click', f => {
    fetch(`${BASE}/current.json?key=${KEY}&q=Dhaka`)
        .then(response => response.json())
        .then(forecast => {
            tempNow.innerHTML = `${forecast.current.temp_c}&deg; C`;
            feelLike.innerHTML = `Feels Like ${forecast.current.feelslike_c}&deg; C`;
            loc.innerHTML = `${forecast.location.name}`;
            humidity.innerHTML = `${forecast.current.humidity}%`;
            pressure.innerHTML = `${forecast.current.pressure_in}/inch`;
            wind.innerHTML = `${forecast.current.wind_kph}/kph`;
        });
    lastUp.innerHTML = `( Last Updated at ${d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} )`;
    notice.style.display = "none";
})