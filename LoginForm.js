import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import PasswordInput from "./PasswordInput";

export default class LoginForm extends Component {
  render() {
    return <View style={styles.container}>
      <TextInput placeholder="username or email" placeholderTextColor="rgba(255,255,255,0.7)" style={styles.textInput} returnKeyType="next" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} onSubmitEditing={() => this.passwordInput.focus()} />
      <PasswordInput style={styles.textInput} setRef={input => (this.passwordInput = input)}  />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity> 
          
        </View>;
  }
}

 

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  textInput: {
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 20,
    height: 40,
    color: "white",
    paddingHorizontal:10,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5DBCD2",
    height: 40
  },
  buttonText: {
    fontSize: 20,
    color: "#222222"
  },
});

{/* <TextInput placeholder="password" placeholderTextColor="rgba(255,255,255,0.7)" style={styles.textInput} returnKeyType="go" autoCapitalize="none" autoCorrect={false} secureTextEntry ref={input => (this.passwordInput2 = input)} /> */}