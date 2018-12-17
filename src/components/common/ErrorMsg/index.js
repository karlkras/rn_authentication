import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const ErrorMsg = ({ message }) => {
    return (
        <Text style={styles.textStyle} >{message}</Text>
    );
};

export { ErrorMsg };
