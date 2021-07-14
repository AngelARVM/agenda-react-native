import * as React from 'react'
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'

export default function CustomButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.view}>
                <Text style={styles.text}>X</Text>
            </View>
        </TouchableOpacity>
    )
}

const dimension = 130

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#f00',
        width: 20,
        height: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        margin: 6
    },
    text: {
        color: '#fff'
    }
})