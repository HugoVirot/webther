import { Header } from 'react-native-elements'
import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HeaderUserName = () => {
    useEffect(() => {
        async function getName() {
            const temp = await AsyncStorage.getItem("userName");
            setName(temp);
        }
        getName();
    })

    const [userName, setName] = useState("");
    return (
        <View>
            {userName !== null ?
                <Header
                    placement="left"
                    centerComponent={{ text: 'Voici votre météo ' + userName, style: { color: '#fff' } }}
                    containerStyle={{
                        backgroundColor: '#7abaf9',
                        height: 60
                    }}
                />
                :
                <Header
                    placement="left"
                    centerComponent={{ text: 'Voici votre météo', style: { color: '#fff' } }}
                    barStyle="dark-content"
                    containerStyle={{
                        backgroundColor: '#7abaf9'
                    }}
                />
            }
        </View>
    )
}

export default HeaderUserName;