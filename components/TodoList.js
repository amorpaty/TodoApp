import React from "react";
import { FlatList, View, Text, StyleSheet } from 'react-native';
import TodoItem from "./TodoItem";

function TodoList({ todos }) {
    return (
        <FlatList
            ItemSeparatorComponent={() => <View style={styels.separator}></ View>}
            style={styels.flex}
            data={todos}
            renderItem={({ item }) => (
                <TodoItem id={item.id} text={item.text} done={item.done}></TodoItem>
            )}
            keyExtractor={item => item.id.toString()}
        >
        </FlatList >
    )
}

const styels = StyleSheet.create({
    list: {
        flex: 1,
    },
    separator: {
        backgroundColor: '#e0e0e0',
        height: 1
    }
});

export default TodoList;