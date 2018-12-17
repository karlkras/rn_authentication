// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

// Make a component
const Header = ({ headerText }) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{headerText}</Text>
        </View>
    );
};

// Make the component available to other parts of the app.
export { Header };
