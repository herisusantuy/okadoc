import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../styles/default';
import styles from '../../styles/customButton';

const CustomButton = props => {
  let color =
    props.title == 'Multiply X & Y'
      ? colors.green
      : props.title == 'Sum X & Y'
      ? colors.blue
      : props.title == 'First N Prime'
      ? colors.orange
      : colors.red;

  return (
    <TouchableOpacity
      onPress={props.onPressButton}
      style={[styles.container, {backgroundColor: color}]}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
