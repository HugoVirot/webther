import React from 'react'
import { Button } from 'react-native'
import { connect } from 'react-redux'

const addCityBtn = props => {

    function addCity() {

        const { dispatch } = props;

        dispatch({
            type: 'citiesModel/addCity',
            payload: {
                city: props.searchedCity
            }
        })

        console.log(props.cities)
    };

    return (
        <Button
            type="clear"
            onPress={() => addCity()}
            title="+ Sauvegarder la ville" />
    );
}


const mapStateToProps = (state) => {
    return state.citiesModel
}

export default connect(mapStateToProps)(addCityBtn)