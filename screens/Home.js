import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import styleSheet from '../style/StyleSheet';
import Header from '../components/Header'
import LocationResults from '../components/LocationResults'
import CitiesList from '../components/CitiesList';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = props => {

    // const for 
    const list = props.cities;
    const details = props.citiesInformations;
    console.log(list);
    console.log(details);

    return (

        <View style={styleSheet.container}>
            <Header />
            <Ionicons style={styleSheet.icon} name="cloud-circle-outline" />
            <Text style={styleSheet.titleStyle}>React Native Weather</Text>
            <Image source={{ uri: 'https://image.shutterstock.com/image-photo/weather-forecast-background-climate-change-260nw-1124541077.jpg' }}
                style={styleSheet.image}>
            </Image>

            {/*météo locale */}
            
            <Text style={styleSheet.title} > Météo de votre ville </Text>
            <LocationResults />

            {/*liste des villes avec leur météo */}

            <Text style={styleSheet.title} > Vos villes favorites </Text>
            <CitiesList list={props.cities} details={props.citiesInformations} /> 
        </View>

    )
}

// on connecte le state du citiesModel aux props du composant Home (étape très importante)
const mapStateToProps = (state) => {
    return state.citiesModel
  }
  
export default connect(mapStateToProps)(Home)

// autre syntaxe (même résultat) :
// export default connect((state) => state.citiesModel)(Home);