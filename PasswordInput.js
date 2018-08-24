import React, { Component } from 'react'
import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class PasswordInput extends Component {
  constructor(){
    super()
    this.state = {
      showPassword:true
    }
  }

  _toggleVisibility = () =>{
    this.setState(prevState => {return {showPassword: !prevState.showPassword}});  
  }

  render() {
    return <View style={styles.passwordContainer} >
        <TextInput 
        style={[this.props.style, styles.inputStyle]} 
        autoCorrect={false} 
        returnKeyType="go" 
        autoCapitalize="none" 
        secureTextEntry={this.state.showPassword} 
        placeholderTextColor="rgba(255,255,255,0.7)" 
        placeholder="password"         
        ref={this.props.setRef}          
        />
      <TouchableOpacity style={styles.iconContainer} onPress={() => this._toggleVisibility()}>
          <Ionicons name="md-checkmark-circle" size={24} color="green" />
        </TouchableOpacity>
      </View>;
  }
}
const styles = StyleSheet.create({
  passwordContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
    paddingBottom: 10
  },
  inputStyle: {
    flex: 1
  },
  iconContainer:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
    height: 40,
    width:40
  }
});