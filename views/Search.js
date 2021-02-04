import React from 'react'
import { View, TextInput, Button } from 'react-native'
import Styles from '../components/Styles.js'
import Results from '../components/Results'
import { fetchWeather } from '../components/APIrequests'

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

    async getWeather() {
        const response = await fetchWeather(this.state.location);
        if(response) {
            console.log('salut');
            this.setState({ report: response }, 
                () => {
                console.log(this.state.report)
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
                <Button color={Styles.blueLight} onPress={() => this.getWeather()} title="Rechercher" />

                <Results location={this.state.location} report={this.state.report} style={{ marginVertical: 20 }} />
            </View>
        )
    }
}