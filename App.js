import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {

  const [DataNasc, setDataNasc] = useState('');
  function CalcularIdade() {

    const v1 = parseFloat(DataNasc);
    const Idade = 2022 - v1;

    alert('A sua idade é de ' + Idade + ' anos');
  }

  return (

    <View style={styles.container}>

    <Text style={styles.titulo}> Calculadora de Idade</Text>

    <Image style={styles.imagem, {width: 700, height:300, borderRadius: 25, marginTop:35,}}

     source={{uri: 'https://s2.glbimg.com/QdSUiv4fHa00dGXGZ3cRx9krovc=/0x0:1104x640/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/L/8/pqgK5BQ2atWbWO94prAg/envelhecimento.jpg'}} 

    /> 

      <TextInput

        style={styles.campo}

        onChangeText={setDataNasc}

        placeholder="Insira sua Data de Nascimento"

        keyboardType="numeric"

      />



      <TouchableOpacity

        style={styles.botao}

        onPress={CalcularIdade}

      >

        <Text style={styles.textoBotao}>Calcular</Text>

      </TouchableOpacity>



    </View>

  );

}



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

    justifyContent: 'center',

    alignItems: 'center'

  },

  titulo: {

    textAlign: 'center',

    fontSize: 50,

    color: '#696069'

  },

  campo: {

    backgroundColor: '#D3D3D3',

    borderRadius: 5,

    margin: 40,

    width: 300,

    padding: 13,

    color: '#000',

    fontSize: 20,
    fontStyle: 'italic', 

  },

  botao: {

    width: 200,

    height: 50,

    justifyContent: 'center',

    alignItems: 'center',

    margin: 15,

    backgroundColor: '#D3D3D3',

    padding: 10,

    borderRadius: 3

  },

  textoBotao: {

    color: '#000',

    fontSize: 25,

  }

}); 