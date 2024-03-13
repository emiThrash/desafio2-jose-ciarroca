import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';
import { useGetProfileImageQuery } from '../services/shopService';
import { setProfilePicture, setUser } from '../features/auth/authSlice';
import { fetchSession } from '../db';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';

const MainNavigator = () => {
  const { user, localId } = useSelector(state => state.authReducer.value);
  const { data, error, isLoading } = useGetProfileImageQuery(localId);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const session = await fetchSession({localId});
  
        if (session?.rows.length) {
          dispatch(setUser(session.rows._array[0]));
        }
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Error al obtener sesión activa',
          text2: error.message
        });
      }
    })()
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(setProfilePicture(data.image));
    }
  }, [data]);

  return(
  <NavigationContainer>
    { user ? <TabNavigator /> : <AuthNavigator />}
  </NavigationContainer>
  );
};

export default MainNavigator;