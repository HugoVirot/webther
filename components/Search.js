import React from 'react'
import { View, TextInput, Button } from 'react-native'
import Styles from './Styles.js'

export default class Search extends React.Component {

    setCity(city) {
        this.setState({ city })
    }

    render() {
        return (
            <View style={Styles.container}>
                <TextInput
                    onChangeText={(text) => this.setCity(text)}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
                    placeholder="Villes, communes, codes postaux"
                />
                <Button color={Styles.blueLight} onPress={() => this.submit()} title="Rechercher" />
            </View>
        )
    }
}

