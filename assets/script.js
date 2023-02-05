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
        //data to be passed to function
      
    console.log(data)
    let cityName = data.city.name

    let cityTemp = data.list[0].main.temp

    let cityWindSpeed = data.list[0].wind.speed

   let cityWindHumidity = data.list[0].main.humidity

    console.log(cityName)
    console.log(cityTemp)
    console.log(cityWindSpeed)
    console.log(cityWindHumidity)
   // console.log(data.city.country)
   // console.log( {city} = data)
   let cityTile = document.querySelector('.City')
    cityTile.innerHTML = `
    
    <p>City Name: ${cityName}</p>
    <p>City Temp: ${cityTemp}</p>
    <p>City Wind: ${cityWindSpeed}</p>
    <p>City Humidity: ${cityWindHumidity}</p> `

})
}

    //Event Listener on Location Search Button 
SearchBtn.addEventListener("click",function(event){
    event.preventDefault();
    console.log(SearchInput.value);

    WeatherApiCall(SearchInput.value);
})



