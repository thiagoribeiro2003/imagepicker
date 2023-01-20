import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImagePickerExample() {
  const [foto, setFoto] = useState(); // Recupera a foto que vc vai bater com a câmera

  const acessarCamera = async () => {
    const imagem = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    console.log(imagem);

    // pegando a url da foto q ta dentro do objeto imagem, e passando para o state
    setFoto(imagem.assets[0].uri);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Acessar câmera" onPress={acessarCamera} />

      {/* Se ouver foto renderiza a imagem */}
      {foto && (
        <Image source={{ uri: foto }} style={{ width: 300, height: 200 }} />
      )}
    </View>
  );
}
