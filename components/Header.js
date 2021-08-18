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
                <Header
                    placement="center"
                    centerComponent={{ text: userName !== null ? 'Bienvenue ' + userName + " !" : 'Utlisateur inconnu', style: { color: '#fff', fontSize: 20 } }}
                    containerStyle={{
                        backgroundColor: 'darkblue',
                        height: 70
                    }}
                />
        </View>
    )
}

export default HeaderUserName;