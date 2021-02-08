import React from 'react'
import { View, TextInput } from 'react-native'
import WeatherResults from '../components/WeatherResults'
import ForecastResults from '../components/ForecastResults'
import { fetchWeather, fetchForecast } from '../components/APIrequests'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'react-native-elements';

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
        if (response) {
            this.setState({ reportWeather: response },
                () => {
                    console.log(this.state.reportWeather)
                });
        }
    }

    async getForecast() {
        const response = await fetchForecast(this.state.location);
        if (response) {
            this.setState({ reportForecast: response },
                () => {
                    console.log('test')
                });
        }
    }

    render() {
        const searchIcon = <Icon name="search-location" size={45} color="black"/>;
        return (
            <View>
                <View style={{ margin: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <TextInput
                        onChangeText={(text) => this.setLocation(text)}
                        style={{ borderColor: 'gray', marginBottom: 20, flex: 0.9, fontSize: 20 }}
                        placeholder="Recherchez une ville"
                        autoFocus={true}
                    />

                    <Button 
                    type="clear" 
                    onPress={() => this.getWeather() && this.getForecast()} 
                    icon={searchIcon} />
                </View>

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