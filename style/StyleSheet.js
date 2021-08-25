import { Dimensions } from "react-native"

export default {
    container: {
        flex: 1,
        flexDirection: 'column',
        textAlign: 'center'
    },
    titleStyle: {
        color: 'darkblue',
        fontSize: 23,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 16,
        color: '#47B1E1',
        padding: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    icon: {
        fontSize: 60,
        color: '#47B1E1',
        textAlign: 'center',
        marginTop: 20
    },
    image: {
        width: Dimensions.get("window"),
        height: 70,
        marginTop: 20
    },
    text: {
        padding: 15
    },
    // colors
    blueLight: '#7abaf9',
    blueDark: '#6767ac',
    invisible: 'rgba(52, 52, 52, 0)',

    // elements
    views: {
        marginVertical: 20
    },
    largeContainer: {
        margin: 10
    },
    thinContainer: {
        margin: 30
    },
    card: {
        backgroundColor: '#bcbcbe',
        borderWidth: 0,
        borderRadius: 20
    },

    // search
    searchBtn: {
        color: 'rgba(56, 172, 236, 1)'
    },

    // weatherresluts
    temperature: {
        color: '#c3c4c6',
        marginHorizontal: 5,
        fontStyle: 'italic',
    },
}