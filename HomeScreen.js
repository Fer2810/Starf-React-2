import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Aquí puedes agregar el componente MenuLateral si es necesario */}
      {/* Por ejemplo: <MenuLateral /> */}

      <Text style={styles.titleText}>Elije tu usuario</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Administrador"
          onPress={() => navigation.navigate('AdminScreen')}
        />
        <Button
          title="Profesor"
          onPress={() => navigation.navigate('ProfesorScreen')}
        />
      </View>
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
  titleText: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default HomeScreen;
