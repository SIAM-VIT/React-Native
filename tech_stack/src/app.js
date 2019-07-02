import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';

const App = () => { 
    render(
        <Provider store={createStore(reducers)}>
            <Header headerText = "Tech Stack" />
        </Provider>
    );
 };

 export default App;