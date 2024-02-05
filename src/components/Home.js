import { StyleSheet, Text, View } from 'react-native';

function Home(){
    return(
        <View style={styleHome.container}>
            <Text style={styleHome.textWelcome}>Dev & Design</Text>
            <Text style={styleHome.text}>Servicios de Diseño y Desarrollo</Text>
        </View>
    );
}

const styleHome = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    textWelcome: {
      marginVertical: 10,
      fontSize: 25,
      fontFamily: 'Noto-Bold'
    },
    text: {
      fontSize: 20,
      fontFamily: 'Noto'
    },
  });
  
  export default Home;