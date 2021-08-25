import React, { useEffect } from 'react';
import { Text, ListItem, Icon } from 'react-native-elements';
import { View, Image, ScrollView, RefreshControl, Button, SafeAreaView, Dimensions } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { connect } from 'react-redux'

// ce composant affiche la liste des villes (list) et leur météo (details) transmises en tant que props par le composant Home
const CitiesList = props => {

    useEffect(() => {
        console.log('sur home, liste des villes : '+ props.list)
    })

    const list = props.list
    const details = props.details

    // focus
    const isFocused = useIsFocused();

    const { dispatch } = props;
    
    // remove city
    function removeCity(cityName) {       

        dispatch({
            type: 'citiesModel/removeCity',
            payload: {
                city: cityName
            }
        })
    };

    const screenHeight = Dimensions.get('window').height

    return (

        <View style={{ flex: 1 }}>
            {/*liste des villes avec leur météo / ScrollView = FlatList */}
            <SafeAreaView style={{ height: screenHeight }}>
            <ScrollView
              
            >
                {
                    list.map((city) => (
                        <ListItem key={details[city].id} bottomDivider>
                            <ListItem.Content>
                                <ListItem.Title>

                                    <View style={{ flexDirection: 'row' }}>
                                        {/* <Button
                                            type="clear"
                                            onPress={() => handleRemove(details[city].name)}
                                            icon={deleteIcon}
                                            style={{ marginTop: -10, marginStart: -13 }}
                                        /> */}

                                        <View style={{ marginStart: 10 }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                                    {details[city].name}
                                                </Text>
                                            </View>
                                        </View>
                                        <Image source={{ uri: `http://openweathermap.org/img/w/${details[city].weather[0].icon}.png` }}
                                            style={{ height: 50, width: 50, marginTop: -15, marginStart: 10 }}
                                        />
                                        <Icon style={{ textAlign: 'end' }} name="clear" type="material" onPress={() => removeCity(details[city].name)} />
                                    </View>

                                </ListItem.Title>
                                <ListItem.Subtitle>
                                    Temp: {details[city].main.temp}°C /
                                    Min: {details[city].main.temp_min}°C /
                                    Max: {details[city].main.temp_max}°C
                                </ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
            </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default connect((state) => state.citiesModel)(CitiesList);
