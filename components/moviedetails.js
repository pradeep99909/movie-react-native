import React from 'react'
import {View,Text,Button,ScrollView,Image,StyleSheet,TouchableOpacity} from 'react-native'
import Header from './header'
import key from './key/api'
import Cast from './movie/cast';
import MovieBox from './moviebox';

class MovieDetails extends React.Component{
    

    constructor(props){
        super(props)
        this.state={
            movie_details:null,
            error:null,
            cast:null,
            movies:null
        }
    }

    get_movie_details=()=>{
        fetch("https://api.themoviedb.org/3/movie/"+this.props.match.params.id+"?api_key=67da789cca6db17365f6961b7fd6c59d&language=en-US").then(
                            file=>file.json().then(
                                data=>this.setState(
                                    (prev)=>({...prev,movie_details:data})
                                )
                            ).catch(
                                error=>this.setState(
                                    (prev)=>({...prev,error:error})
                            )
                        )        
        )
    }

    get_cast=()=>{
        fetch("https://api.themoviedb.org/3/movie/"+this.props.match.params.id+"/credits?api_key="+key).then(
                                        file=>file.json().then(
                                            data=>this.setState(
                                                prev=>({...prev,cast:data.cast})
                                            ),
                                            
                                        )
                                    )
        
    }

    get_movies=()=>{
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/similar?api_key=${key}&language=en-US&page=1`).then(
                                        file=>file.json().then(
                                            data=>this.setState((prev)=>({...prev,movies:data.results}))
                                        )
                                    )
        
    }

    UNSAFE_componentWillMount(){
        this.get_movie_details()
        this.get_cast()
        this.get_movies()
        
    }

    componentDidMount(){
        this.get_movie_details()
        this.get_cast()
        this.get_movies()
        
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        if (this.props !== prevProps) {
            this.get_movies()
            this.get_movie_details()
            this.get_cast()
            //this.props.scroll.scrollTo({x: 0, y: 0, animated: true});
        }
    }

    // UNSAFE_componentWillUpdate(){
    //     this.get_movie_details()
    //     this.get_cast()
    //     this.get_movies()
    // }
    goToTop = () => {
        //this.scroll.scrollTo({x: 0, y: 0, animated: true});
        //alert(JSON.stringify(this))
    }
    
    render(){
        const movie = this.state.movie_details
        const {cast,movies}  = this.state
        return(
            <View style={{backgroundColor:'black',flex:1}}>
                <Header />
                
                    {   
                        this.state.movie_details!==null
                        ?
                        
                        <ScrollView contentContainerStyle={{padding:20}}  >
                            <Image source={{uri:`http://image.tmdb.org/t/p/w500${movie.poster_path}`}} style={{width:300 , height: 450,alignSelf:'center'}} />
                            <Text style={{color:'white',fontSize:18,paddingTop:20,fontWeight:'bold'}}>{movie.title}</Text>
                            <Text style={{color:'white'}}>{movie.release_date.slice(0,4)}</Text>
                            <Text style={{paddingBottom:20,color:'white'}}>{!!movie.production_companies?movie.production_companies[0].name:null}</Text>
                            <Text style={{color:'white'}}>{movie.overview}</Text>
                            <Text style={styles.head}>Cast</Text>
                            <ScrollView horizontal={true} style={{flexDirection:'row',paddingVertical:10,marginHorizontal:-20}}>
                                {
                                    cast!==null
                                    ?
                                    cast.map((data,key)=>{ return <Cast key={key} actor_image={data.profile_path} actor={data.name} character={data.character} />})
                                    :
                                    <Text style={{flex:1,color:'white',textAlign:'center',textAlignVertical:'center'}}>Loading...</Text>
                                }
                            </ScrollView>
                            <Text style={styles.head}>Genres</Text>
                            <View style={{flex:1,flexWrap:'wrap',flexDirection:"row"}}>
                            {
                                
                                movie.genres.map((data,key)=>{return <TouchableOpacity style={{padding:5,marginRight:10,marginBottom:10,borderColor:'white',borderWidth:0.5}} key={key}><Text style={{color:'white'}}>{data.name}</Text></TouchableOpacity>})
                        
                            }
                            </View>
                            <Text style={styles.head}>Similar Movies</Text>
                            <ScrollView horizontal={true} style={{flexDirection:'row',paddingVertical:10,marginHorizontal:-20}}>
                                {
                                    movies!==null
                                    ?
                                    movies.map((data,key)=><MovieBox scroll={this.scroll} key={key} id={data.id} image={data.poster_path} title={data.title} date={data.release_date?data.release_date.slice(0,4):null} />)
                                    :
                                    <Text style={{flex:1,color:'white',textAlign:'center',textAlignVertical:'center'}}>Loading...</Text>
                                }
                            </ScrollView>
                        </ScrollView>
                        :
                        <Text style={{flex:1,color:'white',textAlign:'center',textAlignVertical:'center'}}>Loading...</Text>
                    }
                
            </View>
            
        )
    }
}

const styles=StyleSheet.create({
    head:{
        color:'white',
        fontWeight:'bold',
        fontSize:18,
        paddingVertical:10
    }
})

export default MovieDetails