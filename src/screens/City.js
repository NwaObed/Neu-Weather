import React from 'react'
import {
    SafeAreaView, 
    Text, 
    StyleSheet, 
    ImageBackground, 
    StatusBar,
    View
} from 'react-native'
import moment from 'moment'
import IconText from '../components/IconText';

const City = ({ weatherData }) => {
    const {
        container,
        imageLayout,
        cityName, 
        cityText, 
        countryName,
        populationWrapper,
        populationText,
        rowLayout,
        riseSetText,
        riseSetWrapper
    } = styles

    const { name, country, population, sunrise, sunset } = weatherData
    return (
        <SafeAreaView style={container}>
            <ImageBackground 
                source={require('../../assets/city-vector-image.png')}
                style={imageLayout}
            >
                <Text style={[cityName, cityText]}>{name}</Text>
                <Text style={[countryName, cityText]}>{country}</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText 
                        iconName={'user'} 
                        iconColor={'black'} 
                        bodyText={`Population: ${population}`}
                        bodyTextStyles={populationText}
                    />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText 
                        iconName={'sunrise'} 
                        iconColor={'black'} 
                        bodyText={moment(sunrise).format('h:mm:ss a')}
                        bodyTextStyles={riseSetText}
                    />
                    <IconText 
                        iconName={'sunset'} 
                        iconColor={'black'} 
                        bodyText={moment(sunset).format('h:mm:ss a')}
                        bodyTextStyles={riseSetText}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00008b'
    },
    imageLayout: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    cityName: {
        fontSize: 40
    },
    countryName: {
        fontSize: 30
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'black'
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'black'
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'black'
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default City