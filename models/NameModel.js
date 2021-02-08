
import AsyncStorage from '@react-native-async-storage/async-storage'

export const nameModel = {
    state: {
        userName: 'Hey',
    },

    reducers: {
        setName(state, userName) {
            return {...state, userName}
        },
    },
    effects: (dispatch) => ({
        async storeName(payload) {
            const { userName } = payload;

            if (userName !== '') {
                await AsyncStorage.setItem('userName', userName);

                const action = {
                    type: "nameModel/setName",
                    payload: { userName }
                };
                dispatch(action);
            }
        }
    })
}