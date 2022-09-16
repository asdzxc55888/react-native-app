import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, FlatList } from "react-native";

// const pokemon = {
//     id: 132,
//     name: "ditto",
//     sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
//     type: ["normal"]
// }

export default function PokemonCard({ pokemon }) {
    const { width } = Dimensions.get('window');

    const size = width / 3;

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    width: size,
                    height: size,
                    uri: pokemon.sprite,
                }}
            />
            <View>
                <Text style={styles.text}>{`No.${pokemon.id} ${pokemon.name}`}</Text>

                <FlatList
                    style={styles.type_container}
                    data={pokemon.types}
                    renderItem={({ item }) => {
                        return (<Text style={{ backgroundColor: colorMap[item], ...styles.type_text }}>{item}</Text>)
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#66B2FF",
        marginBottom: 2,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flex: 1,
        borderColor: "#000000",
        borderWidth: 1
    },
    text: {
        fontSize: 24,
        margin: 8,
    },
    type_container: {
        flexDirection: "row",
    },
    type_text: {
        fontSize: 18,
        color: "#FFFFFF",
        margin: 8,
        padding:4,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#FFFFFF",
        overflow:'hidden'
    },
    image: {
        backgroundColor: '#CCCCCC',
    }
});

const colorMap = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
}