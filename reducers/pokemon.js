const types = {
    LOADING: "LOADING",
    SUCCESS: "SUCCESS",
    FAILURE: "FAILURE"
}

export const pokemonActionCreator = {
    loading: () => ({ type: types.LOADING }),
    success: (pokemons, page) => ({ type: types.SUCCESS, payload: { pokemons, page } }),
    failure: () => ({ type: types.FAILURE })
}

export const initialPokemonState = {
    loading: false,
    error: false,
    pokemons: [],
    page: 1
}

export const pokemonReducer = (state, action) => {
    switch (action.type) {
        case types.LOADING:
            return { ...state, loading: true, error: false }
        case types.SUCCESS:
            return {
                loading: false,
                error: false,
                pokemons: [...state.pokemons, ...action.payload.pokemons],
                page: state.page + 1
            }
        case types.FAILURE:
            return {...state, loading: false, error: true}
    }
}