import React from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { ListItem } from 'react-native-elements'
import Header from './Header'
import LocationResults from '../components/LocationResults'

const Home = props => {

    // console.log(props.citiesInformations);

    const list = props.cities;

    return (
        <View>
            <Header />
            <LocationResults />
            {
                list.map((city) => (
                    <ListItem key={props.citiesInformations[city].id} bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>
                                <Image source={{ uri: `http://openweathermap.org/img/w/${props.citiesInformations[city].weather[0].icon}.png` }} style={{ height: 70, width: 70 }} />
                                <Text>{props.citiesInformations[city].name}</Text>
                            </ListItem.Title>
                            <ListItem.Subtitle>
                                Temp : {props.citiesInformations[city].main.temp}°C /
                                Ressenti : {props.citiesInformations[city].main.feels_like}
                            </ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
        </View>
    )
}

export default connect((state) => state.citiesModel)(Home);