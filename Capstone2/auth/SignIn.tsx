import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  Alert,
} from "react-native";
import { useState } from "react";

export default function SignIn() {
  // STATES (REAL LOGIC)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // SIGN IN HANDLER (WORKING)
  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert("Error", "Email and password are required.");
      return;
    }

    // CAPSTONE LOGIC PLACEHOLDER
    Alert.alert(
      "Sign In Data",
      `Email: ${email}\nPassword: ${password}\nRemember Me: ${rememberMe}`,
    );

    // 🔜 Future:
    // fetch("API_URL/login", { method: "POST", body: ... })
  };

  return (
    <View style={styles.body}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require("../assets/sorsu.png")} style={styles.logo} />
      </View>

      <Text style={styles.title}>Sign In</Text>

      {/* Form */}
      <View style={styles.fields}>
        {/* Email */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        {/* Password */}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Remember Me Checkbox */}
        <Pressable
          style={styles.checkboxRow}
          onPress={() => setRememberMe(!rememberMe)}
        >
          <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
            {rememberMe && <Text style={styles.check}>✓</Text>}
          </View>
          <Text style={styles.checkboxLabel}>Remember me</Text>
        </Pressable>

        {/* Sign In Button */}
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleSignIn}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
      </View>

      <StatusBar style="light" />
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

  logoContainer: {
    alignItems: "center",
    marginBottom: 15,
  },

  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginBottom: 25,
  },

  fields: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
  },

  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: "#800000",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },

  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: "#800000",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  checkboxChecked: {
    backgroundColor: "#800000",
  },

  check: {
    color: "white",
    fontWeight: "bold",
  },

  checkboxLabel: {
    fontSize: 16,
  },

  button: {
    backgroundColor: "#800000",
    paddingVertical: 12,
    borderRadius: 15,
    alignItems: "center",
  },

  buttonPressed: {
    opacity: 0.85,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
