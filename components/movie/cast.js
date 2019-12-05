import React from 'react'
import { View,StyleSheet,Text,Image } from 'react-native'

class Cast extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{marginLeft:20,flex:1,width:100}}>
                <Image style={{borderRadius:100 / 2,resizeMode: 'cover',height:100,width:100}} source={{uri:this.props.actor_image!==null?`http://image.tmdb.org/t/p/w500${this.props.actor_image}`:"http://www.clker.com/cliparts/d/L/P/X/z/i/no-image-icon-hi.png"}} />
                <View >
                    <Text style={{color:'white',fontWeight:'bold',textAlign:'center'}}>{this.props.actor}</Text>
                    <Text style={{color:'#949494',textAlign:'center'}}>{this.props.character}</Text>
                </View>
            </View>
        )
    }
}


export default Cast