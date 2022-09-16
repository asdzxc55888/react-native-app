import { useReducer, useRef } from "react";
import { PanResponder } from "react-native";
import { actionCreators, initialPanState, panReducer } from "../reducers/pan";

export default function usePanResponder() {
    const [state, dispatch] = useReducer(panReducer, initialPanState)

    const handleStartShouldSetPanResponder = (e, gestureState) => true;

    const handlePanResponderGrant = (e, gestureState) => {
        dispatch(actionCreators.start());
    }

    const handlePanResponderMove = (e, gestureState) => {
        dispatch(actionCreators.move({ x: gestureState.dx, y: gestureState.dy }));
    }

    const handlePanResponderEnd = (e, gestureState) => {
        dispatch(actionCreators.end({ x: gestureState.dx, y: gestureState.dy }))
    }

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: handleStartShouldSetPanResponder,
            onPanResponderGrant: handlePanResponderGrant,
            onPanResponderMove: handlePanResponderMove,
            onPanResponderRelease: handlePanResponderEnd,
            onPanResponderTerminate: handlePanResponderEnd,
        })
    )

    return [state, panResponder.current.panHandlers]
}