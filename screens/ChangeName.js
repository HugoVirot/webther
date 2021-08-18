import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import { Button } from 'react-native-elements';
import { connect } from 'react-redux'
import Header from '../components/Header'

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
            <Header />
            <TextInput
                onChangeText={(text) => setNameInput(text)}
                value={nameInput}
                style={{ borderColor: 'gray', margin: 30, flex: 0.9, fontSize: 20 }}
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