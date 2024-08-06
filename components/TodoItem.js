import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { circle } from "react-native/Libraries/Animated/Easing";

function TodoItem({ id, text, done }) {
    return (
        <View style={styels.item}>
            <View style={[styels.circle, done && styels.filled]}>
                {done && (
                    <Image source={require('../assets/icons/check_white/check_white.png')}></Image>
                )}
            </View>
            <Text style={styels.text}>{text}</Text>
        </View>
    )
}

const styels = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center'
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderColor: '#26a69a',
        borderWidth: 1,
        marginRight: 16
    },
    filled: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#26a69a'
    },
    text: {
        flex: 1,
        fontSize: 16,
        color: '#212121',
    },
    lineThrough: {
        color: '#9e9e9e',
        textDecorationLine: 'line-through'
    }
});

export default TodoItem;