import { StyleSheet, TextInput, View, Pressable, Text, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { Colors } from '../../globals/styles/Colors';
import iconSearch from '../../../assets/icon-search.png';
import iconCancel from '../../../assets/icon-cancel.png';

//Search dentro de productos

function ProductForm({callbackSearchProduct, lastSearch}) {
  const [productToSearch, setProductToSearch] = useState(lastSearch);
  const [error, setError] = useState("");

  useEffect(() => {
    setProductToSearch(lastSearch);
  }, [lastSearch]);

  const validateSearchText = () => {
    const expression = /\d/;

    return !expression.test(productToSearch);
  }

  const onSearchProductPress = () =>{
    if(validateSearchText(productToSearch)){
      setError("");
      callbackSearchProduct(productToSearch);
    }else{
      setError("Solo letras para la busqueda");
    }
  };

  const onCleanPress = () =>{
    setError("");
    setProductToSearch("");
    callbackSearchProduct("");
  };

  //Incorporación del TextInput

  return(
    <>
      <View style={stylesProductForm.container}>
        <View style={stylesProductForm.col1}>
          <TextInput
            style={stylesProductForm.input}
            placeholder='Producto'
            placeholderTextColor={Colors.grayWhite}
            onChangeText={(text) => setProductToSearch(text)}
            value={productToSearch}></TextInput>
        </View>
        <View style={stylesProductForm.col2}>
          <View style={stylesProductForm.button}>

            <Pressable onPress={onSearchProductPress}>
              <Image source={iconSearch} style={stylesProductForm.icon} />
            </Pressable>
            
            <Pressable onPress={onCleanPress}>
              <Image source={iconCancel} style={stylesProductForm.icon} />
            </Pressable>

          </View>
        </View>
      </View>
      {
        error == "" ?
        <></> :
        <View style={stylesProductForm.errorContainer}>
          <Text style={stylesProductForm.errorText}>{error}</Text>
        </View>
      }
    </>
  );
}

const stylesProductForm = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0,
    marginBottom: 5
  },
  col1: {
    width: '80%'
  },
  col2: {
    width: '20%'
  },
  input: {
    height: 35,
    padding: 3,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    color: Colors.white,
    borderWidth: 1,
    borderColor: Colors.grayLight,
    backgroundColor: Colors.grayLight,
    fontSize: 25,
    fontWeight: '600'
  },
  button: {
    height: 37,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderColor: Colors.greenAlter,
    borderWidth: 2
  },
  icon: {
    width: 22,
    height: 22,
    alignSelf: 'flex-end',
  },
  errorContainer: {
    width: '100%',
    marginBottom: 5
  },
  errorText: {
    color: Colors.redAlert,
    fontSize: 18
  }
});

export default ProductForm;