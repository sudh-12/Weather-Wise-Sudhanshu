// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '191564177cmshc170f6459d6de39p17b7bbjsn35eb339c437d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather = (city) => {
	cityName.innerHTML = city
  cityName1.innerHTML = city
  // cityName1.innerHTML =city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
.then(response => response.json())
.then(response => {
	
	console.log(response)
   cloud_pct.innerHTML = response.cloud_pct
  temp.innerHTML = response.temp
  temp1.innerHTML = response.temp
  feels_like.innerHTML = response.feels_like
  humidity.innerHTML = response.humidity
   humidity1.innerHTML = response.humidity
  min_temp.innerHTML = response.min_temp
  max_temp.innerHTML = response.max_temp
  wind_speed.innerHTML = response.wind_speed
   wind_speed1.innerHTML = response.wind_speed
  wind_degrees.innerHTML = response.wind_degrees
  sunrise.innerHTML = response.sunrise
  sunset.innerHTML = response.sunset
})
.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getweather(city.value)
})

submit1.addEventListener("click", (e)=>{
	e.preventDefault()
	getweather("New Delhi")
})

submit2.addEventListener("click", (e)=>{
	e.preventDefault()
	getweather("Jamshedpur")
})

submit3.addEventListener("click", (e)=>{
	e.preventDefault()
	getweather("Bengaluru")
})

submit4.addEventListener("click", (e)=>{
	e.preventDefault()
	getweather("Hyderabad")
})

submit5.addEventListener("click", (e)=>{
	e.preventDefault()
	getweather("New Delhi")
})

getweather("Mumbai")

const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");


/**
 * @param {Date} date
 */
function formatTime(date) {
  const hours12 = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const isAm = date.getHours() < 12;

  return `${hours12.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}

/**
 * @param {Date} date
 */
function formatDate(date) {
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return `${DAYS[date.getDay()]}, ${
    MONTHS[date.getMonth()]
  } ${date.getDate()} ${date.getFullYear()}`;
}

setInterval(() => {
  const now = new Date();

  timeElement.textContent = formatTime(now);
  dateElement.textContent = formatDate(now);
}, 200);
