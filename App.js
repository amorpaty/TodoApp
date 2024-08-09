/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-community/async-storage';
import todosStorage from './storages/todosStorage';

import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';

function App() {
  const today = new Date();

  const [todos, setTodos] = useState([
    { id: 1, text: '작업환경 설정', done: true },
    { id: 2, text: '리액트 네이티브 기초 공부', done: false },
    { id: 3, text: '투두리스트 만들어보기', done: false },
  ]);

  /* 저장하기
     useEffect의 두번째 배열이 비었으면, 컴포넌트가 마운트될 때 딱 한 번만 함수가 호출된다.
     데이터를 불러와서 상태를 업데이트하는 코드를 작성할 때 꼭 기존의 todos를 저장하는 useEffect보다 상단 위치에 코드를 작성해야한다.
     useEffect는 등록된 순서대로 작동하기때문에 저장하는 useEffect가 먼저 호출되면 todos의 초깃값을 저장해버린 다음에 불러오기가 진행되므로
     초깃값만 불러오기 때문이다. 
  */
  useEffect(() => {
    todosStorage.get().then(setTodos).catch(console.error);

    /*
      async function load() {
        try {
          const rawTodos = await AsyncStorage.getItem('todos');
          const saveTodos = JSON.parse(rawTodos);
          setTodos(saveTodos);
        } catch (error) {
          console.log('Failed to load todos');
        }
      }

      load();
    */
  })

  /* 불러오기 */
  useEffect(() => {
    todosStorage.set(todos).catch(console.error);


    /*
    async function save() {
      try {
        await AsyncStorage.setItem('todos', JSON.stringify(todos))
      } catch (error) {
        console.log('Failed to save todos')
      }
    }

    save();
    console.log(todos)
    */
  }, [todos])

  const onInsert = text => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;

    const todo = {
      id: nextId,
      text,
      done: false,
    }
    setTodos(todos.concat(todo));
  }

  const onToggle = id => {
    const nextTodos = todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo,
    )
    setTodos(nextTodos);
  }

  const onRemove = id => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        {/**behavior={Platform.OS === 'ios' ? 'padding' : undefined} */}
        <KeyboardAvoidingView
          behavior={Platform.select({ ios: 'padding', android: undefined })} /* Platform.OS와 삼항연산자 대신 Platform.select 사용하기 */
          style={styles.avoid}>
          <DateHead date={today} />
          {todos.length === 0 ? <Empty /> : <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />}
          <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  avoid: {
    flex: 1,
  }
});

export default App;
