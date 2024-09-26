import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import "react-native-gesture-handler";
export default function Index() {
  const navigation = useNavigation();
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleRegisterPress = () => {
    navigation.navigate("Register" as never);
  };

  const handleLoginPress = () => {
    navigation.navigate("TermsAndCondition" as never)
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/stacked-logo.png")}
        style={styles.brandIcon}
      />
      <View style={styles.inputContainer}>
        <Icon name="mail-outline" size={20} style={styles.inputIcon} />
        <TextInput
          placeholder="Email Address"
          style={styles.input}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock-closed-outline" size={20} style={styles.inputIcon} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Icon
            name={passwordVisible ? "eye-off-outline" : "eye-outline"}
            size={20}
            color="#ccc"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.rememberMeContainer}>
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setRememberMe(!rememberMe)}
        >
          <Icon
            name={rememberMe ? "checkmark-circle" : "ellipse-outline"}
            size={20}
            color={rememberMe ? "#000" : "#ccc"}
          />
        </TouchableOpacity>
        <Text style={styles.rememberMeText}>Remember me ?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLoginPress} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={handleRegisterPress}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.forgotPassword}>Forgot Password ?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  brandIcon: {
    height: 230,
    width: 300,
    marginBottom: 40,
  },
  inputIcon: {
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    width: "100%",
    padding: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    flex: 1,
  },
  rememberMeContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  checkboxContainer: {
    marginRight: 10,
  },
  rememberMeText: {},
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 20,
  },
  button: {
    flex: 1,
    backgroundColor: "#004EDB",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  forgotPassword: {
    color: "#007BFF",
    fontSize: 16,
    marginTop: 10,
  },
  buttonRegister: {
    flex: 1,
    backgroundColor: "#0276FE",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
});
