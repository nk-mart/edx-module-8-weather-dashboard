const Api_Key = "a1b190e84d29a976183eb30d8832461a"; 

let SearchBtn = document.querySelector("#search-button")
let SearchInput = document.querySelector("#search-input")

function WeatherApiCall(city) {
//Main code block 
fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${Api_Key}`
)
    .then(response => response.json())
    .then( citySearch => {
    let firstCity = citySearch[0];
    

   return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=${Api_Key}`)

})

    .then(response => response.json())
    .then( data => {
    console.log(data)
})
}

SearchBtn.addEventListener("click",function(event){
    event.preventDefault();
    console.log(SearchInput.value);

    WeatherApiCall(SearchInput.value);
})

