import React,{Component} from 'react';
import {View,Text} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{

    state={loggedIn:null};
        //Life Cycle Method
componentDidMount()
                {   // Your web app's Firebase configuration
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

                    firebase.auth().onAuthStateChanged((user)=>{
                    if(user){
                        this.setState({loggedIn:true});
                    }
                    else{
                        this.setState({loggedIn:false});
                    }
                });                
            }
            renderContent(){

                switch(this.state.loggedIn){
                    case true:
                        return (
                        <Button onPress={()=>firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    );
                    case false:
                        return <LoginForm />
                    default:
                        return <Spinner size='large' />;
                }
            }

            render(){
                return(
                    <View>
                        <Header headerText="Authentication" ></Header>
                     
                            {this.renderContent()}
                       
                    </View>
                );
            }
}

export default App;