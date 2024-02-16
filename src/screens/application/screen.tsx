import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import {Normalize} from '../../utils/normalize';
import Text from '../../components/Text';
import {IApplicationProps} from '../../types/application';
import {
  getAppArtist,
  getAppDescription,
  getAppImage,
  getAppName,
} from '../../utils/application';

interface IApplicationScreenProps {
  item: IApplicationProps;
}

const ApplicationScreen: NavigationFunctionComponent<
  IApplicationScreenProps
> = ({componentId, item}) => {
  const HeaderChildren = () => (
    <Text color="#DD1823" size={12} strong>
      {getAppArtist(item).toUpperCase()}
    </Text>
  );

  return (
    <Layout>
      <Header componentId={componentId} goBack children={<HeaderChildren />} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{uri: getAppImage(item)}} style={styles.image} />
        <View style={styles.upperWrapper}>
          <Text size={Normalize(28)} strong style={styles.productTitle}>
            {getAppName(item)}
          </Text>
          <Text size={Normalize(16)}>{getAppDescription(item, true)}</Text>
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: Normalize(220),
    borderBottomLeftRadius: Normalize(25),
    borderBottomRightRadius: Normalize(25),
  },
  upperWrapper: {
    paddingHorizontal: Normalize(40),
    paddingVertical: Normalize(32),
  },
  productTitle: {
    marginBottom: Normalize(12),
  },
  bottomWrapper: {
    paddingHorizontal: Normalize(20),
  },
});
export default ApplicationScreen;
