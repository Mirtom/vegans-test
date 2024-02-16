import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {Normalize} from '../../utils/normalize';
import {DEFAULT_ICON_SIZE} from '../../utils/sizes';
const {Navigation} = require('react-native-navigation');
const {statusBarHeight, topBarHeight} = Navigation.constantsSync();

export default StyleSheet.create({
  wrapper: {
    height: Normalize(Platform.OS === 'android' ? 80 : 100),
    backgroundColor: 'white',
    paddingTop: statusBarHeight,
    paddingHorizontal: Normalize(20),
    paddingBottom: Normalize(20),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  iconWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Normalize(DEFAULT_ICON_SIZE * 2),
  },
  logo: {
    height: undefined,
    width: 106,
    aspectRatio: 5.25, //TIP: Metodo utilizzato per mantenere le dimesioni del logo sempre fedeli al display utilizzato
  },
});
