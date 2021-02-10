import { fetchWeather, fetchGeolocWeather } from '../components/APIrequests'

export const citiesModel = {
    state: {
        cities: [],
        geoloc: {},
        citiesInformations: {},
    },
    reducers: {
        setCities(state, cities) {
            return {...state, cities}
        },
        setGeoloc(state, geoloc) {
            return {...state, geoloc}
        },
        setCitiesInformations(state, citiesInformations) {
            return {...state, citiesInformations}
        },
    },
    effects: dispatch => ({
        async addCity({city}) {

            const newCities = citiesModel.state.cities;
            const newCitiesInformations = citiesModel.state.citiesInformations;

            newCities.unshift(city);
            dispatch.citiesModel.setCities(newCities);

            const weather = await fetchWeather(city);
            newCitiesInformations[city] = weather;
            dispatch.citiesModel.setCitiesInformations(newCitiesInformations);
        },
        async showGeoloc({lat, long}) {
            const weather = await fetchGeolocWeather(lat, long);
            dispatch.citiesModel.setGeoloc(weather);
        }
    })
}