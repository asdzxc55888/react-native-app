import React from "react";
import { Dimensions, FlatList, Image, TouchableHighlight } from "react-native";

import { formatPhotoUri } from "../api/picsum"

export default function PhotoGrid({ photos, numColumns, onEndReached }) {
    const { width } = Dimensions.get('window');

    const size = width / numColumns;

    return (
        <FlatList
            data={photos}
            keyExtractor={(item) => item.id}
            numColumns={numColumns}
            onEndReached={onEndReached}
            renderItem={({ item }) => (
                <TouchableHighlight
                    onPress={()=>console.log(item.id)}
                >
                    <Image
                        source={{
                            width: size,
                            height: size,
                            uri: formatPhotoUri(item.id, size, size),
                        }}
                    />
                </TouchableHighlight>

            )}
        />
    )
}