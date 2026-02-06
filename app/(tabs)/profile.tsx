import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View>
      <Text>Profile</Text>
      <Button title="Settings" onPress={() => router.push("/settings")} />
    </View>
  );
}