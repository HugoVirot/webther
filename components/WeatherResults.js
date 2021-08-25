import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, Button } from 'react-native'
import RemoveCityBtn from './RemoveCityBtn';
import Styles from '../style/StyleSheet';


const WeatherResults = props => {


    useEffect(() => {   
        console.log('liste des villes dans WeatherResults : ' + props.cities)
    })

    if (props.cityWeather) {
        const cityWeather = props.cityWeather;

        function addCity() {

            const { dispatch } = props;
            dispatch({
                type: 'citiesModel/addCity',
                payload: {
                    city: cityWeather.name
                }
            })
            //console.log('props.cities de WeatherResults ' + props.cities)
        };

        if (cityWeather.cod == '404') {
            return (
                <Text>Ville introuvable...</Text>
            )
        } else {
            const img = `http://openweathermap.org/img/w/${cityWeather.weather[0].icon}.png`;
            return (
                <View>
                    <View>
                        <Text style={{ marginBottom: 15, fontWeight: 'bold', fontSize: 40, textAlign: 'center' }}>
                            {cityWeather.name}
                        </Text>

                        {props.cities.includes(cityWeather.name) ?
                            <RemoveCityBtn searchedCity={cityWeather.name} />
                            :
                            <Button
                                type="clear"
                                onPress={() => addCity()}
                                title="+ Sauvegarder la ville" />
                        }

                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={{ uri: img }} style={{ height: 100, width: 100 }} />
                            <Text style={{ fontSize: 20, marginLeft: 5 }}>
                                {cityWeather.weather[0].description}
                            </Text>
                        </View>

                        <View style={{ alignItems: "center" }}>
                            <Text style={{ color: '#c3c4c6', fontStyle: 'italic', marginBottom: 20 }}>
                                Humidité : {cityWeather.main.humidity}%
                            </Text>
                            <Text style={{ fontSize: 40, fontWeight: 'bold' }}>
                                {cityWeather.main.temp}°C
                            </Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={Styles.temperature}>
                                    Ressenti : {cityWeather.main.feels_like}°C
                                </Text>
                                <Text style={Styles.temperature}>
                                    Min. : {cityWeather.main.temp_min}°C
                                </Text>
                                <Text style={Styles.temperature}>
                                    Max. : {cityWeather.main.temp_max}°C
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            )
        }
    } else {
        return (
            <Text></Text>
        )
    }
}

// on connecte le state du citiesModel aux props du composant (étape très importante)

const mapStateToProps = (state) => {
    return state.citiesModel
}

export default connect(mapStateToProps)(WeatherResults)

// même opération, syntaxe plus courte
//export default connect((state) => state.citiesModel)(WeatherResults);