import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

const Input = (
    {
        value,
        onChangeText,
        label,
        autoCorrect,
        placeholder,
        autoCapitalize,
        secureTextEntry
    }) => {
    const { inputStyle, containerStyle, labelStyle } = styles;
    const theAutoCorrect = autoCorrect == null ? true : autoCorrect;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                style={inputStyle}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                value={value}
                autoCorrect={theAutoCorrect}
                onChangeText={onChangeText}
                autoCapitalize={autoCapitalize}
            />
        </View>
    );
};

export { Input };
