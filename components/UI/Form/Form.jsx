import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Form = ({ children, title }) => {
  return (
    <View style={styles.form}>
      <Text style={styles.form__title}>{title}</Text>
      <View style={styles.form__inputs}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 320,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 32,
  },
  form__title: {
    marginBottom: 24,
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 28,
  },
  form__inputs: {
    width: '100%',
    alignItems: 'center',
  },
});