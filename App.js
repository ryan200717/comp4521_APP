import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import SelectingDateTime from './src/SelectingDateTime';
import GoogleMap from './src/GoogleMap';

export default App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <Text style={[{ marginLeft: 10, marginTop: 10, fontSize:15,fontWeight: "bold" }]}> Information</Text>

      <View style={styles.container}>
        <View style={styles.boxOfData}>
          <Image
            style={styles.Logo}
            source={{
              uri: 'https://cdn.reubird.hk/large%2Fblogs%2Fbbq-partyroom%2Fminiparty-deluxe-bbq-5.jpg',
            }}
          />
        </View>
        <View style={styles.boxOfData}>
          <Text style={[{ marginLeft: 10, marginTop: 60 }]}> Name</Text>
          <Text style={[{ marginLeft: 10, marginTop: 10 }]}> location</Text>
          <Text style={[{ marginLeft: 10, marginTop: 10 }]}> Tel</Text>
        </View>

        <Text style={[{ marginLeft: 10, marginTop: 10,fontSize:15,fontWeight: "bold" }]}> Check for Booking</Text>
        <View style={[{ marginTop: 10 }, styles.boxOfDate]}>
          <SelectingDateTime/>
        </View>

        <Text style={[{ marginLeft: 10, marginTop: 10, fontSize:15,fontWeight: "bold" }]}> Map</Text>
        <View style={styles.boxOfMap}>
        
        <GoogleMap/>
        </View>
      
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  boxOfData: {
    backgroundColor: '#ddd',
    width: '50%',
    height: 250,

  },

  boxOfDate: {
    padding:20,
    backgroundColor: '#eee',
    width: '100%',
    height: 130,
  },

  boxOfMap:{
    marginTop:20,
    width:'100%',
    height:350,
  },

  Logo: {
    marginLeft: 10,
    width: '100%',
    height: '100%',
    resizeMode: 'center',
  },

});
