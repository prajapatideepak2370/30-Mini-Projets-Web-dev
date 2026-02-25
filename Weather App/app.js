const apiKey = "5625b26b3ab13562ef8399d274f305d5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-bar input");
const srchBtn = document.querySelector(".search-bar button");
const weatherIcon = document.querySelector(".Weather-icon");
const box = document.querySelector(".box");
const climate = document.querySelector(".climate");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (!response.ok) {
        climate.style.display = "none";
        box.classList.remove("large");
        alert("City not found or API error!");
        return;
    }
    box.classList.add("large");
    climate.style.display = "block";
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°c";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "/Weather App/Assets/clouds.png"
    } else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "/Weather App/Assets/rain.png"
    } else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "/Weather App/Assets/clear.png"
    } else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "/Weather App/Assets/drizzle.png"
    } else if (data.weather[0].main == "Snow"){
        weatherIcon.src = "/Weather App/Assets/snow.png"
    } else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "/Weather App/Assets/mist.png"
    }
}

srchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
})