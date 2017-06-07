import React,{Component} from 'react';
import {StyleSheet, 
    View, 
    Text, 
    Image,
    Button, 
    TouchableOpacity, 
    Navigator,
    Dimensions,
    AsyncStorage} from 'react-native';
import API from '../service/API'

const bg = require('../images/login_bg.png');
const logo = require('../images/LOGO.png');
const facebookicon = require('../images/fb_login.png')
const {width,height} = Dimensions.get('window');

const FBSDK = require('react-native-fbsdk');
const {
  LoginManager,
  SharingDialog,
  AccessToken,
  LoginButton,
} = FBSDK;
const TAG = 'Guide.login'

var ok = false;
var token = '';
var newregister = false;
var userInfo = [];
var REQUEST_URL = ''

export default class LoginPage extends Component{


    constructor(props){
        super(props);
    }
    
    _handleLogin = () =>{
         const { dispatchLogin, } = this.props
         LoginManager.logInWithReadPermissions([ 'email', 'public_profile', 'user_friends'])
         .then((result) => result.isCancelled ? null : AccessToken.getCurrentAccessToken())
         .then((data) => {
             const token = data.accessToken.toString();
             if (token) {
                 console.log(TAG, token);
                 {this.dispatchLogin(token)};
             }
         }).catch((e) => {
           console.log(TAG, e)
         })

        //AsyncStorage.setItem('FoodilogUserID', 'DMEGD7UCPGSEUCG5YRNH_G')
        //AsyncStorage.setItem('FoodilogToken', '9RGMJ_8GMQS_UUS4BF_DPQ')
        //this.props.navigator.push({
        //    name: "tabcontainer"
        //})

    }

    dispatchLogin(fbToken){
        REQUEST_URL = API.SERVER_URL + API.SERVICE_PORT + API.LOGIN_URL + '?access_token=' + fbToken
        console.log(REQUEST_URL);
        fetch(REQUEST_URL, {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
            }, 
        })
        .then((response) => response.json())
        .then((responseData) => {
            console.log('Download data with facebook Token from database')
            console.log(responseData)
            ok = responseData.ok;
            if(ok == true){
                if(responseData.newregister){
                    newregister = responseData.newregister;
                    console.log('newregister ->' + newregister);
                }
                if(responseData.user){
                    userInfo = responseData.user;
                    console.log(userInfo)
                }else{
                    alert('Login Failed, Cannot get user info');
                    return;
                }
                if(responseData.token){
                    token = responseData.token;
                }else{
                    alert('Login Failed, Token error');
                }
                if(userInfo.account){
                    AsyncStorage.setItem('FoodilogUserID', userInfo.account);
                    AsyncStorage.setItem('FoodilogToken', token);              //We set the token as manually. We have to change this value after.
                    // AsyncStorage.setItem('FoodilogUserID', 'DMEGD7UCPGSEUCG5YRNH_G')
                    // AsyncStorage.setItem('FoodilogToken', '9RGMJ_8GMQS_UUS4BF_DPQ')
                    console.log('FoodilogUserID ->' + userInfo.account);
                    console.log('FoodilogToken -> ' + token );
                }else{
                    alert('Login Failed, ID error');
                }

                if(newregister){
                    this.props.navigator.push({
                        name: "guideprofile"
                    })
                }else{
                    this.props.navigator.push({
                        name: "tabcontainer"
                    })
                }
            }else{
                LoginManager.logOut();
                this.props.navigator.push({
                    name: 'login'
                })
                AsyncStorage.removeItem('FoodilogUserID');
                AsyncStorage.removeItem('FoodilogToken');

                alert('Login Failed, Server internal error');
            }
            
        })
        .done();
    }


    render(){
        return(
            <View style = {styles.container}>
                <Image
                    style = {styles.image} source = {bg} />
                <Image 
                    style = {styles.logo} source = {logo}/>
                
                <View style = {styles.facebookContainer}>
                    <TouchableOpacity onPress = {this._handleLogin}>
                        <Image style = {styles.fbbutton} source = {facebookicon}/>
                    </TouchableOpacity>
                </View>


            </View>
        );
    }
}


const styles = StyleSheet.create ({
    container:{
        flexGrow:1,
        alignItems:'center',
        justifyContent: 'center',
    },
    image: {
       flex: 1,
       position:'absolute',
       width: width,
       height: height,
       resizeMode: 'cover',
    },
    logo: {
        width: 150,
        height: 50,
        marginBottom:200,
        resizeMode:'contain',
    },
    fbbutton: {
        width: 200,
        height: 60,
        resizeMode:'contain'
    },
    facebookContainer: {
        height: 40,
        bottom: 70,
        position:'absolute',
    },



})
