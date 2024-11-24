## Information

A project has been developed with React Native Expo that tracks and reminds daily goals for React Native learners

SDK level ``51.0.0``

Create new project at https://console.firebase.google.com, used ``Firebase/Firestore`` in this project
## Package.json

```JSON

 "dependencies": {
    "@expo/metro-runtime": "~3.2.3",
    "@react-native-async-storage/async-storage": "^1.23.1",
    "@react-native-community/datetimepicker": "^8.0.1",
    "@react-navigation/native": "^6.1.18",
    "@react-navigation/native-stack": "^6.11.0",
    "expo": "^51.0.34",
    "expo-font": "~12.0.10",
    "expo-status-bar": "~1.12.1",
    "expo-updates": "~0.25.25",
    "firebase": "^10.13.1",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-native": "0.74.5",
    "react-native-safe-area-context": "4.10.5",
    "react-native-screens": "3.31.1",
    "react-native-svg": "^15.2.0",
    "react-native-svg-circular-progress": "^1.0.4",
    "react-native-ui-lib": "^7.30.0",
    "react-native-web": "~0.19.10"
  },
```

## explanation


The application works as follows; first it asks for login or signup and saves them to the database, then on the home screen it shows your todo cards if you have any, on the create screen it asks for a sentence, address and time for the event, when you click the create button this card is saved to your device with AsyncStorage, the reason we do this is to prevent users from straining the database.
## Screenshots from Application

<img src="https://github.com/AliArslan44/React-Native-Todo-App/blob/main/screenshots/Screenshot_20241122-214739_TodoApp.jpg?raw=true" width="400"/>
<img src="https://github.com/AliArslan44/React-Native-Todo-App/blob/main/screenshots/Screenshot_20241122-214746_TodoApp.jpg?raw=true" width="400"/>
<img src="https://github.com/AliArslan44/React-Native-Todo-App/blob/main/screenshots/Screenshot_20241122-214851_TodoApp.jpg?raw=true" width="400"/>
<img src="https://github.com/AliArslan44/React-Native-Todo-App/blob/main/screenshots/Screenshot_20241122-214913_TodoApp.jpg?raw=true" width="400"/>

