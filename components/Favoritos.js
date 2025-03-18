import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Jogos from "./jogos";
export default function Favoritos({ navigation, route }) {
  const { favoritos } = route.params;

  const jogos = Jogos;

  const goBackWithUpdatedFavs = () => {
    navigation.setParams({ favoritos });
    navigation.goBack();
  };

  return (
    <View>
      <ScrollView style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
          Favoritos
        </Text>

        <TouchableOpacity
          hitSlop={{ top: 100, bottom: 100, left: 100, right: 100 }}
          style={styles.nxtPage}
          onPress={() => goBackWithUpdatedFavs()}
        >
          <Text style={styles.nomeJogo}>Home</Text>
        </TouchableOpacity>

        <View style={styles.jogos}>
          {favoritos.length === 0 ? (
            <Text>Nenhum jogo favoritado ainda.</Text>
          ) : (
            jogos
              .filter((jogo) => favoritos.includes(jogo.id))
              .map((item) => (
                <View key={item.id} style={styles.jogo}>
                  <Image source={item.imagem} style={styles.image} />
                  <Text style={styles.nomeJogo}>{item.nome}</Text>
                  <Text>
                    {item.categoria} - {item.ano}
                  </Text>
                  <Text>Nota: {item.nota}</Text>
                </View>
              ))
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  nxtPage: {
    position: "absolute",
    top: 20,
    right: 20,
    padding: 10,
    backgroundColor: "gray",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  jogos: {
    marginTop: 50,
  },
  jogo: {
    marginBottom: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  nomeJogo: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
