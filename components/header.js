import React from 'react'
import { View,StyleSheet,Text } from 'react-native'
import { Link } from 'react-router-native'
//import FontAwesome,{RegularIcons} from 'react-native-fontawesome'
import firebase from './config/config'
import Icon from "react-native-vector-icons/FontAwesome";
class Header extends React.Component{
  render(){
    return(
      <View style={styles.header}>
        {/* <Text style={{color:'white',flex:1,textAlign:'center',textAlignVertical:'center'}}>Menu</Text> */}
        {/* <FontAwesome icon={RegularIcons.bars} color="#0f0f0f" style={{flex:1,textAlign:'center',textAlignVertical:'center'}} /> */}
        <Icon name={"bars"} size={30} color="#00ff00" style={{flex:1,textAlign:'center',textAlignVertical:'center'}}/>
        <Link to="/" style={{flex:4}}><Text style={styles.headertext}>Movie</Text></Link>
        <Link to={firebase.auth().currentUser?"/user":"/auth/login"} style={{flex:1}}><Text style={{color:'white',flex:1,textAlign:'center',textAlignVertical:'center'}}>User</Text></Link>
      </View>
    )
  }
}

const styles=StyleSheet.create({
    header:{
      height:70,
      justifyContent:'center',
      flexDirection:'row'
    },
    headertext:{
      fontWeight:'bold',
      fontSize:20,
      color:'#71db77',
      fontStyle:'italic',
      flex:1,
      textAlign:'center',
      textAlignVertical:'center'
    }
  })


export default Header
