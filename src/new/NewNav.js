import React, { Component } from 'react'
import { Navigator, Text, StyleSheet, Dimensions, View, ScrollView, Button, Image, TouchableOpacity, Slider,TextInput,  } from 'react-native'


const{width, height} = Dimensions.get('window');


export default class NewNav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedIndex: 0,
      slider1: 0.7,
      slider2: 0.7,
      slider3: 0.7,
      slider4: 0.7,
    }
    this._onPressBack = this._onPressBack.bind(this);
  }

  _onPressBack(){
      this.props.navigator.pop();
  }
  
  render () {
    return (
        <View style = {styles.wrapper}>
            <View style = {styles.navview}>
                <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>New Log</Text>
                <TouchableOpacity onPress = {this._onPressBack} style = {styles.cancel}>
                    <Text style = {{marginTop:10, color:'white', fontSize:15,}}>Cancel</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>

              <View style = {{flex:1, flexDirection:'column', padding:15,}}>
                  <Text style = {{color:'dimgray', marginTop:10}}>OVERALL RATING</Text>
                  <View style = {{flexDirection:'row', width:width, alignItems:'center', marginTop: 5}}>
                    <Text style = {{color:'black', fontSize:14}}>Overall</Text>
                    <Slider
                        value={this.state.slider1}
                        onValueChange={(value) => this.setState({slider1:value})} 
                        style = {{width:width*2/3, position:'absolute', right:55 }}
                        maximumTrackTintColor = {'#652D6C'}/>
                    {this.renderImage1()} 
                  </View>
                
                  <Text style = {{color:'dimgray', marginTop:30}}>OVERALL COMMENT</Text>
                
                  <TouchableOpacity onPress = {this._onPressComment}>
                      <TextInput underlineColorAndroid = 'transparent' placeholder = 'Comment' editable = {false} style = {styles.textinput}/>          
                  </TouchableOpacity>

                  <View style = {{flexDirection:'row', width:width, alignItems:'center', marginTop: 15}}>
                    <Text style = {{color:'black', fontSize:14}}>Ambiance</Text>
                    <Slider
                        value={this.state.slider2}
                        onValueChange={(value) => this.setState({slider2:value})} 
                        style = {{width:width*2/3+10, position:'absolute', right:55 }}
                        maximumTrackTintColor = {'#652D6C'}/>
                    {this.renderImage2()}
                  </View>

                  <View style = {{flexDirection:'row', width:width, alignItems:'center', marginTop: 15}}>
                    <Text style = {{color:'black', fontSize:14}}>Service</Text>
                    <Slider
                        value={this.state.slider3}
                        onValueChange={(value) => this.setState({slider3: value})} 
                        style = {{width:width*2/3+10, position:'absolute', right:55 }}
                        maximumTrackTintColor = {'#652D6C'}/>
                    {this.renderImage3()}
                  </View>

                  <View style = {{flexDirection:'row', width:width, alignItems:'center', marginTop: 15}}>
                    <Text style = {{color:'black', fontSize:14}}>Value</Text>
                    <Slider
                        value={this.state.slider4}
                        onValueChange={(value) => this.setState({slider4:value})} 
                        style = {{width:width*2/3+10, position:'absolute', right:55 }}
                        maximumTrackTintColor = {'#652D6C'}/>
                    {this.renderImage4()}
                  </View>

                  <TextInput 
                      underlineColorAndroid = 'transparent'
                      multiline = {true}
                      maxLength = {100}
                      placeholder = 'Comments (in 100 chars)' 
                      style = {styles.commentText}/>
                  
                  <Text style = {{marginTop:20}}>DISHES</Text>

                  <TouchableOpacity onPress = {this._onPressButton} style = {styles.button}>
                      <Text style = {{color:'white', fontSize:16}}>Add Dish</Text>   
                  </TouchableOpacity>

                  <Text style = {{marginTop:30}}>OTHER PHOTOS</Text>

                  <TouchableOpacity>
                      <Image source = {require('../images/add_photo.png')} style = {{width:40, height:40, marginTop:10,}} />
                  </TouchableOpacity>

                  <View style = {{flexDirection:'row', width:width-30, height:60, alignItems:'center', justifyContent:'center', marginTop:30}}>
                      <TouchableOpacity  onPress = {this._onPressFacebook} style = {{alignItems:'center', justifyContent:'center', width: 85}}>
                           <Image source = {require('../images/facebook_normal.png')} style={styles.facebook}/>
                      </TouchableOpacity>
                      <TouchableOpacity  onPress = {this._onPressTwitter} style = {{alignItems:'center', justifyContent:'center', width: 85}}>
                          <Image source = {require('../images/twitter_normal.png')} style={styles.facebook}/>
                      </TouchableOpacity>
                      <TouchableOpacity  onPress = {this._onPressSina} style = {{alignItems:'center', justifyContent:'center', width: 85}}>
                          <Image source = {require('../images/sina_normal.png')} style={styles.facebook}/>
                      </TouchableOpacity>
                      <TouchableOpacity  onPress = {this._onPressPinterest} style = {{alignItems:'center', justifyContent:'center', width: 85}}>
                          <Image source = {require('../images/pinterest_normal.png')} style={styles.facebook}/>
                      </TouchableOpacity>
                 </View>

                 <View style = {{flexDirection:'row', flex:1}}>
                    <TouchableOpacity onPress = {this._onPressFavorite} style = {styles.button1}>
                        <Text style = {{color:'white', fontSize:16}}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {this._onPressDiscover} style = {styles.button1}>
                        <Text style = {{color:'white', fontSize:16}}>Post</Text>
                    </TouchableOpacity>
                </View>



              </View>
            </ScrollView>
        </View>
    );
  }

    renderImage1() {
        if(this.state.slider1 ==  1){
            return (
                <Image source = {require('../images/smile_5.png')} style = {{width:30, height:30, position:'absolute', right:25}} /> 
            );
        }else if(this.state.slider1 > 0.75){
            return(
                <Image source = {require('../images/smile_4.png')} style = {{width:30, height:30, position:'absolute', right:25}} />
            );
        }else if(this.state.slider1 > 0.5){
            return(
                <Image source = {require('../images/smile_3.png')} style = {{width:30, height:30, position:'absolute', right:25}} />
            );
        }else if(this.state.slider1 > 0.25){
            return(
                <Image source = {require('../images/smile_2.png')} style = {{width:30, height:30, position:'absolute', right:25}} />
            );
        }else{
            return(
                <Image source = {require('../images/smile_1.png')} style = {{width:30, height:30, position:'absolute', right:25}} />
            );
        }
    }

    renderImage2() {
        if(this.state.slider2 ==  1){
            return (
                <Image source = {require('../images/smile_5.png')} style = {{width:30, height:30, position:'absolute', right:25}} /> 
            );
        }else if(this.state.slider2 > 0.75){
            return(
                <Image source = {require('../images/smile_4.png')} style = {{width:30, height:30, position:'absolute', right:25}} />
            );
        }else if(this.state.slider2 > 0.5){
            return(
                <Image source = {require('../images/smile_3.png')} style = {{width:30, height:30, position:'absolute', right:25}} />
            );
        }else if(this.state.slider2 > 0.25){
            return(
                <Image source = {require('../images/smile_2.png')} style = {{width:30, height:30, position:'absolute', right:25}} />
            );
        }else{
            return(
                <Image source = {require('../images/smile_1.png')} style = {{width:30, height:30, position:'absolute', right:25}} />
            );
        }
    }

    renderImage3() {
        if(this.state.slider3 ==  1){
            return (
                <Image source = {require('../images/smile_5.png')} style = {{width:30, height:30, position:'absolute', right:25}} /> 
            );
        }else if(this.state.slider3 > 0.75){
            return(
                <Image source = {require('../images/smile_4.png')} style = {{width:30, height:30, position:'absolute', right:25}} />
            );
        }else if(this.state.slider3 > 0.5){
            return(
                <Image source = {require('../images/smile_3.png')} style = {{width:30, height:30, position:'absolute', right:25}} />
            );
        }else if(this.state.slider3 > 0.25){
            return(
                <Image source = {require('../images/smile_2.png')} style = {{width:30, height:30, position:'absolute', right:25}} />
            );
        }else{
            return(
                <Image source = {require('../images/smile_1.png')} style = {{width:30, height:30, position:'absolute', right:25}} />
            );
        }
    }

    renderImage4() {
        if(this.state.slider4 ==  1){
            return (
                <Image source = {require('../images/smile_5.png')} style = {{width:30, height:30, position:'absolute', right:25}} /> 
            );
        }else if(this.state.slider4 > 0.75){
            return(
                <Image source = {require('../images/smile_4.png')} style = {{width:30, height:30, position:'absolute', right:25}} />
            );
        }else if(this.state.slider4 > 0.5){
            return(
                <Image source = {require('../images/smile_3.png')} style = {{width:30, height:30, position:'absolute', right:25}} />
            );
        }else if(this.state.slider4 > 0.25){
            return(
                <Image source = {require('../images/smile_2.png')} style = {{width:30, height:30, position:'absolute', right:25}} />
            );
        }else{
            return(
                <Image source = {require('../images/smile_1.png')} style = {{width:30, height:30, position:'absolute', right:25}} />
            );
        }
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
    cancel:{
      position:'absolute',
      left: 10,
      width: 60,
      height: 40,
    },
    commentview:{
        width: width,
        height: 46,
        backgroundColor:'#EFEFF4',
        position:'absolute',
        bottom: 0,
        left: 0,
        justifyContent: 'center',
    },
    textinput:{
        height:25, 
        width:width-40,  
        borderColor:'gray', 
        borderWidth:1,
        borderRadius:3, 
        paddingTop:0,
        paddingBottom:0,
        paddingLeft: 10,
        fontSize:12,
        marginLeft:5,
        marginTop: 10,
    },
    button:{
      width: width - 30,
      height: 35,
      marginLeft: 0,
      marginTop:20,
      borderRadius: 10,
      backgroundColor:'#38B664',
      justifyContent:'center',
      alignItems:'center',
    },
     button1:{
      width: (width-30)/2-10,
      height: 35,
      marginLeft: 5,
      marginTop:20,
      borderRadius: 10,
      backgroundColor:'#38B664',
      justifyContent:'center',
      alignItems:'center',
    },
    facebook:{
      width:56,
      height:56,
      resizeMode:'contain'
    },
    commentText:{
        width: width-30, 
        backgroundColor: '#EFEFF4', 
        fontSize:14, 
        height: 80, 
        marginTop:20,
        paddingLeft: 5,
        paddingRight: 5
    }
});

