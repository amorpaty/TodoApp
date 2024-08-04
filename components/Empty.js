import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';


function Empty() {
    const source = { uri: 'https://via.placeholder.com/150' }

    return (
        <View style={styles.block}>
            {/*
            <Image source={require('../assets/images/circle.png')}
                style={styles.image}
                resizeMode="contain"
            ></Image>
            */}
            {/* 외부 이미지 보여주기 
            <Image source={source}
                style={styles.image}
                resizeMode="contain"
            ></Image>
            */}
            <Image source={require('../assets/images/young_and_happy.png')}
                style={styles.image}
                resizeMode="contain"
            ></Image>
            <Text style={styles.description}>야호! 할일이 없습니다.</Text>
        </View >
    )
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        bacgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 300,
        height: 200,
    },
    description: {
        fontSize: 24,
        color: '#9e9e9e'
    }
})

export default Empty;
