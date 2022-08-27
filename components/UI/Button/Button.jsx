import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export const Button = ({ isValid, onSubmit, title }) => {
  return (
    <Pressable
      style={[styles.button, !isValid ? '' : styles.button_active]}
      onPress={onSubmit}
      disabled={!isValid}
    >
      <Text style={styles.button__text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#41522E',
    width: '100%',
    borderRadius: 4,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  button_active: {
    backgroundColor: '#BE8022',
  },
  button__text: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
  },
});