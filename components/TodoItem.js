import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { circle } from "react-native/Libraries/Animated/Easing";

function TodoItem({ id, text, done, onToggle, onRemove }) {
    const remove = () => {
        Alert.alert(
            '삭제',
            '정말로 삭제하시겠습니까?',
            [{ text: '취소', onPress: () => { }, style: 'cancel' },
            {
                text: '삭제',
                onPress: () => {
                    onRemove(id);
                },
                style: 'destructive',
            }
            ],
            {
                cancelable: true,
                onDismiss: () => { },
            }
        );
    };

    return (
        <View style={styels.item}>
            <TouchableOpacity onPress={() => onToggle(id)}>
                <View style={[styels.circle, done && styels.filled]}>
                    {done && (
                        <Image source={require('../assets/icons/check_white/check_white.png')}></Image>
                    )}
                </View>
            </TouchableOpacity>
            <Text style={[styels.text, done && styels.lineThrough]}>{text}</Text>
            {done ? (
                <TouchableOpacity onPress={remove}>
                    <Icon name="delete" size={32} color="red"></Icon>
                </TouchableOpacity>
            )
                : (
                    <View style={styels.removePlaceholder}></View>
                )
            }
        </View >
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
    },
    removePlaceholder: {
        width: 32,
        height: 32,
    }
});

export default TodoItem;