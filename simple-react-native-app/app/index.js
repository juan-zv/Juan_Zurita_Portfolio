import React, {useState} from "react";
import { StyleSheet, Button, View, Text, Alert, Image, Switch, TextInput, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Camera, CameraType } from 'expo-camera';

export default function Page() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
    }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
      );
    }
    
  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }
    

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Simple React Native App</Text>
          <Text style={styles.subtitle}>This is the first page of my app.</Text>
          <Text style={styles.subtitle}>I plan on showing basic features and components from React Native for the user to interact with.</Text>
        </View>
      
        <View style={styles.container}>
          <Text style={styles.subtitle}>This is a button:</Text>
          <Button
            onPress={() => Alert.alert('Simple Button pressed')}
            title="This is a button"
            color="#841584"
            accessibilityLabel="Press button to display alert"
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.subtitle}>This is an image from the web:</Text>
          <Image
            style={{width: 350, height: 350}}
            source={{uri: 'https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=1200:*'}}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.subtitle}>This is a switch:</Text>
          <Switch
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.subtitle}>This is a text input:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeText}
            value={number}
            placeholder="Placeholder for text input"
          />
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Placeholder for numeric text input"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.subtitle}>This is a camera use:</Text>
          <View style={styles.cameraContainer}>
            <Camera style={styles.camera} type={type}>
              <View style={styles.cameraContainer}>
                <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                  <Text style={styles.buttonText}>Flip Camera</Text>
                </TouchableOpacity>
              </View>
            </Camera>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  cameraContainer: {
    height: 800,
    maxWidth: 960,
    width: 400,
  },
  button: {
    color: "#FFFFFF",
    backgroundColor: "#38434D",
    padding: 10,
    borderRadius: 25,    
    alignSelf: 'center',
    margin: 10,
    marginTop: 700,
  },
  buttonText: {
    color: "#FFFFFF"
  }
});
