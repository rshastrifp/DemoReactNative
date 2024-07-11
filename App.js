

import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LittleLemonHeader from './ios/components/LittleLemonHeader';
import LittleLemonFooter from './ios/components/LittleLemonFooter';
import MenuItems from './ios/components/MenuItems';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <MenuItems />
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});


// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
