const apiKey = "5a0d1bcbdee3437899295538250510";

const searchBtn = document.getElementById("searchBtn");

async function getWeather(city) {

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    try {

        const response = await fetch(url);

        const data = await response.json();

        document.getElementById("temp").innerHTML =
            data.current.temp_c + "°C";

        document.getElementById("cityName").innerHTML =
            data.location.name;
        document.getElementById("condition").innerHTML =
            data.current.condition.text;

        document.getElementById("humidity").innerHTML =
            data.current.humidity + "%";

        document.getElementById("wind").innerHTML =
            data.current.wind_kph + " km/h";

        document.getElementById("cloud").innerHTML =
            data.current.cloud + "%";

        document.getElementById("weatherIcon").src =
            "https:" + data.current.condition.icon;

    }

    catch(error){

        alert("City Not Found");

    }

}

searchBtn.addEventListener("click",()=>{

    const city=document.getElementById("city").value;

    getWeather(city);

});

getWeather("Delhi");