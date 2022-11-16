const mykey = config.MY_KEY;
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=5591778&appid=${mykey}&units=imperial`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const city = jsObject.name;
        const temp = jsObject.main.temp;
        const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`
        const des = jsObject.weather[0].description.toUpperCase();
        const weatherId = jsObject.weather[0].id;
        const wind = Math.round(jsObject.wind.speed);
        let chill = calcWindChill(wind, temp);
        const dt = jsObject.dt;
        const sunset = jsObject.sys.sunset;
        const tempHigh = jsObject.main.temp_max;
        const tempLow = jsObject.main.temp_min;

        //document.querySelector('#city-temp').textContent = name;
        document.querySelector('#wind').textContent = wind;
        document.querySelector('#current-temp').textContent = temp.toFixed(1);
        //document.querySelector('#icon-src').textContent = iconsrc;
        //document.querySelector('#weathericon').setAttribute('src', iconsrc);
        //document.querySelector('#weathericon').setAttribute('alt', des);
        document.querySelector('#current-weather').textContent = des.toUpperCase();
        document.querySelector('#temp-high').textContent = tempHigh.toFixed(1);
        document.querySelector('#temp-low').textContent = tempLow.toFixed(1);

        if(temp <= 50 && wind > 3){
            document.querySelector('#chill').textContent = chill;
        }
        else{
            document.querySelector('#chill').textContent = "N/a";
        }

        if (weatherId >= 200 && weatherId < 531)
        {
            if (dt >= sunset)
            {
                document.querySelector('#weathericon').setAttribute('src', 'images/rainy-night.jpeg');
            }
            else
            {
                document.querySelector('#weathericon').setAttribute('src', 'images/rainy.jpeg');
            }
        }
        else if (weatherId >= 600 && weatherId < 622)
        {
            if (dt >= sunset)
            {
                document.querySelector('#weathericon').setAttribute('src', 'images/snowy-night.jpeg');
            }
            else
            {
                document.querySelector('#weathericon').setAttribute('src', 'images/snowy.jpeg');
            }
        }
        else if (weatherId >= 701 && weatherId < 781)
        {
            if (dt >= sunset)
            {
                document.querySelector('#weathericon').setAttribute('src', 'images/fog-night.jpeg');
            }
            else
            {
                document.querySelector('#weathericon').setAttribute('src', 'images/fog.jpeg');
            }
        }
        else if (weatherId >= 801 && weatherId < 804)
        {
            if (dt >= sunset)
            {
                document.querySelector('#weathericon').setAttribute('src', 'images/cloudy-night.jpeg');
            }
            else
            {
                document.querySelector('#weathericon').setAttribute('src', 'images/cloudy.jpeg');
            }
            
        }
        else if (weatherId == 800)
        {
            if (dt >= sunset)
            {
                document.querySelector('#weathericon').setAttribute('src', 'images/moon.jpeg');
            }
            else
            {
                document.querySelector('#weathericon').setAttribute('src', 'images/sunny.jpeg');
            }
            
        }
        else
        {
            document.querySelector('#weathericon').setAttribute('src', iconsrc);
        }
        
    });



