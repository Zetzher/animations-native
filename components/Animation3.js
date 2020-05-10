import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, Animated, View} from 'react-native';

const Animacion3 = () => {

const [ animacion ] = useState( new Animated.Value(14)) //El paréntesis es el valor inicial

useEffect(() => {
    Animated.timing(
        animacion, {
            toValue: 40, //Valor al que llega desde Animated.Value
            duration: 500 //Lo que tarda en llegar
        }
    ).start(); //Iniciar la animación
}, [])


    return(
     <View>
        <Animated.Text style={[styles.texto, { fontSize: animacion }]}>Animacion 1</Animated.Text>
    </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center'
    }
})

export default Animacion3;