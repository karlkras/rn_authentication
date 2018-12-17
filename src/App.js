import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, CardSection, Spinner } from './components/common';
import { firebaseConfig } from './utils/config';
import LoginForm from './components/LoginForm';

class App extends Component {
    constructor() {
        super();

        this.state = {
            loggeIn: false
        };

        this.renderContent = this.renderContent.bind(this);
    }

    componentWillMount() {
        firebase.initializeApp(firebaseConfig);
        
        firebase.auth().onAuthStateChanged((user) => {
            const loggedInFlag = user !== null;

            console.log('authUserChanged', loggedInFlag);
            this.setState({ loggedIn: loggedInFlag });
        });
    }

    renderLogoutButton = () => (
        <Card>
            <CardSection>
                <Button>
                    Log Out
                </Button>
            </CardSection>
        </Card>
    );

    renderSpinner = () => (
        <Card>
            <CardSection>
                <Spinner />
            </CardSection>
        </Card>
    );

    renderContent() {
        console.log('loggedin State:', this.state.loggeIn);
        switch (this.state.loggeIn) {
            case true:
                return this.renderLogoutButton();

            case false:
                return <LoginForm />;

            default :
                return this.renderSpinner();
        }
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
