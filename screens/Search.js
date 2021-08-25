import React from 'react'
import { connect } from 'react-redux'
import { View, TextInput } from 'react-native'
import WeatherResults from '../components/WeatherResults'
import ForecastResults from '../components/ForecastResults'
import { fetchWeather, fetchForecast } from '../utils/APIrequests'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'react-native-elements';
import Header from '../components/Header'

class Search extends React.Component {

    constructor(props) {
        super(props)                // on fait appel au constructeur de la classe parent 
                                    //(indispensable pour utiliser this dans ce constructeur et donc initialiser le state du composant, et ses props) 
                                    // https://overreacted.io/fr/why-do-we-write-super-props/
        this.state = {              // on déclare ici le state LOCAL du composant
            searchedCity: '',       // la ville recherchée
            cityWeather: null,      // la météo de cette ville renvoyée par l'API
            cityForecast: null,     // les prévisions météo de cette ville sur une semaine
        }
    }

    componentDidUpdate(){
        console.log('liste des villes dans Search : ' + this.props.cities)
    }

    setSearchedCity(text) {         // modifier le state local pour y stocker la ville recherchée saisie par l'utilisateur
        this.setState({ searchedCity: text })
    }

    async getWeather() {            // récupérer la météo de la ville recherchée grâce à l'API
        const response = await fetchWeather(this.state.searchedCity);
        if (response) {             // si on reçoit une réponse (= ville existante ) => on la stocke dans le state local
            this.setState({ cityWeather: response }
            );
        }
    }

    async getForecast() {           // récupérer les prévisions météo sur 7 jours de la ville recherchée grâce à l'API
        const response = await fetchForecast(this.state.searchedCity);
        if (response) {             // si on reçoit une réponse (= ville existante ) => on les stocke dans le state local
            this.setState({ cityForecast: response});
            this.setSearchedCity('')   // n'efface pas le texte saisi => trouver une solution
        }
    }

    render() {
        return (
            <View>
                    <Header style={{ marginBottom: 10 }} />

                    <View style={{ marginHorizontal: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
                        <TextInput
                            onChangeText={(text) => this.setSearchedCity(text)}
                            style={{ borderColor: 'gray', marginTop: 30, marginBottom: 20, flex: 0.9, fontSize: 20 }}
                            placeholder="Recherchez une ville"
                            autoFocus={true}
                        />
                        <Button
                            type="clear"
                            onPress={(e) => {
                                if (this.state.searchedCity != '') {
                                    this.getWeather() && this.getForecast()
                                } else {
                                    e.preventDefault
                                }
                            }}
                            icon={<Icon name="search-location" size={45} color="black" />} />
                    </View>

                    <WeatherResults
                        city={this.state.searchedCity}
                        cityWeather={this.state.cityWeather}
                        style={{ marginVertical: 20 }}
                    />

                    <ForecastResults
                        location={this.state.searchedCity}
                        cityForecast={this.state.cityForecast}
                        style={{ marginVertical: 20 }}
                    />
        
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return state.citiesModel
  }
  
export default connect(mapStateToProps)(Search)

// autre syntaxe :
// export default connect((state) => state.citiesModel)(Search);