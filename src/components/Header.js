import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Colors } from '../globals/styles/Colors';
import { IsUnderMinWidth } from '../globals/styles/DisplaySizes';
import { setShowMenu } from '../features/shop/shopSlice';
import { logout } from '../features/auth/authSlice';
import { deleteSession } from '../db';
import CategoryList from './categories/CategoryList';
import iconBars from '../../assets/icon-bars.png';
import iconLogout from '../../assets/icon-logout.png';

function Header({navigation}) {
  const dispatch = useDispatch();
  const showMenu = useSelector(state => state.shopReducer.value.showMenu);
  const { localId } = useSelector(state => state.authReducer.value);

  const isUnderMinWidth = IsUnderMinWidth();
  
  const visibleListTrigger = () => {
    dispatch(setShowMenu(!showMenu));
  }

  const doLogout = async () => {
    dispatch(logout());
    await deleteSession({localId});
  }



  return(
    <View style={stylesHeader.container}>
      <View style={stylesHeader.row}>
        <View style={stylesHeader.sideColumn}>
          <Pressable onPress={visibleListTrigger}>
            <Image source={iconBars} style={width < DisplaySizes.minWidth ? stylesHeader.iconMin : stylesHeader.icon} />
          </Pressable>
        </View>
        <View style={stylesHeader.midColumn}>
          <View style={stylesHeader.brand}>
            <Text style={width < DisplaySizes.minWidth ? stylesHeader.brandTextMin : stylesHeader.brandText}>Lit Design</Text>
            </View>
        </View>
        <View style={stylesHeader.sideColumn}>
          <Pressable onPress={doLogout}>
            <Image source={iconLogout} style={isUnderMinWidth ? stylesHeader.iconMin : stylesHeader.icon} />
          </Pressable>
        </View>
      </View>
      {
        showMenu ?
          <CategoryList
            navigation={navigation}></CategoryList> :
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
  brandTextMin: {
    fontSize: 24,
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