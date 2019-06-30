import React from 'react';
import {View, ActivityIndicator} from 'react-native';


const Spinner = ({size}) =>{
    return(
        <View style={styles.spinnnerStyle}>
            <ActivityIndicator size={size || 'large'}/>
        </View>     
    );
};
const styles = {
    spinnnerStyle:{
        flex:1,
        justifyContent:'center'
    }
};


export { Spinner };