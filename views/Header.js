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
            {userName == '' ?
                <Header
                    placement="left"
                    centerComponent={{ text: 'Voici votre météo' + userName, style: { color: '#fff' } }}
                />
                :
                <Header
                    placement="left"
                    centerComponent={{ text: 'Voici votre météo', style: { color: '#fff' } }}
                />
            }
        </View>
    )
}

export default HeaderUserName;