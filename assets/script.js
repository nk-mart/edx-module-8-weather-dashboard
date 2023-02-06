const Api_Key = "a1b190e84d29a976183eb30d8832461a"; 

let SearchBtn = document.querySelector("#search-button")
let SearchInput = document.querySelector("#search-input")

// Function to make API calls
function WeatherApiCall(city) {

    //Fetch Call To get City Latitude and longitude
fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${Api_Key}`
)
    .then(response => response.json())
    .then( citySearch => {
    let firstCity = citySearch[0];
    
        // Fetch Call To Search City Using lat and lon 
   return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=${Api_Key}&units=metric`)

})

    .then(response => response.json())
    .then( data => {
        
      
    console.log(data)

    // Parse Data values from response
    let cityName = data.city.name

    let cityTemp = data.list[0].main.temp

    let cityWindSpeed = data.list[0].wind.speed

    let cityWindHumidity = data.list[0].main.humidity

    let weatherIcon = data.list[0].weather[0].icon

    let timeUnix = data.list[0].dt

    let timeMoment = moment(timeUnix).format("DDD/MMM/Y")

    
        console.log(timeUnix)
        console.log(moment(data.list[0].dt).format("Y"))
   
   let cityTile = document.querySelector('.City')
    cityTile.innerHTML = `
    
    <p class="mt-1 h3">${cityName} ${timeMoment} </p>

    <img src=" http://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="city weather icon" >
    <p>City Temp: ${cityTemp} °C</p>
    <p>City Wind: ${cityWindSpeed} KPH</p>
    <p>City Humidity: ${cityWindHumidity} %</p> `

})
}

    //Event Listener on Location Search Button 
SearchBtn.addEventListener("click",function(event){
    event.preventDefault();
    console.log(SearchInput.value);

    WeatherApiCall(SearchInput.value);
})



