import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState();
  const [valor2, setValor2] = useState();
  const [resultado, setResultado] = useState(0);
  const [mensagem, Mensagem] = useState();

  function dividir(){
    let diferenca = (parseFloat(valor1) / parseFloat(valor2));
    setResultado(parseFloat(valor1) / parseFloat(valor2)); 

    if(diferenca <= 0.7){
      Mensagem("Abasteça com álcool");
    }
    else 
    {
      Mensagem("Abasteça com gasolina");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Gasolina x Álcool</Text>
      <p>

      </p>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/316/316377.png',
        }}
      />
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Valor Álcool</Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={valor1}
          onChangeText={(texto)=>setValor1(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Valor Gasolina</Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={valor2}
          onChangeText={(texto)=>setValor2(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao1}
          onPress={dividir}
        >
            <Text style={styles.textoBotao1}>Calcular</Text>
        </TouchableOpacity>
      </View>

     
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Resultado: {resultado}</Text>
        <Text style={styles.textoBloco}>{mensagem}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: "url('https://wallpapercave.com/wp/wp8634759.png')",
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:'40%'
  },
  textoBloco:{
    fontSize:20,
  },
  texto:{
    color:'#000',
    fontSize:30
  },
  input:{
    borderColor:'#000',
    borderWidth:2,
    fontSize:30,
    width:'80%'
  },
  bloco:{
    width:'100%',
    alignItems:'center',
    marginTop:30
  },
  botao1:{
    backgroundColor:'#3CB371',
    width:'80%',
    textAlign:'center'
  },
  textoBotao1:{
    color:"#fff",
    fontSize:30
  }, 
  logo:{
    width:180,
    height:180
  },
  resultado:{
    backgroundColor:'#fff',
    opacity: '0.5',
    width:'500px',
    height:'40px',
    textAlign:'center'
  },
  textoResultado:{
    color:"#000",
    fontSize:30
  }
});