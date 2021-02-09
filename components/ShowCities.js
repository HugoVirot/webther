import React from 'react';
import { View, Image } from 'react-native';
import { Text, Divider } from 'react-native-elements';

export default class ShowCities extends React.Component {
    
    render() {
        return (
            <View>
                <Text>{ this.props.detail.name}</Text>
            </View>
        )
    }
}