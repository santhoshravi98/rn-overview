import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import GoalItem from '../rn-overview/Components/GoalItem'
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native';
import GoalInput from '../rn-overview/Components/GoalInput'

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [showModal, setModal] = useState(false);
  const buttonClickHandler = (goals) => {
    setGoalsList(goalsList => [...goalsList,
    {
      key: Math.random().toString(),
      value: goals
    }])
    setModal(false);
  }
  const listItemTouchHandler = (key) => {
    setGoalsList(goalsList => {
      return (goalsList.filter((e) => e.key != key))
    });
  };

  const buttonClickHandlerForModal = (openModal) => {
    setModal(openModal);
  }

  return (
    <View style={styles.root}>
      <Button title="Add List" onPress={() => buttonClickHandlerForModal(true)} />
      <GoalInput buttonClickHandlerForModal = {buttonClickHandlerForModal} visible={showModal} buttonClickHandler={buttonClickHandler} />
      <ScrollView>
        {goalsList.map((goal) => {
          return <GoalItem key={goal.key} id={goal.key} value={goal.value} listItemTouchHandler={listItemTouchHandler} />
        })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    padding: 60
  }
})