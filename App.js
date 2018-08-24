import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from "./LoginForm";
import { DismissKeyboardView } from "./DismissKeyboardView";

export default class App extends React.Component {
  render() {
    return <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <DismissKeyboardView style={{flex:1}}>
          <View style={styles.logoContainer}>
            <Image source={{ uri: "https://facebook.github.io/react/logo-og.png" }} style={styles.logo} />
            <Text style={styles.title}>Your Awesome Logo</Text>
          </View>
          <View style={styles.formContainer}>
            <LoginForm />
          </View>
      </DismissKeyboardView>
      </KeyboardAvoidingView>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222"
  },
  logoContainer: {
    flexGrow:1,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: { 
    width: 100, 
    height: 100 
  },
  title: {
    marginTop: 5,
    color: "white",
    fontSize: 20
  }
});
