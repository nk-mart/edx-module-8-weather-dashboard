const Api_Key = "a1b190e84d29a976183eb30d8832461a"; 






/// Main code block 
fetch(`https://api.openweathermap.org/geo/1.0/direct?q=miami&limit=5&appid=${Api_Key}`
)
    .then(response => response.json())
    .then( citySearch => {
    let firstCity = citySearch[0];
    console.log(firstCity.lon);

   return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=${Api_Key}`)

})

    .then(response => response.json())
    .then( data => {
    console.log(data)
})