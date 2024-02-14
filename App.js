import { StyleSheet, View, StatusBar } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { Fonts } from './src/globals/styles/Fonts';
import Header from './src/components/Header';
import Home from './src/components/Home';
import ItemForm from './src/components/items/ItemForm';
import ItemList from './src/components/items/ItemList';
import ProductList from './src/components/products/ProductList';

export default function App() {
  //useState y useEffect - Hooks para controlar Estado y ciclo de vida de la app -
  const [list, setList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [showHome, setShowHome] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [currentCategoryId, setCurrentCategoryId] = useState(null);
  const [fontsLoaded] = useFonts(Fonts);
  
  if(!fontsLoaded){
    return null;
  }


  // Items
  const addItem = (itemTitle) => {
    setList(old => [...old, {id: currentIndex, title: itemTitle}]);
    setCurrentIndex(currentIndex + 1);
  };
  const deleteItem = (itemId) => {
    setList(old => old.filter((item) => item.id !== itemId));
  };

  // Productos
  const changeCategory = (categoryId) => {
    setCurrentCategoryId(categoryId);
    hideAllSites();

    setShowProducts(true);
  };

  const callbackAddProduct = (productId) => {
    console.log(productId);
  }

  // Navigation
  const hideAllSites = () => {
    setShowCart(false);
    setShowProducts(false);
  };

  const goToCart = () => {
    hideAllSites();

    setShowCart(true);
  };

  //
  const goToHome = () => {
    hideAllSites();
    setShowHome(true);
  };

  return (
    <View style={stylesApp.container}>
      <StatusBar/>
      <Header 
      callbackSelectCategory={changeCategory}
      callbackGoToCart={goToCart}
      callbackGoToHome={goToHome}
      ></Header>
      {
        showHome ?
          <Home></Home> :
          <></>
      }
      {
        showCart ?
          <>
            <ItemForm callbackAddItem={addItem}></ItemForm>
            <ItemList list={list} callbackDeleteItem={deleteItem}></ItemList>
          </> :
          <></>
      }
      {
        showProducts ?
          <ProductList categoryId={currentCategoryId} callbackAddProduct={callbackAddProduct}></ProductList> :
          <></>
      }
    </View>
  );
}

const stylesApp = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'top',
    justifyContent: 'top'
  }
});