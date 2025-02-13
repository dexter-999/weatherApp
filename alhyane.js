function weatherMap(){
    const APIKey = 'f1809f06cff02b627595440576ad1bab'
    const city = document.getElementById('input-city').value
    fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}')
    .then(res=>res.json())
    .then(data)
    console.log(data)
}
weatherMap();


