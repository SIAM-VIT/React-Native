import React,{Component} from 'react';
import {View,Text} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{
    //Life Cycle Method
componentDidMount(){
    
  // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyBFf9wwML6O6Dpp65jd_4LO-6NWqF6fyjk",
            authDomain: "authentication-ca1da.firebaseapp.com",
            databaseURL: "https://authentication-ca1da.firebaseio.com",
            projectId: "authentication-ca1da",
            storageBucket: "",
            messagingSenderId: "275244024522",
            appId: "1:275244024522:web:3a4b8891c5f5b12f"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        }

    render(){
        return(
            <View>
                <Header headerText="Authentication" ></Header>
                <LoginForm />
            </View>
        );
    }
}

export default App;