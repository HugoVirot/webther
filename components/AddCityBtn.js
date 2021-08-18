import React from 'react'
import { Button } from 'react-native'
import { connect } from 'react-redux'

const addCityBtn = props => {

    function handleSubmit() {

        const { dispatch } = props;

        dispatch({
            type: 'citiesModel/addCity',
            payload: {
                city: props.searchedCity
            }
        })
    };

    return (
        <Button
            type="clear"
            onPress={() => handleSubmit()}
            title="+ Sauvegarder la ville" />
    );
}

export default connect(({ citiesModel }) => ({ citiesModel }))(addCityBtn);