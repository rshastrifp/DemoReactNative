import React, { useState } from 'react'; 

import { 
    ScrollView, 
    TextInput, 
    StyleSheet, 
    Text, 
    KeyboardAvoidingView, 
    Platform} from "react-native";


const FeedbackForm = () => {

    const [firstName, onChangeFirstName] = useState(''); 
    const [lastName, onChangeLastName] = useState(''); 
    const [phoneNumber, onChangePhoneNumber] = useState(''); 
    const [message, onChangeMessage] = useState(''); 

    return(
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
            <ScrollView style={styles.container}>
            <Text style={styles.headingSection}>
            How was your visit to Little Lemon?
            </Text>

            <Text style={styles.infoSection}> 
            Little Lemon is a charming neighborhood bistro that serves simple food 
            and classic cocktails in a lively but casual environment. We would love 
            to hear your experience with us! 
          </Text>

            <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={onChangeFirstName}
                placeholder='First Name'
            />

            <TextInput
                style={styles.input}
                value={lastName}
                onChangeText={onChangeLastName}
                placeholder='Last Name'
            />

            <TextInput
                style={styles.input}
                value={phoneNumber}
                onChangeText={onChangePhoneNumber}
                keyboardType={"phone-pad"}
                placeholder='Phone Number'
            />

            <TextInput
                style={styles.messageInput}
                value={message}
                onChangeText={onChangeMessage}
                placeholder='Message'
                multiline={true}
                maxLength={250}
            />
            </ScrollView>
        </KeyboardAvoidingView>
        );
};

export default FeedbackForm

const styles = StyleSheet.create({ 
    container: { 
            flex: 1, 
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
    }); 