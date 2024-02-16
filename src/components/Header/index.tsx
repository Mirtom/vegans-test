import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {LogoImage} from '../../assets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DEFAULT_ICON_SIZE} from '../../utils/sizes';
import {Navigation} from 'react-native-navigation';

interface IHeaderProps {
  logo?: boolean;
  userActions?: boolean;
  goBack?: boolean;
  category?: boolean;
  componentId?: string;
  children?: React.ReactNode;
}

const Header: React.FunctionComponent<IHeaderProps> = ({
  logo,
  userActions,
  goBack,
  componentId,
  children,
}) => {
  const goBackScreen = () => {
    Navigation.pop(componentId);
  };

  return (
    <View style={styles.wrapper}>
      {goBack && (
        <TouchableOpacity onPress={goBackScreen}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={DEFAULT_ICON_SIZE}
            color="#6D6A75"
          />
        </TouchableOpacity>
      )}
      {logo && <Image source={LogoImage} style={styles.logo} />}
      {children && <View>{children}</View>}
    </View>
  );
};

export default Header;
