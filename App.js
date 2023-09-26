import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Notifications from 'expo-notifications';



Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


export default function App() {

  const notificationHandler = ()=>{
    console.log("hello 1")
    Notifications.scheduleNotificationAsync({
      content : {
        title : "local notification",
        body : "body of the notifications",
        data : { username : "ram_kumar"}
      },
      trigger : {
        seconds : 5,
      }
    })
    console.log("hello 2")

  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title='Notification' onPress = {notificationHandler} />
      <Text>testing..</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
