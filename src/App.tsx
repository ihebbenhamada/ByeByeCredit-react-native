import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {MainNavigation} from './navigation';
import {store} from './redux/store';
import {Settings} from "react-native-fbsdk-next";

const App: FC<{}> = () => {
    Settings.initializeSDK();
    return (
        <Provider store={store}>
            <MainNavigation/>
        </Provider>
    );
};

export default App;
