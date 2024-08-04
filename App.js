/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import DateHead from './components/DateHead';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';

function App() {
  const today = new Date();

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        {/**behavior={Platform.OS === 'ios' ? 'padding' : undefined} */}
        <KeyboardAvoidingView
          behavior={Platform.select({ ios: 'padding', android: undefined })} /* Platform.OS와 삼항연산자 대신 Platform.select 사용하기 */
          style={styles.avoid}>
          <DateHead date={today} />
          <Empty />
          <AddTodo />
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
