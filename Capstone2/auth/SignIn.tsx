import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Pressable,
  TextInput,
  Image,
  Alert,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function SignIn() {
  const navigation = useNavigation<any>();

  // STATES
  const [idNumber, setIdNumber] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // 6-digit ID validation
  const isValidID = (id: string) => {
    const regex = /^[0-9]{6}$/;
    return regex.test(id);
  };

  const isFormValid = idNumber && password && isValidID(idNumber);

  // SIGN IN HANDLER
  const handleSignIn = () => {
    if (!idNumber || !password) {
      Alert.alert("Error", "ID and password are required.");
      return;
    }

    if (!isValidID(idNumber)) {
      Alert.alert("Invalid ID", "Please enter a valid 6-digit ID.");
      return;
    }

    Alert.alert("Sign In Data", `ID: ${idNumber}\nPassword: ${password}`);

    // 🔜 Future backend login
  };

  return (
    <View style={styles.body}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require("../assets/sorsu.png")} style={styles.logo} />
        <Text style={styles.title}>Welcome Back!</Text>
      </View>

      {/* Form */}
      <View style={styles.fields}>
        <Text style={styles.signin}>Sign In to continue</Text>

        {/* ID */}
        <TextInput
          style={styles.input}
          placeholder="Enter your 6-digit ID"
          value={idNumber}
          onChangeText={setIdNumber}
          keyboardType="numeric"
          maxLength={6}
        />

        {/* Password */}
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Forgot Password */}
        <Pressable onPress={() => alert("Reset password flow here")}>
          <Text style={styles.forgot}>Forgot password?</Text>
        </Pressable>

        {/* Sign In Button */}
        <Pressable
          style={[styles.button, !isFormValid && { backgroundColor: "#aaa" }]}
          onPress={handleSignIn}
          disabled={!isFormValid}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>

        <Text style={styles.dontHave}>Don’t have an account?</Text>

        {/* Sign Up Navigation */}
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.signup}>Sign Up</Text>
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
    color: "white",
    marginBottom: 25,
  },
  fields: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#800000",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#800000",
    paddingVertical: 12,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  signin: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20,
    color: "#800000",
    fontWeight: "bold",
  },
  forgot: {
    textAlign: "center",
    marginBottom: 20,
    textDecorationLine: "underline",
  },
  dontHave: {
    textAlign: "center",
    color: "#999",
  },
  signup: {
    textAlign: "center",
    padding: 12,
    backgroundColor: "#ebe8e8",
    color: "#800000",
    borderRadius: 15,
    marginTop: 10,
    fontWeight: "bold",
  },
});
