import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import { connect } from 'react-redux'
import { View, Text, Image } from 'react-native'
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
            let locationText = 'Waiting...';

            if (errorMsg) {
                locationText = errorMsg;
            }
            else if (location) {
                const { coords: { latitude, longitude } } = location;
                const lat = latitude;
                const long = longitude;

                const { dispatch } = props;

                dispatch({
                    type: 'citiesModel/getLocalWeather',
                    payload: {
                        lat: lat,
                        long: long,
                    }
                })
            }
        })();
    }, []);

    const detail = props.localWeather;
   
    return (
        <View>
            {detail.name ?
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <View style={{ marginStart: 20 }}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent : 'space-between'}}>
                        <Icon name="map-marker-radius-outline" size={80} color="#47B1E1" />

                            <Text style={{ fontWeight: 'bold', fontSize: 30 }}>{detail.name}</Text>
                            <Image source={{ uri: `http://openweathermap.org/img/w/${detail.weather[0].icon}.png` }} style={{ height: 100, width: 100, marginStart: 10 }} />
                        </View>

                        <Text style={{fontSize: 20, marginTop: -20, marginBottom: 20}}>
                            {detail.weather[0].description}
                        </Text>
                        <Text style={{color: 'grey', fontStyle: 'italic'}}>
                            Temp: {detail.main.temp}°C / Ressenti: {detail.main.feels_like}°C{'\n'}
                            Min: {detail.main.temp_min}°C / Max: {detail.main.temp_max}°C
                        </Text>
                    </View>
                </View>
                :
                <View style={{ margin: 30 }}>
                    <Text>Acceptez la géolocalisation pour voir la météo locale</Text>
                </View>
            }

        </View>
    )
}

export default connect((state) => state.citiesModel)(LocationResults);