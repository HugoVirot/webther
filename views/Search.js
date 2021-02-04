import React from 'react'
import { View, TextInput, Button } from 'react-native'
import Styles from '../components/Styles.js'
import WeatherResults from '../components/WeatherResults'
import ForecastResults from '../components/ForecastResults'
import { fetchWeather, fetchForecast } from '../components/APIrequests'

export default class Search extends React.Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            location: '',
            reportWeather: null,
            reportForecast: null,
        }
    }
    
    setLocation(text) {
        this.setState({ location: text })
    }

    async getWeather() {
        const response = await fetchWeather(this.state.location);
        if(response) {
            this.setState({ reportWeather: response }, 
                () => {
                console.log(this.state.reportWeather)
            });
        }
    }

    async getForecast() {
        const response = await fetchForecast(this.state.location);
        if(response) {
            this.setState({ reportForecast: response }, 
                () => {
                console.log('test')
            });
        }
    }

    render() {
        return (
            <View style={Styles.container}>
                <TextInput
                    onChangeText={(text) => this.setLocation(text)}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
                    placeholder="Villes, communes, codes postaux"
                />
                <Button color={Styles.blueLight} onPress={() => this.getWeather() && this.getForecast()} title="Rechercher" />

                <WeatherResults 
                location={this.state.location} 
                reportWeather={this.state.reportWeather} 
                style={{ marginVertical: 20 }} 
                />

                <ForecastResults
                location={this.state.location}
                reportForecast={this.state.reportForecast}
                style={{ marginVertical: 20 }}
                />
            </View>
        )
    }
}