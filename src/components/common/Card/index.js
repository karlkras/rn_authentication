import React from 'react';
import { View } from 'react-native';
import styles from './syles';

const Card = (props) => (
    <View style={styles.containerStyle} >
        {props.children}
    </View>
);

export { Card };
