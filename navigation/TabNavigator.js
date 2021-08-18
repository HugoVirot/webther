import React from 'react'
import { View, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search from '../screens/Search'
import Home from '../screens/Home'
import ChangeName from '../screens/ChangeName'

function HomeScreen() {
    return (
        <View>
            <StatusBar hidden={true} animated={true} />
            <Home />
        </View>
    )
}

function SearchScreen() {
    return (
        <View>
            <StatusBar hidden={true} animated={true} />
            <Search />
        </View>
    );
}

function ChangeNameScreen() {
    return (
        <View>
            <StatusBar hidden={true} animated={true} />
            <ChangeName />
        </View>
    )
}

const Tab = createBottomTabNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "Accueil") {
                            iconName = focused ? "home" : "home-outline";
                        } else if (route.name === "Ajouter une ville") {
                            iconName = focused ? "add-circle" : "add-circle-outline";
                        } else if (route.name === "Changer nom") {
                            iconName = focused ? "person-circle" : "person-circle-outline";
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: "darkblue",
                    inactiveTintColor: "gray",
                    navigationOptions: { navigationOptions: () => doWhatever() }
                }}
            >
                <Tab.Screen name="Accueil" component={HomeScreen} />
                <Tab.Screen name="Ajouter une ville" component={SearchScreen} />
                <Tab.Screen name="Changer nom" component={ChangeNameScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
