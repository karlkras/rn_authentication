import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Card, CardSection, ErrorMsg, Spinner } from '../common';

class LogoutForm extends Component {
    constructor() {
        super();

        this.state = {
            error: '',
            busy: false
        };
    }

    onLogoutButtonPress = () => {
        this.setState({ error: '', busy: true });
        firebase.auth().signOut()
            .then(() => {
                this.setState({ busy: false });
            })
            .catch((error) => {
                this.setState({ busy: false, error: error.message });
            });
    }

    renderButton = () => {
        if (this.state.busy) {
            return <Spinner size="small" />;
        }
        return (
            <Button onPress={this.onLogoutButtonPress}>
                Log out
            </Button>
        );
    }

    render() {
        const { error } = this.state;
        return (
            <Card>
                <ErrorMsg message={error} />
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

export default LogoutForm;
