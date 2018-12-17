import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, ErrorMsg, Spinner } from '../common';

class LoginForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            error: '',
            busy: false
        };

        this.onChangePassword = this.onChangePassword.bind(this);
        this.onLoginButtonPress = this.onLoginButtonPress.bind(this);
    }

    onChangePassword(password) {
        this.setState({
            password
        });
    }

    onLoginButtonPress() {
        this.setState({ error: '', busy: true });
        const { email, password } = this.state;
        
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
            .then(() => {
                return firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    this.onLoginSuccess();
                })
                .catch(() => {
                    firebase.auth().createUserWithEmailAndPassword(email, password)
                        .then(() => {
                            this.onLoginSuccess();
                        })
                        .catch(error => {
                            this.onLoginFail(error);
                        });
                });
            });
    }

    onLoginSuccess = () => {
        this.setState({ email: '', password: '', busy: false });
    }

    onLoginFail = (error) => {
        this.setState({ error: error.message, busy: false });
    }

    renderButton = () => {
        if (this.state.busy) {
            return <Spinner size="small" />;
        }
        return (
            <Button onPress={this.onLoginButtonPress}>
                Log in
            </Button>
        );
    }

    render() {
        const { error } = this.state;
        return (
            <Card>
                <CardSection >
                    <Input
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        autoCorrect={false}
                        autoCapitalize={'none'}
                        placeholder={'user@domain.com'}
                        label={'Email'}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        value={this.state.password}
                        secureTextEntry
                        placeholder={'password'}
                        onChangeText={this.onChangePassword}
                        autoCorrect={false}
                        autoCapitalize={'none'}
                        label={'Password'}
                    />
                </CardSection>
                <ErrorMsg message={error} />
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
