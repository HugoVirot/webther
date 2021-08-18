
export function fetchWeather(location) {
    let request = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&lang=fr&appid=5d677b7e13ed912ac10ea4d526983cf9&units=metric';

    return fetch(request, {method: 'GET'})
    .then(response => {
        return response.json()
    })
    .catch(error => console.log(error));
}

export function fetchGeolocWeather(lat, long) {
    let request = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&lang=fr&appid=5d677b7e13ed912ac10ea4d526983cf9&units=metric';

    return fetch(request, {method: 'GET'})
    .then(response => {
        return response.json()
    })
    .catch(error => console.log(error));
}

export function fetchForecast(location) {
    let request = 'http://api.openweathermap.org/data/2.5/forecast?q=' + location + '&lang=fr&appid=5d677b7e13ed912ac10ea4d526983cf9&units=metric';

    return fetch(request, {method: 'GET'})
    .then(response => {
        return response.json()
    })
    .catch(error => console.log(error));
}