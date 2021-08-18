import React from 'react'
import { useIsFocused } from '@react-navigation/native'
import { View, Text, Image, ScrollView, RefreshControl, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { ListItem, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Header'
import LocationResults from '../components/LocationResults'
import Ionicons from 'react-native-vector-icons/Ionicons';

const styleSheet = {
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    titleStyle: {
        color: 'darkblue',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    icon: {
        fontSize: 80,
        color: '#47B1E1',
        textAlign: 'center',
        marginTop: 20
    },
    image: {
        width: Dimensions.get("window"),
        height: 100,
        marginTop: 20
    }
};

const Home = props => {

    // focus
    const isFocused = useIsFocused();

    // scroll refresh
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    // remove city
    function handleRemove(cityName) {
        const { dispatch } = props;

        dispatch({
            type: 'citiesModel/removeCity',
            payload: {
                city: cityName
            }
        })
    };


    // const for 
    const list = props.cities;
    const details = props.citiesInformations;
    const deleteIcon = <Icon name="map-marker-remove-variant" size={30} color="red" />;

    return (
        <View style={styleSheet.container}>
            {isFocused ?
                <View style={styleSheet.container}>
                    <Header />
                    <Ionicons style={styleSheet.icon} name="cloud-circle-outline" />
                    <Text style={styleSheet.titleStyle}>React Native Weather</Text>
                    <Image source={{ uri: 'https://image.shutterstock.com/image-photo/weather-forecast-background-climate-change-260nw-1124541077.jpg' }}
                        style={styleSheet.image}>
                    </Image>

                    {/*météo locale */}
                    <LocationResults />

                    {/*liste des villes avec leur météo / ScrollView = FlatList */}
                    <ScrollView refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }>
                        {
                            list.map((city) => (
                                <ListItem key={details[city].id} bottomDivider>
                                    <ListItem.Content>
                                        <ListItem.Title>

                                            <View style={{ flexDirection: 'row' }}>
                                                <Button
                                                    type="clear"
                                                    onPress={() => handleRemove(details[city].name)}
                                                    icon={deleteIcon}
                                                    style={{ marginTop: -10, marginStart: -13 }}
                                                />

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
                </View>
                :
                <Text>Unfocused</Text>
            }
        </View>

    )
}

export default connect((state) => state.citiesModel)(Home);