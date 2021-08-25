import { fetchWeather, fetchGeolocWeather } from '../utils/APIrequests'

export const citiesModel = {

    state: {         // le state initial du modèle
        cities: [],                    // tableau avec toutes les villes choisies
        localWeather: {},                    // infos ville où se trouve l'utilisateur
        citiesInformations: {},        // infos des villes choisies (cities)
    },

    reducers: {      // pour modifier le state
        setCities(state, cities) {     // modifie la liste des villes (utile pour ajout / suppression)
            return { ...state, cities }
        },
        setLocalWeather(state, localWeather) {     // modifie météo de la position de l'utilisateur
            return { ...state, localWeather }
        },
        setCitiesInformations(state, citiesInformations) {  // modifie la météo des villes choisies
            return { ...state, citiesInformations }
        },
    },

    effects: dispatch => ({

        async addCity({ city }) {  // ajouter une ville à la liste

            // const {                                // création copie du state pour accéder à cities et citiesinformations
            //     meteo: {
            //         cities,
            //         citiesInformations
            //     }
            // } = citiesModel.state;

            // const newCities = [...cities];         // on crée une copie de la liste des villes

            // if (newCities.indexOf(city) == "-1") {  // si la nouvelle ville n'est pas déjà présente...

            //     newCities.unshift(city);                // ...on l'ajoute, et on modifie le state en conséquence
            //     this.setCities({ cities: newCities })

            //     const response = await getCityWeather(city);  // On récupère la météo de la nouvelle ville

            //     if (response && typeof response === "object") {
            //         const newCitiesInfos = JSON.parse(JSON.stringify(citiesInformations)); // on transforme les infos des villes en objet json
            //         newCitiesInfos[city] = response;     // on y ajoute les infos de la nouvelle ville à la clé [city] (nom nouvelle ville)
            //         // on utilise le reducer setNewCity pour ajouter les infos des villes actualisées
            //         this.setNewCity({ cities: newCities, citiesInformations: newCitiesInfos });
            //     } else {
            //         console.log("erreur " + response);
            //     }
            // }

            const newCities = citiesModel.state.cities;
            const newCitiesInformations = citiesModel.state.citiesInformations;

            if (newCities.indexOf(city) == "-1") {   // si la ville n'est pas dans la liste...

                newCities.unshift(city);                     // ...on l'ajoute
                dispatch.citiesModel.setCities(newCities);   //  et on modifie le state en conséquence

                const weather = await fetchWeather(city);  // on récupère la météo de la nouvelle ville
                newCitiesInformations[city] = weather;      // on la stocke
                dispatch.citiesModel.setCitiesInformations(newCitiesInformations);
                console.log('la ville ' + city + ' a bien été ajoutée')
            }
        },

        async getLocalWeather({ lat, long }) {
            const response = await fetchGeolocWeather(lat, long);

            if (response && typeof response === "object") {
                dispatch.citiesModel.setLocalWeather(response);
            } else {
                console.log("erreur " + response);
            }
        },

        async removeCity({ city }) {
            console.log("je passe dans le modèle")
            const newCities = citiesModel.state.cities;
            const index = newCities.indexOf(city);
            newCities.splice(index, 1);
            dispatch.citiesModel.setCities(newCities);
        }
    })
}