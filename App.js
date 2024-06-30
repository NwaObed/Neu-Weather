import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { NavigationContainer} from '@react-navigation/native'
import Tabs from './src/components/Tabs';
import { useGetWeather } from './hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'

import { WEATHER_API_KEY } from '@env'
import UpcomingWeather from './src/screens/UpcomingWeather';

const App = () => {
  const [loading, error, weather] = useGetWeather()
  
  if (weather && weather.list && !loading) {
    console.log(weather)
    return (
      <NavigationContainer >
        <Tabs weather={weather}/>
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ): (
        <ActivityIndicator size={'large'} color={'blue'}/> 
      )}
    </View>
    // <ErrorItem />
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})
export default App