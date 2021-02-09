import React, { Component } from 'react'
import { Button } from 'react-native'
import { connect } from 'react-redux'



class addCityBtn extends React.Component {

    constructor(props) {
        super(props)
    };

    handleSubmit() {

        const { dispatch } = this.props;

        dispatch({
            type: 'citiesModel/addCity',
            payload: {
                city: this.props.searchedCity
            }
        })
    };

    render() {
        return (
            <Button
                type="clear"
                onPress={() => this.handleSubmit()}
                title="+ Sauvegarder la ville" />
        );
    }
}

export default connect(({ citiesModel }) => ({ citiesModel }))(addCityBtn);