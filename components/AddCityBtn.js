import React from 'react'
import { Button, RefreshControl } from 'react-native'
import { connect } from 'react-redux'


const addCityBtn = props => {

    // scroll refresh
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    function handleSubmit() {

        const { dispatch } = props;

        dispatch({
            type: 'citiesModel/addCity',
            payload: {
                city: props.searchedCity
            }
        })
        setRefreshing(true);
    };

    return (
        <Button
            type="clear"
            onPress={() => handleSubmit()}
            title="+ Sauvegarder la ville" />
    );
}

export default connect(({ citiesModel }) => ({ citiesModel }))(addCityBtn);