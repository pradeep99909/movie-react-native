import React from 'react'
import { View,StyleSheet,Text,ImageBackground } from 'react-native'
import { Link } from "react-router-native"
class MovieBox extends React.Component{


  render(){
    return(
        <Link to={`/movie/${this.props.id}`} style={styles.moviebox}>
          <ImageBackground source={{uri:`http://image.tmdb.org/t/p/w500${this.props.image}`}} style={{flex:1,width:'100%',height:'100%',justifyContent:'flex-end'}} >
              <View>
                <Text style={styles.movieboxtext}>{this.props.title}</Text>
                <Text style={{fontWeight:'normal',fontSize:16,paddingLeft:20,color:'white'}}>{this.props.date}</Text>
              </View>
          </ImageBackground>
        </Link>
    )
  }
}

const styles=StyleSheet.create({
    moviebox:{
        height:500,
        width:350,
        justifyContent:'center',
        alignItems:'center',
        padding:20
    },
    movieboxtext:{
      color:'white',
      fontWeight:'bold',
      fontSize:18,
      paddingTop:5,
      paddingBottom:5,
      paddingLeft:20
    }
    
  })


export default MovieBox