import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, Animated} from 'react-native';

const Animacion2 = () => {

const [ animacion ] = useState( new Animated.Value(0)) //El paréntesis es el valor inicial

useEffect(() => {
    Animated.timing(
        animacion, {
            toValue: 450, //Valor al que llega desde Animated.Value
            duration: 1000 //Lo que tarda en llegar
        }
    ).start(); //Iniciar la animación
}, [])


    return(
     <Animated.View
     style={[
        styles.caja,
        {
            width: animacion,
            height: animacion
        }
     ]}>
    </Animated.View>
    )
}

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})

export default Animacion2;