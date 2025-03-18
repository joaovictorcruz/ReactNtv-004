import React from "react";
import { View, Text, Image, ScrollView,StyleSheet,TouchableOpacity } from "react-native";
import Jogos from './jogos';

export default function Jogo({navigation,route}) {

    const { item } = route.params;
 
    const jogos = Jogos;

  return (
        <View style={styles.container}>
        <TouchableOpacity hitSlop={{ top: 100, bottom: 100, left: 100, right: 100 }} style={styles.nxtPage} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.nomeJogo} >Home</Text>
        </TouchableOpacity>

        <View style={styles.jogos}>
        {jogos
          .filter((jogo) => item.id==jogo.id)
          .map((item) => 
            <View key={item.id} style={styles.jogo}>
            <Text style={styles.nomeJogo}>{item.nome}</Text>
            <Image source={item.imagem} style={ styles.image} />
            <Text style={styles.descricao}>{item.descricao}</Text>
            <Text>{item.categoria} - {item.ano}</Text>
            <Text>Nota: {item.nota}</Text>  
            </View>          
                
    
      )}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    container:{
      padding: 20,
      paddingTop:50,
      flex: 1,
      alignItems: 'center',
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
       borderRadius: 10, 
       marginVertical: 30
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
        fontSize: 22, fontWeight: "bold" ,
    },
    descricao:{
        textAlign: 'justify',
        fontSize: 16,
        marginBottom:15
    }
  
  })