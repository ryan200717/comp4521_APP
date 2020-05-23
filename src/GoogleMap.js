import React from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
 
export default class GoogleMap extends React.Component {
  onRegionChange(region) {
    this.setState({ region });
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 22.336929,
            longitude: 114.265752,
            latitudeDelta: 0.00522,
            longitudeDelta: 0.00521,
          }}
          
        >
          <Marker
            draggable
            coordinate={{
              latitude: 22.336929,
              longitude: 114.265752,
            }}
            title={'Marker'}
            description={'Name'}
          />
        </MapView>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
});