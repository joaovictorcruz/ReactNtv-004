import React, { useState } from "react";
import { View, Text, Image, ScrollView,StyleSheet,TouchableOpacity } from "react-native";
import Jogos from './jogos';

export default function Home({navigation,route}){
 
  const [favoritos, setFavoritos] = useState(route.params?.favoritos || []);

  const jogos = Jogos;

  const toggleFavorito = (id) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  return (
    
    <ScrollView style={styles.container}>
      

      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 30 }}>Lista de Jogos</Text>

      <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 100, right: 100 }} style={styles.nxtPage} onPress={() => navigation.navigate("Favoritos",{favoritos})}>
        <Text style={styles.nomeJogo} >Favs</Text>
      </TouchableOpacity>
      <View style={styles.jogos}>
      {jogos.map((item) => (
  
        <View key={item.id} style={styles.jogo}>
          <TouchableOpacity onPress={() => navigation.navigate("Jogo",{item})}>
          <Image source={item.imagem} style={ styles.image} />
          </TouchableOpacity>
          <Text style={styles.nomeJogo}>{item.nome}</Text>
          <Text>{item.categoria} - {item.ano}</Text>
          <Text>Nota: {item.nota}</Text>
          <TouchableOpacity style={styles.favBtn} onPress={() => toggleFavorito(item.id)}>
            <Text style={styles.btnText}>{favoritos.includes(item.id) ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}</Text>
          </TouchableOpacity>
        </View>
      ))}
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container:{
    padding: 20 
  },
  nxtPage:{
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image:{
    width: '100%', 
    height: 200,
     borderRadius: 10 
  },
  jogos:{
    marginTop: 50,
  },
  jogo:{
    marginBottom: 20, 
    borderBottomWidth: 1, 
    paddingBottom: 10 
  },
  nomeJogo:{
      fontSize: 18, fontWeight: "bold" ,
  },
  favBtn:{
    backgroundColor:"gray",
    padding: 6,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText:{
    color:'white',
    fontWeight: 'bold',
    fontSize:15
  }

})