import React from 'react'
import { View, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Styles from '../components/Styles'
import Search from '../views/Search'
import Home from '../views/Home'
import User from '../views/User'

function SearchScreen() {
    return (
        <View style={Styles.views}>
            <StatusBar hidden={true} animated={true} />
            <Search />
        </View>
    );
}

function HomeScreen() {
    return (
        <View style={Styles.views}>
            <StatusBar hidden={true} animated={true} />
            <Home />
        </View>
    )
}

function UserScreen() {
    return (
        <View style={Styles.views}>
            <StatusBar hidden={true} animated={true} />
            <User />
        </View>
    )
}

export default class TabNavigator extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === 'Recherche') {
                                iconName = focused
                                    ? 'ios-search-sharp'
                                    : 'ios-search-outline';
                            } 
                            else if (route.name === 'Utilisateur') {
                                iconName = focused ? 'ios-person' : 'ios-person-outline';
                            } 
                            else if (route.name === 'Accueil') {
                                iconName = focused ? 'ios-cloud' : 'ios-cloud-outline';
                            }

                            return  <Ionicons name={iconName} size={size} color={color} />;
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: '#6767ac',
                        inactiveTintColor: '#7abaf9',
                        showLabel: false,
                    }}
                >
                    <Tab.Screen name="Recherche" component={SearchScreen} />
                    <Tab.Screen name="Utilisateur" component={UserScreen} />
                    <Tab.Screen name="Accueil" component={HomeScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

const Tab = createBottomTabNavigator();