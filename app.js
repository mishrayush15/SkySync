document.addEventListener('DOMContentLoaded', function() {
    const apiKey = "219d968141fd7582881b30584c00833b";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

    let searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    
    const icon = document.querySelector(".weather-icon");

    async function checkWeather(city){
        const response = await fetch(apiUrl+city+`&appid=${apiKey}`)
        if(response.status==404){
            alert("Invalid city name");
            window.location.reload();
        }

        let data = await response.json();
        console.log(data);


    
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp);
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + "Km/h";
    
        if(data.weather[0].main=="Clear"){
            icon.src="images/clearSun.png";
            icon.classList.add('rotate');
        }else if(data.weather[0].main=="Clouds"){
            icon.src="images/clouds.png";
            icon.classList.remove('rotate');
        }else if(data.weather[0].main=="Rain"){
            icon.src="images/rain.png";
            icon.classList.remove('rotate');
        }else if(data.weather[0].main=="Drizzle"){
            icon.src="images/drizzle.png";
            icon.classList.remove('rotate');
        }else if(data.weather[0].main=="Mist"){
            icon.src="images/mist.png";
            icon.classList.remove('rotate');
        }

        document.querySelector(".weather").style.display="block";
    }
    searchBtn.addEventListener(('click'),()=>{
        checkWeather(searchBox.value);
    })
});



