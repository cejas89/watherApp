import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import Modal from "./components/Modal";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const onHandleChange = (t) => setTextItem(t);


  const addItem = () => {
    setList((currentState) => [
      ...currentState,
      { id: Math.random().toString(), value: textItem },
    ]);
    setTextItem("");
  };

  const selectedItem = (id) => {
    console.log(id);
    setItemSelected(list.find((item) => item.id === id));
    setModalVisible(true);
  };

  const deleteItem = () => {
    console.log(itemSelected);
    setList((currentState) =>
      currentState.filter((item) => item.id !== itemSelected.id)
    );
    setItemSelected({});
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => selectedItem(item.id)}>
      <Text style={{color: "red"}}>{item.value}</Text>
    </TouchableOpacity>
  );



  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Shopping List</Text>        
        <View style={styles.inputContainer}>
        <TextInput style={styles.inputStyle}
        placeholder='ingresa aqui tu informacion'
        value={textItem}
        onChangeText={onHandleChange}
        >
        </TextInput>
        <TouchableOpacity
        style={styles.buttonContainer}
        onPress={addItem}>
          <Text style={{textAlign: 'center', color: "white"}}>Presiona Aqui</Text>
        </TouchableOpacity>
        <View>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <Modal isVisible={modalVisible} actionDeleteItem={deleteItem} />
        </View>
       
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
  tittle: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 50,
  },
  inputContainer: {
    backgroundColor: 'white',
    margin: 10,
    borderColor: 'green',
    borderWidth: 1,
    alignItems: 'center',
    
  },
  inputStyle: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 250,
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: 'black',
    margin: 10,
    width: "30%",
    
  }
});
