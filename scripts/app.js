const APIKEY = '72bd0913075e0f967779e1c1b7926640'

let apiCall = function(city){

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

fetch(url).then(response => response.json().then(data => {
    console.log(data);
    document.getElementById("city").innerHTML = data.name;
    let iconId = data.weather[0].icon;
    let iconUrl = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
    document.getElementById("icon").innerHTML = `<img src="${iconUrl}" width="200px" height="200px" style="margin-top: 15px">`;
    document.getElementById("sky-content").innerHTML = data.weather[0].description;
    document.getElementById("temp-content").innerHTML = '<i class="fas fa-thermometer-three-quarters"></i></br>' + data.main.temp + '°';
    document.getElementById("humidity-content").innerHTML = '<i class="fas fa-tint"></i></br>' + data.main.humidity + '%';
    document.getElementById("wind-content").innerHTML = '<i class="fas fa-wind"></i></br>' + Math.round(data.wind.speed*3.6) + ' km/h';
    })).catch((err) => {
    console.log('erreur : ' + err);
    document.getElementById("city").innerHTML = "ville non trouvée";
    document.getElementById("icon").innerHTML = null;
    document.getElementById("sky-content").innerHTML = null;
    document.getElementById("temp-content").innerHTML = null;
    document.getElementById("humidity-content").innerHTML = null;
    document.getElementById("wind-content").innerHTML = null;
    });
};

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    let chosenCity = document.getElementById("form-input").value;
    apiCall(chosenCity);
});

apiCall("Nantes");