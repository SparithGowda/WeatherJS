var button = document.querySelector('.button');
var InputValue = document.querySelector('.inputValue');
var cityname = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function() {
    // Clear previous results
    cityname.innerHTML = '';
    temp.innerHTML = '';
    desc.innerHTML = '';

    // Fetch data from the weather API
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + InputValue.value + '&appid=b58a9ec492e41965770f0681f4336ac1&units=metric')
    .then(response => {
        if (!response.ok) {
            // If city is not found, response.ok will be false
            throw new Error('City not found');
        }
        return response.json();
    })
    .then(data => {
        // Extract and display data
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['main'];

        cityname.innerHTML = nameValue;
        temp.innerHTML = tempValue + "°C";
        desc.innerHTML = descValue;
    })
    .catch(err => {
        // Display a more specific error message
        alert("Error: " + err.message + ". Please try again.");
    });
});
