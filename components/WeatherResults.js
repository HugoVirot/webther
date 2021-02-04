import React from 'react'
import { View, Text, Image } from 'react-native'

export default class Results extends React.Component {

    render() {
        if (this.props.reportWeather) {
            const objWeather = this.props.reportWeather;
            console.log(objWeather);

            if(objWeather.cod == '404') {
                return (
                    <Text>Ville introuvable...</Text>
                )
            } else {
                const img = `http://openweathermap.org/img/w/${objWeather.weather[0].icon}.png`;
                return (
                    <View>
                        <Text>Recherche pour : {this.props.location}</Text>
                        <Text style={{marginVertical: 20}}>{objWeather.name}</Text>
                        <Text>{objWeather.weather[0].description}</Text>
                        <Image source={{uri: img }} style = {{height: 100, width: 100, backgroundColor: '#7d7d7f'}} />
                        <Text>Temperature actuelle : {objWeather.main.temp}°C</Text>
                        <Text>Ressenti : {objWeather.main.feels_like}°C</Text>
                        <Text>Température minimum : {objWeather.main.temp_min}°C</Text>
                        <Text>Température maximum : {objWeather.main.temp_max}°C</Text>
                        <Text>Humidité : {objWeather.main.humidity}%</Text> 
                        <Text></Text>
                    </View>
                )
            }
        } else {
            return (
                <Text></Text>
            )
        }
    }
}