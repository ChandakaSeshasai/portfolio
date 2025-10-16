const checkwheather = async (name) => {
    const apiid = "7f57adef89eb52d34c931276df0a9288";
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${apiid}`;
    const res = await fetch(apiurl);
    const data = await res.json();
    console.log(data);

    if (data.name === undefined) {
        const box = document.querySelector("#box-main");
        box.style.display = "none";
        const para = document.querySelector("#err");
        para.style.display = "block";
    }
    else {
        const box = document.querySelector("#box-main");
        box.style.display = "block";
        const para = document.querySelector("#err");
        para.style.display = "none";
        const img = document.querySelector(".weather");
        if (data.weather[0].main == "Clouds") {
            img.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            img.src = "images/clear.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            img.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            img.src = "images/mist.png";
        }
        else if (data.weather[0].main == "Rain") {
            img.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Snow") {
            img.src = "images/snow.png";
        }

        document.querySelector("#country").innerHTML = data.name;
        document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector("#des").innerHTML = data.weather[0].description;
        document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
        document.querySelector("#wind").innerHTML = data.wind.speed + "km/h";
    }
}

document.querySelector(".inp button").addEventListener("click", () => {
    const location = document.querySelector(".inp input").value.trim();

    checkwheather(location);

});
