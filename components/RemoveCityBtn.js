import React from 'react'
import { Button } from 'react-native'
import { connect } from 'react-redux'



const RemoveCityBtn = props => {

    function handleRemove() {

        const { dispatch } = props;

        dispatch({
            type: 'citiesModel/removeCity',
            payload: {
                city: props.searchedCity
            }
        })
    };

    return (
        <Button
            type="clear"
            onPress={() => handleRemove()}
            title="- Retirer la ville"
            color="red"
        />
    );
}

const mapStateToProps = (state) => {
    return state.citiesModel
  }
  
export default connect(mapStateToProps)(RemoveCityBtn)

//export default connect(({ citiesModel }) => ({ citiesModel }))(RemoveCityBtn);