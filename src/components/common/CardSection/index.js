import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

export { CardSection };
