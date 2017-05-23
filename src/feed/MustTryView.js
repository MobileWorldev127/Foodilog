//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class MustTryView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.navview}>
                    <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>{this.state.RestaurantInfo.name}</Text>
                    <TouchableOpacity onPress = {this._onPressBack} style = {styles.backButton}>
                        <Image source = {require('../images/back.png')} style = {styles.backImage}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    backButton:{
        position:'absolute',
        left: 10,
        width: 40,
        height: 40,
    },
    backImage:{
        width: 16,
        height: 16,
        marginTop:12,
        resizeMode: 'contain',   
    },
});

//make this component available to the app
export default MustTryView;
