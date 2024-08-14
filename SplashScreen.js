import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Navegar a HomeScreen después de 5 segundos
    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 5000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenido</Text>
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

export default SplashScreen;
