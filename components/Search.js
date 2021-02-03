import React from 'react'
import { View, TextInput, Button } from 'react-native'
import Styles from './Styles.js'
import Results from './Results'

export default class Search extends React.Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            location: '',
            report: null,
        }
    }
    
    setLocation(text) {
        this.setState({ location: text })
    }

    fetchWeather() {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=' + this.state.location + '&appid=5d677b7e13ed912ac10ea4d526983cf9')
            .then((response) => {
                this.setState({ report: response.json() });
            })
    }

    render() {
        return (
            <View style={Styles.container}>
                <TextInput
                    onChangeText={(text) => this.setLocation(text)}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
                    placeholder="Villes, communes, codes postaux"
                />
                <Button color={Styles.blueLight} onPress={() => this.fetchWeather()} title="Rechercher" />

                <Results location={this.state.location} report={this.state.report} style={{ marginVertical: 20 }} />
            </View>
        )
    }
}

