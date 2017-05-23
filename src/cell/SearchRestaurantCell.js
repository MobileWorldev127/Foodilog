//import liraries
import React, { Component } from 'react';
import { StyleSheet, Platform, Text, Dimensions, View, Image, TouchableHighlight} from 'react-native'

const{width, height} = Dimensions.get('window');

export default class SearchRestaurantCell extends Component {  
    constructor(props){
        super(props)
    }

    render(){  
        return(
            <TouchableHighlight onPress = {this.props.onPressClicked}>
                <View style = {styles.wrapper}>
                    <Image source = {require('../images/feedlog1.png')} style = {styles.backgroundimage}/>
                
                    <View style = {{backgroundColor:'black', opacity:0.5, position:'absolute', width: width, height:115, top:0}}>
                    </View>

                    <View style = {{flexDirection:'row', width: width, marginTop:5}}>
                        <Text style = {styles.name}>{this.props.rowdata.name}</Text>
                        <Image source = {require('../images/smile_1.png')} style = {styles.emoji}/>
                    </View>

                    <View style = {{flexDirection:'row', width: width, marginTop:20}}>
                        <Text style = {styles.type}>{this.props.rowdata.type}</Text>
                        <Text style = {styles.count}>Create the 1st log!</Text>
                    </View>
                    
                    <View style = {{flexDirection:'row', width: width, marginTop:20}}>
                        <Text style = {styles.address} numberOfLines = {2}>{this.props.rowdata.formattedAddress}</Text>
                        <Image source = {require('../images/star_unselected.png')} style = {styles.starImg}/>
                    </View>
        
                    <View style = {{backgroundColor:'gray', position:'absolute', width: width, height:1, bottom:1}}>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'white',
        height: 115,
        width: width,
    },
    backgroundimage:{
        position:'absolute',
        width:width,
        height:115,
        resizeMode:'cover'
    },
    name:{
        color:'white', 
        backgroundColor:'transparent', 
        fontSize:17, 
        marginLeft:8, 
    },
    type:{
        color:'white', 
        backgroundColor:'transparent', 
        fontSize:14, 
        marginLeft:8, 
    },
    address:{
        color:'white', 
        backgroundColor:'transparent', 
        fontSize:14, 
        marginLeft:8,
    },
    emoji:{
        width:25,
        height:25,
        position:'absolute',
        right: 10,
    },
    count:{
        color: 'white',
        fontSize: 16,
        backgroundColor:'transparent',
        position:'absolute',
        right:10,
    },
    starImg:{
        width: 22,
        height: 22,
        position:'absolute',
        resizeMode:'contain',
        right:10,
        bottom:0,
    },
});

//make this component available to the app

