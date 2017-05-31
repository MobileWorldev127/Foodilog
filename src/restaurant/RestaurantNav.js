import React, { Component } from 'react'
import { Navigator, Text, View, StyleSheet, TextInput, TouchableOpacity, Dimensions,  } from 'react-native'
import AtoZListView from 'react-native-atoz-listview';
import RestaurantSearch from './RestaurantSearch'

import Search from 'react-native-search-box';
const{width, height} = Dimensions.get('window');
var isLocationMenu = false;

class RestaurantNav extends Component {
  constructor (props) {
    super(props);
    this.state = {
        restaurantName: '',
        locationName: '',
        isLocationMenu: false,
    }
  }

  hideLocationMenu(){
      if(this.state.isLocationMenu == true){
          return(
            <View style = {{height:45, flexDirection:'row', alignItems:'center', padding:5}}>
                <Text style = {{color:'white', marginLeft: 10}}>Location</Text>
                <View style = {{ height:40, position:'absolute', right:10, left: 90}}>
                    <Search
                        ref = 'SearchBar'
                        placeholder ='  Search Locations  '
                        
                        backgroundColor = 'transparent'
                        titleCancelColor = '#652D6C'
                    />
                </View>
            </View>
          );
      }else{
          return null;
      }
      
        
  }

  render () {
    return (
      <View style = {styles.wrapper}>
          <View style = {styles.navview}>
              <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>Search</Text>
          </View>
          <View style = {styles.menuview}>
              <View style = {{height:45, flexDirection:'row', alignItems:'center', padding:5}}>
                  <Text style = {{color:'white', marginLeft: 10}}>Restaurant</Text>
                  <View style = {{ height:40, position:'absolute', right:10, left: 90}}>
                    <Search
                        ref = 'SearchBar'
                        placeholder = '  Search Restaurants  '  
                        backgroundColor = 'transparent'
                        titleCancelColor = '#652D6C'
                        onChangeText = {(text) => {
                            this.setState({
                                restaurantName:text
                            })
                        }}
                        onFocus = {() =>{
                            this.setState({isLocationMenu : true})
                        }}
                        onCancel = {() =>{
                            this.setState({isLocationMenu : false})
                        }}
                    />
                  </View>
              </View>
              
              <View style = {{width:width, height:1, backgroundColor:'#b5b5b5'}}>
              </View>

              {this.hideLocationMenu()}
     

          </View>

          <RestaurantSearch navigator = {this.props.navigator}/>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    wrapper:{
      flex:1,
      backgroundColor:'white',
    },
    navview:{
      backgroundColor: '#652D6C',
      width: width,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center'
    },
    menuview:{
      width: width,
      backgroundColor:'lightgray'
    },
});

export default RestaurantNav
