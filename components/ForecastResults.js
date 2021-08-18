import React from 'react'
import { Text, SafeAreaView, FlatList, ScrollView } from 'react-native'
import ForecastCard from './ForecastCard';


export default class Results extends React.Component {

    render() {
        console.log(this.props.reportForecast);
        if (this.props.reportForecast) {
            const objForecast = this.props.reportForecast;

            if (objForecast.cod == '404') {
                return (
                    <Text>Pas de prévisions disponibles</Text>
                )
            }
            else {
                return (
                    <SafeAreaView style={{ marginTop: 30 }}>
                        <Text style={{ textAlign: 'center' }}>Dans les prochaines heures</Text>
                        <ScrollView>
                            <FlatList
                                horizontal={true}
                                data={objForecast.list}
                                keyExtractor={item => item.dt.toString()}
                                renderItem={({ item }) =>
                                    <ForecastCard
                                        style={{ padding: 20, margin : 20 }}
                                        detail={item}
                                        location={objForecast.city.name} />
                                }
                            />
                        </ScrollView>
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