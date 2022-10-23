function randomNumber(min, max) { 
    return Math.random() * (max - min) + min;
} 
var temp = Math.round(randomNumber(1, 100));

var wind = Math.round(randomNumber(1, 10));

var weather = [
    'Sunny',
    'Thunderstorms',
    'Partly Cloudy',
    'Snowing'];


var currentWeather = weather[Math.round(randomNumber(0, weather.length -1))];

let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(wind,0.16)) + (0.4275*temp*Math.pow(wind,0.16)));

document.querySelector("#temp").textContent = temp;
document.querySelector("#wind").textContent = wind;
document.querySelector("#current-weather").textContent = currentWeather;
if(temp <= 50 && wind > 3)
{
    document.querySelector("#chill").textContent = chill;
}
else
{
    document.querySelector("#chill").textContent = "N/A";
}

var select = document.querySelector("#weather-icon");

if(currentWeather == 'Sunny')
{
    select.src = "images/sunny.jpeg";
}
else if(currentWeather == 'Thunderstorms')
{
    select.src = "images/rainy.jpeg";
}
else if(currentWeather == 'Partly Cloudy')
{
    select.src = "images/cloudy.jpeg";
}
else 
{
    select.src = "images/snowy.jpeg";
}

