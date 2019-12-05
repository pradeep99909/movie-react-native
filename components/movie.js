import React from 'react'
import { View,StyleSheet,ScrollView, TextInput } from 'react-native'
import MovieBox from './moviebox'

class Movie extends React.Component{
  constructor(){
    super()
    this.state={
      movies:null,
      search_input:''
    }
  }

  handle=(text)=>{
        this.setState({ search_input: text})
        if(this.state.search_input!==''){
          fetch("https://api.themoviedb.org/3/search/movie?api_key=67da789cca6db17365f6961b7fd6c59d&page=1&query="+this.state.search_input).then(
          (file)=>{
            file.json().then(
              data=>this.setState({movies:data.results})
            )
          }
        )
      }
      else{
        this.get_data()
      }
  }

  get_data=()=>{
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=67da789cca6db17365f6961b7fd6c59d&certification_country=IN&sort_by=popularity.desc&include_adult=false&include_video=false&page=1").then(
      (file)=>{
        file.json().then(
          data=>this.setState({movies:data.results})
        )
      }
    )
    //alert(this.state.movies)
  }

  UNSAFE_componentWillMount(){
    this.get_data()
  }
  componentDidMount(){
    this.get_data()
  }

  render(){
    return(
      <View style={styles.movie} >
        <TextInput style={styles.search_input} placeholder="Search.." onChangeText={this.handle} placeholderTextColor="#878787" selectionColor='white' />
        {
          this.state.movies!==null && this.state.movies!==""
          ?
          this.state.movies.map(
            (data,key)=>{
              return <MovieBox key={key} id={data.id} image={data.poster_path} title={data.title} date={data.release_date?data.release_date.slice(0,4):null} />
            }
          )
          :
          null

        }
      </View>
    )
  }
}

const styles=StyleSheet.create({
    movie:{
        justifyContent:'center',
        alignItems:'center',
    },
    search_input:{
      flex:1,
      width:'100%',
      backgroundColor:'#242424',
      fontSize:12,
      color:'white'
    }
  })


export default Movie