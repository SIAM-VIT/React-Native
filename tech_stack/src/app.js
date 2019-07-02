import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
const App = () => { 
    render(
        <Provider store={createStore}>
            <View> Hi </View>
        </Provider>
    );
 };

 export default App;