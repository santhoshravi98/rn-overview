import React, { useState } from 'react'
import { TextInput, View, Button, StyleSheet, Modal } from 'react-native'
const GoalInput = (props) => {
    const [goals, setGoals] = useState('');

    const textChangeHandler = (text) => {
        setGoals(text);
    }

    const clearInputandAddListHandler = () => {
        props.buttonClickHandler(goals);
        setGoals('');
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.GoalsView}>
                <TextInput placeholder="Goals App" style={styles.GoalsInput} onChangeText={textChangeHandler} value={goals} />
                <View style={styles.BtnView}>
                <Button  title="Add" onPress={clearInputandAddListHandler} />
                <Button title="Cancel" onPress={() => props.buttonClickHandlerForModal(false)} />
                </View>
            </View>
        </Modal>);
};
const styles = StyleSheet.create({
    GoalsView: {
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1
    },
    GoalsInput: {
        width: '90%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 20,
        marginBottom: 30,
        marginLeft:2
    },
    BtnView : {
        flexDirection:'row',
        justifyContent:'space-around',
        width:'60%',
        alignContent:'center'
    }
})
export default GoalInput;