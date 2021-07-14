import * as React from 'react'
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import CustomButton from './CustomButton'

export default function card({imgUrl, nombre, numero, onPress}) {
    const defaultImage = 'https://reactnative.dev/docs/assets/p_cat2.png'
    return (
        <View style={styles.view}>
            <View style={styles.btn}>
                <CustomButton onPress={() => onPress()}/>
            </View>
            <TouchableOpacity>
                <Image 
                    source={{
                        uri: (imgUrl ? imgUrl : defaultImage),
                    }}
                    style={styles.avatar}
                />
                <Text 
                    style={styles.nombre}
                    
                >
                    {nombre ? nombre : 'Desconocido'}
                </Text>
                <Text 
                    style={styles.numero}
                >
                    {numero ? numero : 'Desconocido'}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const dimension = 130

const styles = StyleSheet.create({
    view:{
        width: dimension * 1.5,
        height: dimension * 2.2,
        marginVertical: 5,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.4,
        shadowRadius: 20,
        borderRadius: 8,
    },
    avatar: {
        alignSelf: "center",
        width: dimension,
        height: dimension,
        margin: 10,
        shadowOffset: { width: 6, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },
    nombre: {
        marginBottom: 12,
        alignSelf: "center",
        textAlign: "center",
        fontSize: 30,
        fontWeight: 400,
        lineHeight: 30,
    },
    numero: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 300
    },
    btn: {
        alignItems: 'flex-end',
        margin: 0
    },
})