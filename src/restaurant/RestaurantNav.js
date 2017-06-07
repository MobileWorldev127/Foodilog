import React, { Component } from 'react'
import { Navigator, Text, View, StyleSheet, TextInput, TouchableOpacity, Dimensions,  } from 'react-native'
import AtoZListView from 'react-native-atoz-listview';
import RestaurantSearch from './RestaurantSearch'

import Search from 'react-native-search-box';
const{width, height} = Dimensions.get('window');
var isLocationMenu = false;
var isdropdown = false;

class RestaurantNav extends Component {
  constructor (props) {
    super(props);
    this.state = {
        restaurantName: '',
        locationName: '',
        isLocationMenu: false,
        isdropdown : false,
        str_restaurant: 'Restaurant',
        str_searchRestaurant: 'Search Restaurants',
        params:''
    }
  }

  hideLocationMenu(){
      if(this.state.isLocationMenu == true){
          return(
            <View style = {{height:40, flexDirection:'row', alignItems:'center',marginTop:-5}}>
                <Text style = {{color:'white', marginLeft: 10}}>Location</Text>
                <View style = {{ height:40, position:'absolute', right:10, left: 90}}>
                    <Search
                        ref = 'SearchBar'
                        placeholder =' Search Locations'
                        backgroundColor = 'transparent'
                        titleCancelColor = 'white'
                    />
                </View>
            </View>
          );
      }else{
          return null;
      }
  }

  _onPressSearch(){
      var searchText = this.state.restaurantName
      var params = '&query=' + searchText + '&rank=' + 'distance' + '&price=' + ''
      console.log(params)
      this.setState({ params:params })
  }



  showDropDown(){
      if(this.state.isdropdown == true){
          return(                                                                          
              <View style = {styles.dropView}>
                  <TouchableOpacity onPress = {this.restaurantTag}>
                      <Text style = {{color: 'white',height: 20}}>Restaurant</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress = {this.dishTag}>
                      <Text style = {{color: 'white', marginTop: 7}}>Dish</Text>
                  </TouchableOpacity>
              </View>
          );     
      }else{
          return null;
      }
  }

  _onPressRestaurant = () => {
      isdropdown =! isdropdown
      this.setState({isdropdown})
  }

  restaurantTag = () => {
      isdropdown =! isdropdown
      this.setState({
          str_restaurant:'Restaurant',
          str_searchRestaurant:'Search Restaurants',
          isdropdown: isdropdown,
      })
  }
  dishTag = () => {
      isdropdown =! isdropdown
      this.setState({
          str_restaurant:'Dish',
          str_searchRestaurant: 'Dish',
          isdropdown: isdropdown,
      })
  }

  render () {
    return (
      <View style = {styles.wrapper}>
          <View style = {styles.navview}>
              <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>Search</Text>
          </View>
          <View style = {styles.menuview}>
              <View style = {{height:40, flexDirection:'row', alignItems:'center'}}>

                  <TouchableOpacity onPress = {this._onPressRestaurant}>
                        <Text style = {{color:'white', marginLeft: 10, textAlign:'center'}}>{this.state.str_restaurant}</Text>
                  </TouchableOpacity>  
                  <View style = {{ height:40, position:'absolute', right:10, left: 90}}>
                    <Search
                        ref = 'SearchBar'
                        placeholder = {this.state.str_searchRestaurant}
                        backgroundColor = 'transparent'
                        titleCancelColor = 'white'
                        onChangeText = {(text) => {
                            this.setState({ restaurantName: text }),
                            this._onPressSearch()
                        }}
                        onFocus = {() =>{
                            this.setState({isLocationMenu : true})
                        }}
                        onCancel = {() =>{
                            this.setState({isLocationMenu : false})
                        }}
                        onSearch = {() => {
                            this._onPressSearch()
                        }}
                    />
                  </View>
              </View>

              {this.hideLocationMenu()}

          </View>

          <RestaurantSearch navigator = {this.props.navigator} params1 = {this.state.params}/>
          {this.showDropDown()}

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
    //   backgroundColor:'lightgray',
        backgroundColor:'#652D6C',
    },
    dropView:{
        width: 100,
        height: 60,
        backgroundColor: '#652D6C',
        position:'absolute',
        left: 0,
        top: 90,
        justifyContent:'center',
        alignItems: 'center',
    },
});

export default RestaurantNav
