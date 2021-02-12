import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Image } from 'react-native'
import AddCityBtn from './AddCityBtn';
import RemoveCityBtn from './RemoveCityBtn';
import Styles from './Styles';


const WeatherResults = props => {

    if (props.reportWeather) {
        const objWeather = props.reportWeather;
        console.log(props.cities)

        if (objWeather.cod == '404') {
            return (
                <Text>Ville introuvable...</Text>
            )
        } else {
            const img = `http://openweathermap.org/img/w/${objWeather.weather[0].icon}.png`;
            return (
                <View>
                    <View>
                        <Text style={{ marginBottom: 15, fontWeight: 'bold', fontSize: 50 }}>
                            {objWeather.name}
                        </Text>

                        {props.cities.includes(objWeather.name) ?
                        <RemoveCityBtn searchedCity={objWeather.name} />
                        :
                        <AddCityBtn searchedCity={objWeather.name} />
                        }
                        
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={{ uri: img }} style={{ height: 70, width: 70 }} />
                            <Text style={{ marginLeft: 10 }}>
                                {objWeather.weather[0].description}
                            </Text>
                        </View>

                        <View style={{ alignItems: "center" }}>
                            <Text style={{ color: '#c3c4c6', fontStyle: 'italic', marginBottom: 20 }}>
                                Humidité : {objWeather.main.humidity}%
                                </Text>
                            <Text style={{ fontSize: 60, fontWeight: 'bold' }}>
                                {objWeather.main.temp}°C
                                </Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={Styles.temperature}>
                                    Ressenti : {objWeather.main.feels_like}°C
                                    </Text>
                                <Text style={Styles.temperature}>
                                    Min. : {objWeather.main.temp_min}°C
                                    </Text>
                                <Text style={Styles.temperature}>
                                    Max. : {objWeather.main.temp_max}°C
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


export default connect((state) => state.citiesModel)(WeatherResults);