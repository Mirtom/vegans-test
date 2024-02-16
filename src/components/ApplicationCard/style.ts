import React from 'react';
import {StyleSheet} from 'react-native';
import {Normalize} from '../../utils/normalize';

export default StyleSheet.create({
  wrapper: {
    height: Normalize(140),
    borderRadius: Normalize(16),
    marginBottom: Normalize(16),
    width: '100%',
    backgroundColor: '#FFF',
    padding: Normalize(16),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  imageWrapper: {
    marginRight: Normalize(20),
  },
  infoWrapper: {
    flex: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  descriptionText: {
    marginTop: Normalize(2),
  },
  image: {
    width: Normalize(108),
    height: Normalize(108),
    borderRadius: Normalize(10),
  },
  infoBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
