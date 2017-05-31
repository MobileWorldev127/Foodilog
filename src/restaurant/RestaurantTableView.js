//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView,  ListView, ActivityIndicator, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Image, Navigator, AsyncStorage } from 'react-native';
import SearchRestaurantCell from '../cell/SearchRestaurantCell'
import RestaurantDetail from './RestaurantDetail'
import RestaurantInfo from '../Logic/Model/RestaurantInfo'
import API from '../service/API'

const {width, height} = Dimensions.get('window');

var isLocationSearch = true

var resturantList = [];

// create a component
class RestaurantTableView extends Component {

    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2});
        this.state = {
            dataSource:ds.cloneWithRows(resturantList),
            isLocationSearch: true,
            latitude: null,
            longitude: null,
            error: null,
        };
    }

    componentWillMount() {
        this.getsearchRestaurantsCall();
    }
    getsearchRestaurantsCall(){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                })
                AsyncStorage.getItem('FoodilogToken').then((value) => {
                    // var REQUEST_URL = API.SERVER_URL + API.SERVICE_PORT + API.SEARCH_URL + '?ll=' + position.coords.latitude + ',' + position.coords.longitude + '&rank=distance' + '&token=' + value;
                    var REQUEST_URL = API.SERVER_URL + API.SERVICE_PORT + API.SEARCH_URL + '?ll=' + '37.33233141' + ',' + '-122.03121860' + '&rank=distance' + '&token=' + value;
                    fetch(REQUEST_URL, {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type' : 'application/json',
                        },
                    })
                    .then((response) => response.json())
                    .then((responseData) => {
                        if(responseData.ok == true){
                            this.setState({
                                dataSource: this.state.dataSource.cloneWithRows(responseData.restaurants)
                            })
                        }
                    })
                })
            },
            (error) => this.setState({error: error.message}),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource = {this.state.dataSource}
                    renderRow = {(data) => <SearchRestaurantCell rowdata = {data} navigator = {this.props.navigator}/>}
                    renderFooter = {() => <View style = {{alignItems:'center', justifyContent:'center'}}><Text style = {{fontSize:13,color:'gray', marginTop:10}}>No more data...</Text></View>}
                    onEndReached = {() => <View style = {{height: 10, backgroundColor:'yellow'}}/>}
                    enableEmptySections = {true}  />
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
