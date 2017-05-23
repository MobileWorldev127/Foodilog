//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, } from 'react-native';
import Search from 'react-native-search-box';
import AtoZListView from 'react-native-atoz-listview';

const {width, height} = Dimensions.get('window');
const rowHeight = 40;

// create a component
class Menu extends Component {

    state = {
        data:{
            "A":[
                {
                    "name" : "Anh Tuan Nguyen",
                    "age" : 28,
                },
                {
                    "name" : "An Nhien", 
                    "age" : 20
                },
            ],
            "Z":[
                {
                    "name" : "Zue Dang",
                    "age": 22
                },
                {
                    "name" : "Zoom Jane",
                    "age" : 30
                },
            ]
        }
    }

    renderRow = (item, selectionId, index) =>{
        return(
            <TouchableOpacity style = {{height:40, justifyContent:'center', alignItems:'center'}}>
                <Text>{item.name}</Text>
            </TouchableOpacity>
        );
    }
    beforeFocus = () => {
        return new Promise((resolve, reject) =>{
            console.log('beforeFocus', text);
            resolve();
        });
    }
    onFocus = (text) =>{
        return new Promise((resolve, reject) =>{
            console.log('beforeFocus', text);
        });
    }
    afterFocus = () => {
        return new Promise((resolve, reject) => {
            console.log('afterFocus');
        });
    }
    constructor(props){
        super(props);
        this._onPressBack = this._onPressBack.bind(this);
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    _onPressBack(){
        this.props.navigator.pop();
    }
    _onPressAdd(){
        this.props.navigator.push({
            name:'menuadd'
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.navview}>
                    <Text style = {{color:'white', fontSize:14, fontWeight:'bold'}}>American Restaurant</Text>
                    <TouchableOpacity onPress = {this._onPressBack} style = {styles.backButton}>
                        <Image source = {require('../images/back.png')} style = {styles.backImage}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {this._onPressAdd} style = {styles.addButton}>
                         <Text style = {{color:'white', fontSize:14}}>Add</Text>
                     </TouchableOpacity>
                </View>
                <View style = {{width:width, height:height-40}}>
                    <Search
                        ref = ''
                    />
                    <AtoZListView
                        data = {this.state.data}
                        renderRow = {this.renderRow}
                        rowHeight = {40}
                        sectionHeaderHeight = {40}
                    />
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
    },
    navview:{
       backgroundColor: '#652D6C',
       width: width,
       height: 40,
       justifyContent: 'center',
       alignItems: 'center',
       flexDirection: 'row',
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
    addButton:{
        position: 'absolute',
        right: 10,
    },
});

//make this component available to the app
export default Menu;
