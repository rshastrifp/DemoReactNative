import React from 'react'; 

import { ScrollView, Text, StyleSheet, Platform, KeyboardAvoidingView, TextInput } from 'react-native';

export default function LoginScreen() {
    return(
        <KeyboardAvoidingView style={logInStyles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
             <ScrollView style={logInStyles.container}>
            <Text style={logInStyles.headerText}>
                Welcome to Little Lemon.
            </Text>

            <Text style={logInStyles.regularText}>
                Login to continue.
            </Text>

            <TextInput style={logInStyles.input}
                placeholder="email"
            />

            <TextInput style={logInStyles.input}
                placeholder="password"
            />
        </ScrollView>
        </KeyboardAvoidingView>
    );
}

const logInStyles = StyleSheet.create({
    container: {
        flex: 1,
      },
      headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
      },
      regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
      },
      input: { 
            height: 40, 
            margin: 12, 
            borderWidth: 1, 
            padding: 10, 
            fontSize: 16, 
            borderColor: 'EDEFEE', 
            backgroundColor: '#EDEFEE', 
          }, 
          messageInput: { 
            height: 100, 
            margin: 12, 
            borderWidth: 1, 
            padding: 10, 
            fontSize: 16, 
            backgroundColor: '#EDEFEE', 
          }, 
          infoSection: { 
            fontSize: 24, 
            padding: 20, 
            marginVertical: 8, 
            color: '#EDEFEE', 
            textAlign: 'center',
          }, 
          headingSection: { 
            fontSize: 28, 
            padding: 20, 
            marginVertical: 8, 
            color: '#EDEFEE', 
            textAlign: 'center',
          },
}
);
