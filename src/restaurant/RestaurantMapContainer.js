//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator } from 'react-native';
import MapView from 'react-native-maps';

// create a component
class RestaurantMapContainer extends Component {
    render() {
    const { region } = this.props;
    console.log(region);
    return (
      <View style ={styles.container}>
       <MapView
         style={styles.map}
         region={{
           latitude: 37.78825,
           longitude: -122.4324,
           latitudeDelta: 0.015,
           longitudeDelta: 0.0121,
         }}
       >
       </MapView>
     </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

//make this component available to the app
export default RestaurantMapContainer;
