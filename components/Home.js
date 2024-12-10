import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

export default Home = ({navigation}) => {
  return (
    <SafeAreaView
      style={{ backgroundColor: 'white', alignItems: 'center', gap: 20 }}>
      <Text
        style={{
          color: 'green',
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 500,
        }}>
        Order Your Favorite
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: 100 }}></View>
        <Image
          style={{ width: 100, height: 100 }}
          source={require('../assets/cocktail.png')}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require('../assets/seafood.png')}
        />
        <View style={{ width: 100 }}></View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: 100 }}></View>
        <Image
          style={{ width: 250, height: 100 }}
          source={require('../assets/vegetables.png')}
        />
      </View>
      <TouchableOpacity
        style={{
          borderRadius: 50,
          paddingVertical: 10,
          backgroundColor: 'green',
          width: 100,
        }}>
        <Text style={{ textAlign: 'center', color: 'white' }} onPress={() => navigation.navigate("List")}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
