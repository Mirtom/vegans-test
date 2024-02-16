import React from 'react';
import {Text as RNText, ViewStyle, StyleSheet} from 'react-native';
import styles from './style';
import {Normalize} from '../../utils/normalize';

interface ITextProps {
  children: string;
  color?: string;
  size?: number;
  style?: ViewStyle | ViewStyle[];
  numberOfLines?: number;
  strong?: boolean;
}

const Text: React.FunctionComponent<ITextProps> = ({
  children,
  color = '#37323E',
  size = Normalize(18),
  numberOfLines = undefined,
  style,
  strong,
}) => {
  const dynamicStyle = {
    color,
    fontSize: size,
    fontFamily: strong ? 'Quicksand-Medium' : 'Quicksand-Regular',
  };

  return (
    <RNText
      style={StyleSheet.flatten([styles.textStyle, dynamicStyle, style])}
      numberOfLines={numberOfLines}>
      {children}
    </RNText>
  );
};

export default Text;
