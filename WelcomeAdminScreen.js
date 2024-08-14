import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeAdminScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenido Admin</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default WelcomeAdminScreen;
