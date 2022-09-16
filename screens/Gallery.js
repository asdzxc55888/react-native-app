import React, { useEffect, useReducer, useCallback } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

import { getList } from '../api/picsum'
import { photoActionCreator, initialPhotoState, photoReducer } from '../reducers/photos'
import PhotoGrid from '../components/PhotoGrid'

export default function App() {
  const [state, dispatch] = useReducer(photoReducer, initialPhotoState)

  const { photos, nextPage, loading, error } = state

  const fetchPhotos = useCallback(async () => {
    dispatch(photoActionCreator.loading())

    try {
      const nextPhotos = await getList(nextPage)
      dispatch(photoActionCreator.success(nextPhotos, nextPage))
    } catch (e) {
      dispatch(photoActionCreator.failure())
    }
  }, [nextPage])

  useEffect(() => {
    fetchPhotos()
  }, [])

  // We'll show an error only if the first page fails to load
  if (photos.length === 0) {
    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator animating={true} />
        </View>
      )
    }

    if (error) {
      return (
        <View style={styles.container}>
          <Text>Failed to load photos!</Text>
        </View>
      )
    }
  }

  return <PhotoGrid numColumns={3} photos={photos} onEndReached={fetchPhotos} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
