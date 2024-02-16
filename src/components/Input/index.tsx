import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DEFAULT_ICON_SIZE} from '../../utils/sizes';

interface InputProps {
  placeholder?: string;
  onChangeText: (x: string) => void;
}

const Input: React.FunctionComponent<InputProps> = ({
  onChangeText,
  ...rest
}) => {
  return (
    <View style={styles.wrapper}>
      <MaterialCommunityIcons
        name="magnify"
        size={DEFAULT_ICON_SIZE}
        color="#6D6A75"
      />
      <TextInput onChangeText={onChangeText} {...rest} style={styles.input} />
    </View>
  );
};

export default Input;
