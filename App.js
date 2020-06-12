import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from './Components/Header';
import MyTextInput from './Components/MyTextInput';
import MyList from './Components/MyList';


const App = () => {


  //Hooks 
  const [getTodo, setTodo] = useState('');
  const [getTodoList, setTodoList] = useState([]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.screen}>
        <Header title="Todo App" />
        <MyTextInput setTodo={setTodo} getTodo={getTodo} setTodoList={setTodoList} getTodoList={getTodoList} />
        <MyList style={{ alignItems: 'center', justifyContent: 'center', }} getTodoList={getTodoList} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  screen: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5F0E7'
  },

});

export default App;
