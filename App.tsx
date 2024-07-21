import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";
import icon from "./assets/icon.png";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={icon}
        style={{ width: 100, height: 100 }}
        alt="I'm an Image"
      ></Image>
      <Text>Quick Start</Text>

      <Button
        title="Native button"
        color="red"
        onPress={() => {
          alert("Native alert Notification");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
