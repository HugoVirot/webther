import React from 'react'
import { View, Text, Image } from 'react-native'

export default class Results extends React.Component {

    render() {
        if (this.props.report) {
            const object = this.props.report;
            console.log(object);

            if(object.cod == '404') {
                return (
                    <Text>Ville introuvable...</Text>
                )
            } else {
                const img = `http://openweathermap.org/img/wn/${object.weather[0].icon}@2x.png`;
                return (
                    <View>
                        <Text>Recherche pour : {this.props.location}</Text>
                        <Text style={{marginVertical: 20}}>{object.name}</Text>
                        <Text>{object.weather[0].description}</Text>
                        <Image source={{uri: img }} style = {{height: 100, width: 100, backgroundColor: '#7d7d7f'}} />
                        <Text>Temperature actuelle : {object.main.temp}°C</Text>
                        <Text>Ressenti : {object.main.feels_like}°C</Text>
                        <Text>Température minimum : {object.main.temp_min}°C</Text>
                        <Text>Température maximum : {object.main.temp_max}°C</Text>
                        <Text>Humidité : {object.main.humidity}%</Text> 
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