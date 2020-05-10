import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, Animated, View} from 'react-native';

const Animacion4 = () => {

const [ animacion ] = useState( new Animated.Value(0)) //El paréntesis es el valor inicial

useEffect(() => {
    Animated.timing(
        animacion, {
            toValue: 360, //Valor al que llega desde Animated.Value
            duration: 500 //Lo que tarda en llegar
        }
    ).start(); //Iniciar la animación
}, [])

const interpolacion = animacion.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg']
})

const estiloAnimacion = {
    transform: [{ rotate: interpolacion}]
}

    return(
     <View>
        <Animated.View style={[styles.texto, estiloAnimacion]}></Animated.View>
    </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})

export default Animacion4;