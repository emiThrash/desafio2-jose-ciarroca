import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Colors } from '../../globals/styles/Colors';
import iconAdd from '../../../assets/icon-add.png';
import iconDetail from '../../../assets/icon-detail.png';

//Lista de productos dentro de Categorías

function ProductRow({item, callbackAddProduct}) {
  const onAddProduct = () => {
    callbackAddProduct(item.id);
  };

  const onViewDetail = () => {
    
  };

  return(
    <View style={stylesProductRow.container}>
      <View style={stylesProductRow.colImage}>
        <Image source={item.image} style={stylesProductRow.image} resizeMode='cover' />
      </View>
      <View style={stylesProductRow.colDescription}>
        <Text style={stylesProductRow.text}>
          {item.title}
        </Text>
        <Text style={stylesProductRow.textPrice}>
          ${item.price}
        </Text>
      </View>
      <View style={stylesProductRow.colActions}> 
        <Pressable onPress={onViewDetail}>
          <Image source={iconDetail} style={stylesProductRow.icon} /> 
        </Pressable>
        <Pressable onPress={onAddProduct}>
          <Image source={iconAdd} style={stylesProductRow.icon} />
        </Pressable>
      </View>
    </View>
  );
}

const stylesProductRow = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0,
    marginVertical: 9,
    padding: 6,
    backgroundColor: Colors.coralAlter,
    borderRadius: 0
  },
  text: {
    color: Colors.grayDark,
    fontSize: 20,
    fontFamily: 'Dosis-Bold'
  },
  textPrice: {
    color: Colors.grayDark,
    fontSize: 20,
    fontFamily: 'Dosis-Bold'
  },
  colImage: {
    width: '25%'
  },
  colDescription: {
    width: '55%',
    paddingHorizontal: 20
  },
  colActions: {
    width: '20%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  icon: {
    width: 24,
    height: 24,
    alignSelf: 'flex-end',
  },
  image: {
    flex: 1,
    width: 'auto',
    height: 'auto',
    borderRadius: 9
  }
});

export default ProductRow;