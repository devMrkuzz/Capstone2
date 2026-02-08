import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

export default function SignIn() {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Sign In</Text>

      {/* Fields */}
      <View style={styles.fields}>
        {/* Email field */}
        <Text style={styles.email}>Email</Text>
        <TextInput style={styles.InputField} placeholder="Enter your email" />

        {/* Password field */}
        <Text style={styles.email}>Password</Text>
        <TextInput
          style={styles.InputField}
          placeholder="Enter your password"
          secureTextEntry
        />

        {/* Sign In Button */}
        <Pressable onPress={() => alert("Sign In Pressed")}>
          <Text style={styles.SignIn}>Sign In</Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#800000",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginBottom: 30,
  },

  fields: {
    backgroundColor: "white",
    padding: 20,
    borderWidth: 1,
    borderRadius: 15,
  },

  email: {
    fontSize: 18,
    fontWeight: "500",
    paddingBottom: 5,
  },

  InputField: {
    borderWidth: 1,
    borderColor: "#800000",
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },

  SignIn: {
    backgroundColor: "#800000",
    color: "white",
    padding: 10,
    borderRadius: 15,
    fontSize: 18,
    textAlign: "center",
  },
});
