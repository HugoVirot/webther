import React from 'react'
import { View, StatusBar } from 'react-native'
import Search from '../components/Search'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function SearchScreen() {
    return (
        <View style={{ marginVertical: 100 }}>
            <StatusBar hidden={true} animated={true} />
            <Search />
        </View>
    );
}

export default class TabNavigator extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === 'Search') {
                                iconName = focused
                                    ? 'ios-search-sharp'
                                    : 'ios-search-outline';
                            } else if (route.name === 'Settings') {
                                iconName = focused ? 'ios-list-box' : 'ios-list';
                            }

                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: '#6767ac',
                        inactiveTintColor: '#7abaf9',
                    }}
                >
                    <Tab.Screen name="Search" component={SearchScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

const Tab = createBottomTabNavigator();