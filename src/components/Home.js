import { StyleSheet, Text, View } from 'react-native';
import { DisplaySizes, IsUnderMinWidth } from '../globals/styles/DisplaySizes';


function Home({navigation}){
  const isUnderMinWidth = IsUnderMinWidth();

  return(
    <View style={styleHome.container}>
      <Text style={[styleHome.textWelcome, isUnderMinWidth ? styleHome.textWelcomeMin : styleHome.textWelcomeMax]}>Dev-&-Design</Text>
      <Text style={[styleHome.text, isUnderMinWidth ? styleHome.textMin : styleHome.textMax]}>Servicios de Diseño y Desarrollo</Text>
    </View>
  );
}

const styleHome = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: DisplaySizes.paddingBottomNavigator
  },
  textWelcome: {
    width: '100%',
    fontFamily: 'Noto-Bold',
    textAlign: 'center'
  },
  textWelcomeMin: {
    marginVertical: 6,
    fontSize: 20,
  },
  textWelcomeMax: {
    marginVertical: 10,
    fontSize: 22,
  },
  text: {
    width: '100%',
    fontFamily: 'Noto',
    textAlign: 'justify'
  },
  textMin: {
    fontSize: 16,
  },
  textMax: {
    fontSize: 20,
  },
});
  
  export default Home;