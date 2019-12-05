
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

import { Router } from "react-router"

import MovieDetails from './components/moviedetails'
import Header from './components/header'
import Movie from './components/movie';
import User from './components/user/user';
import Login from './components/auth/login'

class Home extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Header />
        <ScrollView contentContainerStyle={{justifyContent:'center'}}>
          <Movie />
        </ScrollView>
      </View>
    )
  }
}

class App extends React.Component{
  render(){
  return (
    <NativeRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/movie/:id" component={MovieDetails} />
      <Route exact path="/user" component={User} />
      <Route exact path="/auth/login" component={Login} />
      {/* <Route exact path="/auth/register" component={Register} /> */}
    </NativeRouter>
  );
  }
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  }
});

// const AppContainer=createStackNavigator(
//   {
//     Home: App,
//   },
//   {
//     initialRouteName: 'Home',
//   }
// )

//export default createAppContainer(AppContainer);
export default App
