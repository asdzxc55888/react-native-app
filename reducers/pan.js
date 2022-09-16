const types = {
    START: 'START',
    MOVE: 'MOVE',
    END: 'END'
}

export const actionCreators = {
    start: () => ({ type: types.START }),
    move: (point) => ({ type: types.MOVE, payload: point }),
    end: (point) => ({ type: types.END, payload: point })
}

export const initialPanState = {
    dragging: false,
    initialY: 50,
    initialX: 50,
    offsetY: 0,
    offsetX: 0,
}

export function panReducer(state, action) {
    switch (action.type) {
        case types.START:
            return { ...state, dragging: true }
        case types.MOVE: {
            const { x, y } = action.payload;
            return {
                ...state,
                offsetX: x,
                offsetY: y
            }
        }
        case types.END: {
            const { x, y } = action.payload;
            return {
                ...initialPanState,
                initialX: state.initialX + x,
                initialY: state.initialY + y,
            }
        }
    }
}
