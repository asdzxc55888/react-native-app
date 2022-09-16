import React, { useEffect, useReducer } from "react";
import { Text, View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import PokemonCard from "../components/PokemonCard";
import { getPokemons } from "../api/pokemon";
import { pokemonReducer, initialPokemonState, pokemonActionCreator } from "../reducers/pokemon";

export default function Pokedex() {
    const [state, dispatch] = useReducer(pokemonReducer, initialPokemonState);
    const { loading, error, pokemons, page } = state;

    const fetchPokemons = async () => {
        dispatch(pokemonActionCreator.loading());

        try {
            const nextPokemon = await getPokemons(page)
            dispatch(pokemonActionCreator.success(nextPokemon, page))
        } catch (e) {
            dispatch(pokemonActionCreator.failure())
        }
    }

    useEffect(() => {
        fetchPokemons();
    }, [])

    if (pokemons.lenght === 0) {
        if (loading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator animating={true} />
                </View>
            )
        } else if (error) {
            return <Text>Something Error!</Text>
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={pokemons}
                keyExtractor={(item) => item.id}
                onEndReached={() => fetchPokemons()}
                renderItem={({ item }) => <PokemonCard pokemon={item} />}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})