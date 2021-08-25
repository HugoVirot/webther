import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import { Button } from 'react-native-elements';
import { connect } from 'react-redux'
import Header from '../components/Header'

const ChangeName = (props) => {

    // on stocke le nouveau nom dans le state via la fonction dispatch, qui modifie le nameModel
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
                placeholder="Entrez votre nom"
                autoFocus={true}
            />

            <Button
                color="darkblue"
                onPress={() => handleSubmit()}
                title="Valider" />
        </View>
    )
}

const mapStateToProps = (state) => {
    return state.nameModel
  }
  
export default connect(mapStateToProps)(ChangeName)

// autre syntaxe : 
// export default connect((nameModel) => ({ nameModel }))(ChangeName);