import React from 'react';
import { View, Image } from 'react-native';
import { Text, Divider } from 'react-native-elements';
import Moment from 'react-moment';
import 'moment/locale/fr';


export default class ForecastCard extends React.Component {

    render() {
        let time;
        // Create a new date from the passed date time
        const date = new Date(this.props.detail.dt * 1000);
        // Hours part from the timestamp
        const hours = date.getHours();
        // Minutes part from the timestamp
        const minutes = "0" + date.getMinutes();
        time = hours + ':' + minutes.substr(-2);
        Moment.globalLocale = 'fr';

        return (
            <View>
                <Moment format="ddd">{this.props.detail.dt_txt}</Moment>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Image style={{ width: 100, height: 100 }} source={{ uri: "https://openweathermap.org/img/w/" + this.props.detail.weather[0].icon + ".png" }} />
                    <Text>{time}</Text>
                </View>
                <Divider style={{ backgroundColor: '#dfe6e9', marginVertical: 20 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>{this.props.detail.weather[0].description}</Text>
                    <Text>{Math.round(this.props.detail.main.temp * 10) / 10}&#8451;</Text>
                </View>
            </View>
        )
    }
}