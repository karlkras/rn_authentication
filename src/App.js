import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import { firebaseConfig } from './utils/config';
import LoginForm from './components/LoginForm';
import LogoutForm from './components/LogoutForm';

class App extends Component {
    constructor() {
        super();

        this.state = {
            loggeIn: false
        };
    }

    componentWillMount() {
        firebase.initializeApp(firebaseConfig);
        
        firebase.auth().onAuthStateChanged((user) => {
            
            const loggedInFlag = user !== null;

            console.log('authUserChanged', loggedInFlag);
            this.setState({ loggedIn: loggedInFlag });
        });
    }

    showForm = () => (
        this.state.loggeIn ? <LogoutForm /> : <LoginForm />
    );

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                {this.showForm()}
            </View>
        );
    }
}

export default App;
