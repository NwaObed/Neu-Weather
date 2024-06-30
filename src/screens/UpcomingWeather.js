import React from 'react'
import { 
    FlatList, 
    SafeAreaView, 
    StyleSheet, 
    StatusBar, 
    ImageBackground
} from 'react-native'
import ListItem from '../components/ListItems'


const UpcomingWeather = ( {weatherData} ) => {
    const renderItem = ({ item }) => (
        <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max}/>
    )
    const {container, image} = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/upcoming-weather-image.jpg')}
                style={image}>
                <FlatList 
                    data={weatherData}
                    renderItem={renderItem}/>
            </ImageBackground> 
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'orange'
    }   ,
    image: {
        flex:1
    }
})
export default UpcomingWeather