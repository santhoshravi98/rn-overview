import React from 'react'
import { Text, View, StyleSheet, TouchableNativeFeedback } from 'react-native'
const GoalItem = (props) => {
    return (
        <TouchableNativeFeedback onPress={() => props.listItemTouchHandler(props.id)}>
            <View style={styles.outputList}><Text>{props.value}</Text></View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    outputList: {
        margin: 10,
        color: 'green',
        padding: 10,
        backgroundColor: 'yellow',
        borderColor: 'black',
        borderWidth: 1
    }
})

export default GoalItem;