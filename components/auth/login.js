import React from 'react'
import {View,StyleSheet,TextInput,Text,Button,TouchableOpacity} from 'react-native'
import firebase from '../config/config'

class Login extends React.Component{
    
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }

    login=()=>{
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(()=>{
            
        })
    }

    handle=(e)=>{
        this.setState(
            (prev)=>({
                ...prev,
                //email:e.target.text
            })
        )
        alert(JSON.stringify(e))
    }

    
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Text style={{fontWeight:'bold',fontSize:25,color:'#71db77',fontStyle:'italic',textAlign:'center',textAlignVertical:'center'}}>Movie</Text>
                </View>
                <View style={styles.input_view}>
                    <Text style={{color:'white',fontSize:20,textAlign:'left',width:300,fontWeight:'bold'}}>Login</Text>
                </View>
                <View style={styles.input_view}>
                    <Text style={styles.input_text}>Email</Text>
                    <TextInput style={{...styles.input,textTransform:'lowercase'}} name="email" selectionColor="white" onChange={this.handle} />
                </View>
                <View style={styles.input_view}>
                    <Text style={styles.input_text}>Password</Text>
                    <TextInput style={styles.input} selectionColor="white" secureTextEntry />
                </View>
                <View style={{width:300}}>
                    <TouchableOpacity style={{marginVertical:10,backgroundColor:'#71db77',color:'white',fontWeight:'bold',width:100,height:40}} onPress={this.login} ><Text style={{flex:1,color:'white',textAlign:'center',textAlignVertical:'center'}}>Login</Text></TouchableOpacity>
                </View>
                
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center'
    },
    input_view:{
        flexDirection:'column',
        paddingVertical:10

    },
    input:{
        width:300,
        height:40,
        borderWidth:0.5,
        borderColor:'white',
        color:'white'
    }
    ,
    input_text:{
        color:'white'
    }
})


export default Login