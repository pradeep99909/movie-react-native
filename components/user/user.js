import React from 'react'
import {View, StyleSheet, Text ,Image,ScrollView,TextInput} from 'react-native'
import Header  from '../header'
import firebase from '../config/config'

class User extends React.Component{
    
    constructor(){
        super()
        this.state={
            details:null,
            image:null
        }
    }

    get_details=()=>{
        if(firebase.auth().currentUser)
        {
            this.setState((prev)=>({...prev,details:firebase.auth().currentUser}))
        }

    }

    get_image=()=>{
        if(firebase.auth().currentUser)
        {
            const storage=firebase.storage().ref()

        const image=storage.child('/profile/images/TAMRXBmHKJdGbwUZNhIH5QZ47cy1.jpg').getDownloadURL().then((url)=>{
            this.setState((prev)=>({...prev,image:url}))

        }).catch(function(error) {
            alert('Error Loading Image')
        });
    }
    }

    UNSAFE_componentWillMount(){
        this.get_details()
        this.get_image()
    }

    componentDidMount(){
        this.get_details()
        this.get_image()
    }
    
    render(){
        const { details } = this.state
        return(
            <View style={styles.container}>
                <Header />
                {
                details!==null
                ?
                <ScrollView contentContainerStyle={{alignItems:"center"}}>
                    <View>
                        <Image source={{uri:this.state.image}} style={{width:150,height:150,borderRadius:150}} />
                    </View>
                    <View>
                        <View>
                            <Text style={{color:'white'}}>Name</Text>
                            <TextInput value={this.state.details.user.displayName}/>
                        </View>
                    </View>
                </ScrollView>
                :null
                }
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        justifyContent:'center'
    }
})

export default User
