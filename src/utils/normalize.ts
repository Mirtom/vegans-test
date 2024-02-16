import {Dimensions, Platform, PixelRatio} from 'react-native';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

//TIP: in questo caso si imposta la densità del layout, di solito io implemento anche una logica che in base al modello cambia la densità e in questo modo il layout è pixel perfect su tutti i device (iOs / Android)
const scale = DEVICE_WIDTH / 375;

export const Normalize = (size: number) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};
