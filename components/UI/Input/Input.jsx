import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Controller } from 'react-hook-form';
import { TextInputMask } from 'react-native-masked-text';

export const Input = ({ rules, name, control, errors, title }) => {
  if (name === 'date') {
    return (
      <View style={{ width: '100%', alignItems: 'center', marginBottom: 12 }}>
        <Text
          style={[
            styles.form__title,
            errors[name] ? styles.form__title_error : '',
          ]}
        >
          {title}
        </Text>
        <Controller
          control={control}
          rules={rules}
          render={({ field: { onChange, value } }) => (
            <TextInputMask
              type={'datetime'}
              options={{
                format: 'YYYY-DD-MM',
              }}
              value={value}
              onChangeText={onChange}
              style={[
                styles.form__input,
                errors[name] ? styles.form__input_error : '',
              ]}
              on
            />
          )}
          name="date"
        />
        {errors[name] && (
          <Text style={styles.error}>{errors[name]?.message}</Text>
        )}
      </View>
    );
  }

  return (
    <View style={{ width: '100%', alignItems: 'center', marginBottom: 12 }}>
      <Text
        style={[
          styles.form__title,
          errors[name] ? styles.form__title_error : '',
        ]}
      >
        {title}
      </Text>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[
              styles.form__input,
              errors[name] ? styles.form__input_error : '',
            ]}
            onChangeText={onChange}
            value={value}
          />
        )}
        name={name}
      />
      {errors[name] && (
        <Text style={styles.error}>{errors[name]?.message}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    color: '#EB1717',
    marginTop: 7,
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 14,
    alignSelf: 'flex-start',
  },
  form__title: {
    alignSelf: 'flex-start',
    color: '#424242',
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 19,
  },
  form__title_error: {
    color: '#EB1717',
  },
  form__input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#c9cacc',
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 7,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#424242',
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 20,
  },
  form__input_error: {
    color: '#EB1717',
  },
});
