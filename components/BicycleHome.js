import { Text, View, StyleSheet, Image,TouchableOpacity } from 'react-native';

export default function AssetExample({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
       A premium online store for sporter and their stylish choice
      </Text>
      <Image style={styles.logo} source={require('../assets/image_home.png')} />
      <Text style={{
        fontWeight:'bold',
        textAlign:'center'
      }}>POWER BIKE {"\n"}
SHOP</Text>
      <TouchableOpacity style={{
        backgroundColor:'#E94141',
        color:'white',
        padding:10,
        borderRadius:10
      }}
      
       onPress={() => navigation.navigate('BicycleList')}
      >
      <Text style={{
        color:'white'
      }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    flex:1
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 250,
    width: 250,
    resizeMode: 'contain',
  }
});
