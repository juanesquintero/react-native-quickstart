import {
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  Pressable,
} from "react-native";
import icon from "../assets/icon.png";
import Constants from "expo-constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Main() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Image
        source={icon}
        style={{ width: 100, height: 100 }}
        alt="I'm an Image"
      ></Image>
      <Text style={{ padding: 15 }}>Quick Start</Text>
      <View style={{ margin: 30 }}>
        {/* NATIVE */}
        {/* Not costumizable */}
        <Button
          title="Press me!"
          color="red"
          onPress={() => {
            alert("I'm a native button");
          }}
        />
      </View>
      {/* CORE (Future-Deprecated) */}
      {/* costumizable */}
      <TouchableHighlight
        style={{ padding: 10, borderWidth: 1.5, borderRadius: 100 }}
        underlayColor={"#09f"}
        onLongPress={() => {
          alert("I'm a Touchable");
        }}
      >
        <Text>Long press me!</Text>
      </TouchableHighlight>
      {/* CORE (Recommended) */}
      {/* costumizable */}
      <Pressable
        style={({ pressed }) => ({
          padding: 10,
          marginTop: 30,
          width: 110,
          borderWidth: 1.5,
          borderColor: "green",
          borderRadius: 10,
          backgroundColor: pressed ? "green" : "white",
        })}
        onPressIn={() => {
          alert("Hello, I'm a Pressable");
        }}
        onPressOut={() => {
          alert("Bye Pressable");
        }}
      >
        {({ pressed }) => (
          <Text
            style={{
              color: pressed ? "white" : "black",
              fontSize: pressed ? 20 : 16,
            }}
          >
            Press Me & Unpress Me
          </Text>
        )}
      </Pressable>
      <Text
        style={{
          marginTop: 30,
        }}
      >
        OS Version: {Constants.systemVersion}
        Device Name: {Constants.deviceName}
      </Text>
    </View>
  );
}
