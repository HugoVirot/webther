import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'
import { Button } from 'react-native-elements';
import { connect } from 'react-redux'
import HeaderUserName from './Header'

const User = (props) => {

    function handleSubmit() {
        dispatch({
            type: 'nameModel/storeName',
            payload: {
                userName: nameInput
            }
        })
        setNameInput("")
    }

    const [nameInput, setNameInput] = useState("");
    const { dispatch } = props;

    return (
        <View>
            <HeaderUserName />
            <TextInput
                onChangeText={(text) => setNameInput(text)}
                value={nameInput}
                style={{ borderColor: 'gray', marginBottom: 20, flex: 0.9, fontSize: 20 }}
                placeholder="Tapez votre nom"
                autoFocus={true}
            />

            <Button
                type="clear"
                onPress={() => handleSubmit()}
                title="Définir le nom d'utilisateur" />
        </View>
    )
}

export default connect((nameModel) => ({ nameModel }))(User);