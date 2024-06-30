import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Feather} from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherTypes'
import moment from 'moment'

const ListItem = (props) => {
    const {dt_txt, min, max, condition} = props
    const { date, temp, item, dateTextWrapper } = styles
    return (
        <View style={item}>
            <Feather name={weatherType[condition]?.icon} size={50} color={'black'}/>
            <View style={dateTextWrapper}>
                <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
                <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
            </View>
            <View style={dateTextWrapper}>
                <Text >{`Min: ${Math.round(min)}°`}</Text>
                <Text >{`Max: ${Math.round(max)}°`}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'moccasin'
    },
    temp: {
        color: 'black',
        fontSize: 20
    },
    date: {
        color: 'black',
        fontSize: 15
    },
    dateTextWrapper: {
        flexDirection: 'column'
    }
})
export default ListItem