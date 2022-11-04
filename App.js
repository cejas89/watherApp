import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [texItem, settextItem] = useState("");
  const [itemList, setitemList] = useState([]);
  const [modalVisible, setmodalVisible] = useState(false);










  return (
    <View style={styles.container}>
      <View style={styles.tittleContainer}>
        <Text style={styles.tittle}>Shopping List</Text>
        <TextInput style={styles.inputContainer} placeholder='ingresa aqui tu informacion'></TextInput>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text>Presiona Aqui</Text>
        </TouchableOpacity>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  tittleContainer: {
    flex: 1


  },
  tittle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold'

  },
  inputContainer: {
    flex: 1,
    backgroundColor: 'purple',
    margin: 10,
    borderColor: 'green',
    borderWidth: 5,

  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'yellow',
    margin: 10,

  }



});
