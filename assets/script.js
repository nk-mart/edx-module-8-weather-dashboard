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
   return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=${Api_Key}`)

})

    .then(response => response.json())
    .then( data => {
    console.log(data)
})
}

    //Event Listener on Location Search Button 
SearchBtn.addEventListener("click",function(event){
    event.preventDefault();
    console.log(SearchInput.value);

    WeatherApiCall(SearchInput.value);
})



