import React from 'react'
import { Text, SafeAreaView, FlatList } from 'react-native'
import ForecastCard from './ForecastCard';


export default class Results extends React.Component {

    render() {
        if (this.props.reportForecast) {
            const objForecast = this.props.reportForecast;
            console.log(objForecast.list);

            if (objForecast.cod == '404') {
                return (
                    <Text>Prévisions manquantes...</Text>
                )
            }
            else {
                return (
                    <SafeAreaView>
                        <FlatList
                            data={objForecast.list}
                            style={{ marginTop: 20 }} 
                            keyExtractor={item => item.dt_text} 
                            renderItem={({ item }) => 
                                <ForecastCard 
                                detail={item} 
                                location={objForecast.city.name} />}
                            />
                    </SafeAreaView>
                )
            }
        }
        else {
            return (
                        <Text></Text>
            )
        }
    }
}