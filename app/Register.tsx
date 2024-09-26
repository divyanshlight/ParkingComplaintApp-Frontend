import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

type FormData = {
  name: string;
  email: string;
  password: string;
  mobile: string;
  address: string;
  businessName: string;
};

export default function Register() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
    businessName: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateField = (key: keyof FormData, value: string) => {
    let error = "";

    switch (key) {
      case "name":
        if (!value) {
          error = "Name is required";
        }
        break;
      case "email":
        if (!value) {
          error = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Email address is invalid";
        }
        break;
      case "password":
        if (!value) {
          error = "Password is required";
        }
        break;
      case "mobile":
        if (!value) {
          error = "Mobile number is required";
        } else if (!/^\d+$/.test(value)) {
          error = "Mobile number is invalid";
        }
        break;
      case "address":
        if (!value) {
          error = "Address is required";
        }
        break;
      case "businessName":
        if (!value) {
          error = "Business name is required";
        }
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      [key]: error,
    });

    return error === "";
  };

  const handleInputChange = (key: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [key]: value,
    });

    validateField(key, value);
  };

  const validate = () => {
    let valid = true;
    let errors: Partial<FormData> = {};

    for (let key in formData) {
      switch (key) {
        case "name":
          if (!formData[key]) {
            valid = false;
            errors[key] = "Name is required";
          }
          break;
        case "email":
          if (!formData[key]) {
            valid = false;
            errors[key] = "Email is required";
          } else if (!/\S+@\S+\.\S+/.test(formData[key])) {
            valid = false;
            errors[key] = "Email address is invalid";
          }
          break;
        case "password":
          if (!formData[key]) {
            valid = false;
            errors[key] = "Password is required";
          }
          break;
        case "mobile":
          if (!formData[key]) {
            valid = false;
            errors[key] = "Mobile number is required";
          } else if (!/^\d+$/.test(formData[key])) {
            valid = false;
            errors[key] = "Mobile number is invalid";
          }
          break;
        case "address":
          if (!formData[key]) {
            valid = false;
            errors[key] = "Address is required";
          }
          break;
        case "businessName":
          if (!formData[key]) {
            valid = false;
            errors[key] = "Business name is required";
          }
          break;
        default:
          break;
      }
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log("Registered Data:", formData);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name="person-outline" size={20} style={styles.inputIcon} />
        <TextInput
          placeholder="Name"
          style={styles.input}
          value={formData?.name}
          onChangeText={(value) => handleInputChange("name", value)}
        />
      </View>
      {errors?.name && <Text style={styles.errorText}>{errors?.name}</Text>}
      <View style={styles.inputContainer}>
        <Icon name="mail-outline" size={20} style={styles.inputIcon} />
        <TextInput
          placeholder="Email Address"
          style={styles.input}
          inputMode="email"
          value={formData?.email}
          onChangeText={(value) => handleInputChange("email", value)}
        />
      </View>
      {errors?.email && <Text style={styles.errorText}>{errors?.email}</Text>}
      <View style={styles.inputContainer}>
        <Icon name="lock-closed-outline" size={20} style={styles.inputIcon} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={!passwordVisible}
          value={formData?.password}
          onChangeText={(value) => handleInputChange("password", value)}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Icon
            name={passwordVisible ? "eye-off-outline" : "eye-outline"}
            size={20}
            color="#ccc"
          />
        </TouchableOpacity>
      </View>
      {errors?.password && (
        <Text style={styles.errorText}>{errors?.password}</Text>
      )}
      <View style={styles.inputContainer}>
        <Icon name="call-outline" size={20} style={styles.inputIcon} />
        <TextInput
          placeholder="Mobile No."
          style={styles.input}
          keyboardType="phone-pad"
          value={formData?.mobile}
          onChangeText={(value) => handleInputChange("mobile", value)}
        />
      </View>
      {errors?.mobile && <Text style={styles.errorText}>{errors?.mobile}</Text>}
      <View style={styles.inputContainer}>
        <Icon name="home-outline" size={20} style={styles.inputIcon} />
        <TextInput
          placeholder="Address"
          style={styles.input}
          value={formData?.address}
          onChangeText={(value) => handleInputChange("address", value)}
        />
      </View>
      {errors?.address && (
        <Text style={styles.errorText}>{errors?.address}</Text>
      )}
      <View style={styles.inputContainer}>
        <Icon name="business-outline" size={20} style={styles.inputIcon} />
        <TextInput
          placeholder="Business Name"
          style={styles.input}
          value={formData?.businessName}
          onChangeText={(value) => handleInputChange("businessName", value)}
        />
      </View>
      {errors?.businessName && (
        <Text style={styles.errorText}>{errors?.businessName}</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
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
  inputIcon: {
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: "100%",
    padding: 10,
    margin: 10,
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
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#004EDB",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
    width: "100%",
  },
  errorText: {
    color: "red",
    alignSelf: "flex-start",
    marginLeft: 10,
    marginBottom: 10,
  },
});
