import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bienvenido a la aplicacion del Clima!!</Text>
      <Button style={styles.button}
        onPress={() => {
          alert('Hiciste click sobre el boton');
        }}
        title="Presioname para saber"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    marginBottom: 10,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});
