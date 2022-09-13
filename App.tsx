import { Button, StyleSheet, Text, View, PermissionsAndroid } from 'react-native'
import React from 'react'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker'

const App = () => {

  const galeriyaHandler = async () => {

    try {
      const grantedstorage = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
      if (grantedstorage === PermissionsAndroid.RESULTS.GRANTED) {
        const res = await launchImageLibrary({
          mediaType: "photo"
        })
      }
    } catch (error) {
      console.log(error)

    }
  }
  const cameraHandler = async () => {

    try {
      const grantedcamera = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
      if (grantedcamera === PermissionsAndroid.RESULTS.GRANTED) {
        const res = await launchCamera({
          mediaType: "photo",
          cameraType: "back"
        })
        console.log(res)
      }
    } catch (error) {
      console.log(error)

    }
  }



  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "white"
      }}
    >
      <Text
        style={{
          color: "#000",
          fontSize: 20
        }}
      >App</Text>

      <Button
        title="galeriyaga ut"
        onPress={galeriyaHandler}
      />

      <Button
        title="cameraga ut"
        onPress={cameraHandler}
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})