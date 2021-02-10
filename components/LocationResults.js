import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const LocationResults = props => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('La permission d\'accès à la localisation a été refusée');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            let locationText = 'Waiting..';

            if (errorMsg) {
                locationText = errorMsg;
            }
            else if (location) {
                const { coords: { latitude, longitude } } = location;
                const lat = latitude;
                const long = longitude;

                const { dispatch } = props;

                dispatch({
                    type: 'citiesModel/showGeoloc',
                    payload: {
                        lat: lat,
                        long: long,
                    }
                })
            }
        })();
    }, []);

    const detail = props.geoloc;
    console.log(detail);

    return (
        <View>
            {detail.name ?
                <View style={{ flexDirection: 'row', margin: 15 }}>
                    <Icon name="map-marker-radius-outline" size={100} color="#6767ac" />
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 30, marginStart: 10 }}>{detail.name}</Text>
                        <Text></Text>
                    </View>
                </View>
                :
                <View style={{ margin: 15 }}>
                    <Text>Acceptez la géolocalisation pour voir les résultats sur votre emplacement</Text>
                </View>
            }

        </View>
    )
}

export default connect((state) => state.citiesModel)(LocationResults);