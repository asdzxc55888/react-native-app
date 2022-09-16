import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Animated } from "react-native";
import usePanResponder from "../hooks/usePanResponder";

export default function PanResponder() {
    const [state, panHandlers] = usePanResponder()

    const { dragging, initialY, initialX, offsetY, offsetX } = state

    const translation = useRef(new Animated.ValueXY({ x: initialX + offsetX, y: initialY + offsetY }))

    useEffect(() => {
        if (dragging) {
            const animation = Animated.timing(translation.current, {
                toValue: { x: initialX + offsetX, y: initialY + offsetY },
                useNativeDriver: true,
                duration:3
            })
            animation.start()
        }
    }, [dragging, offsetY, offsetX])

    const style = {
        backgroundColor: dragging ? '#2DC' : '#0BA',
        transform: [
            { translateX: translation.current.x },
            { translateY: translation.current.y },
        ],
    }

    return (
        <View>
            <Animated.View
                {...panHandlers}
                style={[styles.square, style]}
            >
                <Text style={styles.text}>DRAG ME</Text>
            </Animated.View>
            {/* <View
                {...panHandlers}
                style={[styles.square, style]}
            >
                <Text style={styles.text}>DRAG ME</Text>
            </View> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    square: {
        position: 'absolute',
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
})
