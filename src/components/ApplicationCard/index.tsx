import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import Text from '../Text';
import {IApplicationProps, Price} from '../../types/application';
import {Normalize} from '../../utils/normalize';
import {
  getAppDescription,
  getAppImage,
  getAppName,
} from '../../utils/application';

const printPrice = (price: Price) => {
  return `${price.attributes.amount} ${price.attributes.currency}`;
};

const ApplicationCard: React.FunctionComponent<
  IApplicationProps & {onPress: () => void}
> = props => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={props.onPress}>
      <View style={styles.imageWrapper}>
        <Image source={{uri: getAppImage(props)}} style={styles.image} />
      </View>
      <View style={styles.infoWrapper}>
        <View>
          <Text strong>{getAppName(props)}</Text>
          <Text
            numberOfLines={2}
            size={Normalize(12)}
            color="#6D6A75"
            style={styles.descriptionText}>
            {getAppDescription(props)}
          </Text>
        </View>
        <View style={styles.infoBottom}>
          <Text size={Normalize(12)} color="#6D6A75" strong>
            {printPrice(props['im:price'])}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ApplicationCard;
