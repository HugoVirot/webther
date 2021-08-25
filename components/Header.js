import { Header } from 'react-native-elements'
import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { connect } from 'react-redux'

const HeaderUserName = () => {
    
    // hook de type useffect : fonction qui met à jour le state local à chaque affichage du composant
    // les hooks ne fonctionnent pas dans les classes

    useEffect(() => {
        async function getName() {
            const name = await AsyncStorage.getItem("userName");
            setName(name);
        }
        getName();
    })

    // on associe ces deux fonctions au state local du composant
    // entre les parenthèses, l'état initial du userName (string vide)
    const [userName, setName] = useState("");

    return (
        <View>
                <Header
                    placement="center"
                    centerComponent={{ text: userName !== "" ? 'Bienvenue ' + userName + " !" : 'Utilisateur inconnu', style: { color: '#fff', fontSize: 20 } }}
                    containerStyle={{
                        backgroundColor: 'darkblue',
                        height: 70
                    }}
                />
        </View>
    )
}

const mapStateToProps = (state) => {
    return state.nameModel
  }
  
export default connect(mapStateToProps)(HeaderUserName)
