import React, { useState } from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useDispatch } from 'react-redux';
import { resetFilter } from '../../../redux/actions/userAction/userAction';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Select = ({ children, onSelectClick, btnValue, filter }) => {
  const dispatch = useDispatch();
  const [focus, setFocus] = useState(false);

  const selectOnBlur = () => {
    setFocus(false);
    dispatch(resetFilter());
  };

  return (
      <Pressable
        onBlur={selectOnBlur}
        onPress={() => {
          setFocus(true);
          onSelectClick(btnValue);
        }}
        style={[styles.select, focus ? styles.select_active : null]}
      >
        <Text
          style={[
            styles.select__title,
            focus ? styles.select__title_active : null,
          ]}
        >
          {children}
        </Text>
        <View>
          <Svg
            width="9"
            height="6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="m8.5 4.243-1.06 1.06-3.183-3.182-3.182 3.182-1.06-1.06L4.257 0 8.5 4.243Z"
              fill={filter === 'desc' ? '#41522e' : '#000'}
              fillOpacity={filter === 'desc' ? '1' : '.32'}
            />
          </Svg>
          <Svg
            width="9"
            height="7"
            viewBox="0 0 9 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M8.5 1.83245L7.43934 0.77179L4.25736 3.95377L1.07538 0.77179L0.0147181 1.83245L4.25736 6.07509L8.5 1.83245Z"
              fill={filter === 'asc' ? '#41522e' : '#000'}
              fillOpacity={filter === 'asc' ? '1' : '.32'}
            />
          </Svg>
        </View>
      </Pressable>
  );
};

const styles = StyleSheet.create({
  select: {
    background: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    padding: 8,
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    gap: 9,
    flexDirection: 'row',
  },
  select_active: {
    borderColor: '#41522e',
  },
  select__title: {
    marginRight: 10,
    color: '#99A0A3',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
  },
  select__title_active: {
    color: '#41522e',
  },
});
