//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView,  ListView, ActivityIndicator, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Image, Navigator, AsyncStorage } from 'react-native';
import SearchRestaurantCell from '../cell/SearchRestaurantCell'
import RestaurantDetail from './RestaurantDetail'
import RestaurantInfo from '../Logic/Model/RestaurantInfo'

const {width, height} = Dimensions.get('window');

var isLocationSearch = true

var resturantList = [
  {
    id: "fsqi-4471bf9af964a5209c331fe3",
    name: "Jack the Horse Tavern",
    lat: "40.69993286239937",
    lng: "-73.9936975351119",
    formattedAddress: "66 Hicks St (at Cranberry)",
    distance: "531",
    tel: "123",
    open: "123",
    rating: "8.8",
    hasMenu: true,
    type: "American Restaurant",
    priceTier: "3",
    likes: "5638",
    photoUrl: "https://irs1.4sqi.net/img/general/320x160/48623284_fqbPs5xy6jImyJu6U2w_xkkR7lilKCVfZEE8qSC66WU.jpg"
  },

];

// create a component
class RestaurantTableView extends Component {

    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2});
        this.state = {
            dataSource:ds.cloneWithRows(resturantList),
            isLocationSearch: true,
        };
    }

    componentWillMount() {
        this.getsearchRestaurantsCall();
    }
    getsearchRestaurantsCall(){
        if(!isLocationSearch){
            
        }
    }

    _onPressCell = () => {
        this.props.navigator.push({
            name:"restaurantDetail"
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource = {this.state.dataSource}
                    renderRow = {(data) => <SearchRestaurantCell rowdata = {data} onPressClicked = {this._onPressCell}/>}
                    renderFooter = {() => <View style = {{alignItems:'center', justifyContent:'center'}}><Text style = {{fontSize:13,color:'gray', marginTop:10}}>No more data...</Text></View>}
                    onEndReached = {() => <View style = {{height: 10, backgroundColor:'yellow'}}/>}
                />
            </View>
        );
    }

    
}



// define your styles
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
});

//make this component available to the app
export default RestaurantTableView;
