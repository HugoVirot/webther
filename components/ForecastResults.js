import React from 'react'
import { Text, SafeAreaView, FlatList, ScrollView } from 'react-native'
import ForecastCard from './ForecastCard';


export default class Results extends React.Component {

    render() {
        if (this.props.reportForecast) {
            const objForecast = this.props.reportForecast;

            if (objForecast.cod == '404') {
                return (
                    <Text>Prévisions manquantes...</Text>
                )
            }
            else {
                return (
                    <SafeAreaView style={{ marginTop: 30 }}>
                        <ScrollView horizontal={true}>
                            <FlatList
                                horizontal={true}
                                data={objForecast.list}
                                style={{ marginTop: 20 }}
                                keyExtractor={item => item.dt_text}
                                renderItem={({ item }) =>
                                    <ForecastCard
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