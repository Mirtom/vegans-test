import React from 'react';
import {StyleSheet} from 'react-native';
import {Normalize} from '../../utils/normalize';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    borderRadius: Normalize(25),
    paddingHorizontal: 20,
    paddingVertical: 11,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: Normalize(180),
    height: Normalize(20),
  },
});
