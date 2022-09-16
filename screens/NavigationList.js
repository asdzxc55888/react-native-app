import React, { useRef } from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";

const screens = [
    { id: 1, name: 'PanResponder' },
    { id: 2, name: 'Gallery' },
    { id: 3, name: 'Pokedex' },
]

export default function NavigationList({ navigation, route }) {
    return (
        <View>
            <FlatList
                data={screens}
                keyExtractor={(item) => item.id}
                renderItem={
                    ({item}) =>
                    <Text 
                        onPress={()=>navigation.push(item.name)}
                        style={styles.row}
                        
                    >
                        {item.name}
                    </Text>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        padding: 15,
        marginBottom: 2,
        backgroundColor: 'skyblue',
    },
})