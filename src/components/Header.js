import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../globals/styles/Colors';
import CategoryList from './categories/CategoryList';
import iconBars from '../../assets/icon-bars.png';
import iconCart from '../../assets/icon-cart.png';
import iconHome from '../../assets/home-icon.png';

function Header({callbackSelectCategory, callbackGoToCart, callbackGoToHome}) {
  const [visibleList, setVisibleList] = useState(false);
  
  const visibleListTrigger = () => {
    setVisibleList(!visibleList);
  }

  const onSelectCategory = (id) => {
    setVisibleList(false);
    callbackSelectCategory(id);
  };

  const onGoToCart = () => {
    setVisibleList(false);
    callbackGoToCart();
  };


  const onGoToHome = () => {
    setVisibleList(false);
    callbackGoToHome();
  };



  return(
    <View style={stylesHeader.container}>
      <View style={stylesHeader.row}>
        <View style={stylesHeader.sideColumn}>
          <Pressable onPress={visibleListTrigger}>
            <Image source={iconBars} style={stylesHeader.icon} />
          </Pressable>
        </View>

        <View style={stylesHeader.sideColumn}>
          <Pressable onPress={onGoToHome}>
            <Image source={iconHome} style={stylesHeader.icon1} />
          </Pressable>
        </View>

        <View style={stylesHeader.midColumn}>
          <View style={stylesHeader.brand}>
            <Text style={stylesHeader.brandText}>LIT design</Text>
          </View>
        </View>

        

        <View style={stylesHeader.sideColumn}>
          <Pressable onPress={onGoToCart}>
            <Image source={iconCart} style={stylesHeader.icon} />
          </Pressable>
        </View>
      </View>
      {
        visibleList ?
          <CategoryList callbackSelectCategory={onSelectCategory} visibleList={visibleList}></CategoryList> :
          <></>
      }
      
    </View>
  );
}
    
const stylesHeader = StyleSheet.create({
  container: {
    padding: 19,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.greenMain,
  },
  row: {
    flexDirection: 'row',
  },
  sideColumn: {
    width: '10%',
    justifyContent: 'center',
  },
  midColumn: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  brand: {
    height: 54,
    justifyContent: 'center',
  },
  brandText: {
    fontSize: 39,
    fontFamily: 'Passion'
  },
  icon: {
    width: 30,
    height: 30
  },
  icon1: {
    width: 50,
    height: 50
  },
});

export default Header;