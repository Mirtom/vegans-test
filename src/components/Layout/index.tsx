import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './style';

interface ILayoutProps {
  children: React.ReactNode;
  scrollable?: boolean;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({
  children,
  scrollable,
}) => {
  if (scrollable) {
    <ScrollView style={styles.wrapper}>{children}</ScrollView>;
  }

  return <View style={styles.wrapper}>{children}</View>;
};

export default Layout;
