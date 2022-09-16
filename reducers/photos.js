const photoTypes = {
    LOADING: "LOADING",
    SUCCESS: "SUCCESS",
    FAILURE: "FAILURE"
}

export const photoActionCreator = {
    loading: () => ({ type: photoTypes.LOADING }),
    success: (photos, page) => ({ type: photoTypes.SUCCESS, payload: { photos, page } }),
    failure: () => ({ type: photoTypes.FAILURE })
}

export const initialPhotoState = {
    loading: false,
    error: false,
    photos: [],
    nextPage: 1
}

export const photoReducer = (state, action) => {
    switch (action.type) {
        case photoTypes.LOADING:
            return {...state, loading: true, error: false}
        case photoTypes.SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                photos: [...state.photos, ...action.payload.photos],
                nextPage: state.nextPage + 1
            }
        case photoTypes.FAILURE:
            return {...state, loading: false, error: true}
            
    }
}