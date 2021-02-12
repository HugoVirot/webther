import React, { useEffect } from 'react'
import { Button, RefreshControl } from 'react-native'
import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation';


const addCityBtn = props => {

    function handleSubmit() {

        const { dispatch } = props;

        dispatch({
            type: 'citiesModel/addCity',
            payload: {
                city: props.searchedCity
            }
        })
        // Navigation.push(props.componentId, {
        //     component: {
        //       name: 'Search',
        //     }})
    };


    return (
        <Button
            type="clear"
            onPress={() => handleSubmit()}
            title="+ Sauvegarder la ville" />
    );
}

export default connect(({ citiesModel }) => ({ citiesModel }))(addCityBtn);