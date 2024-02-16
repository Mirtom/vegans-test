import React, {useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {NavigationFunctionComponent, Navigation} from 'react-native-navigation';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Input from '../../components/Input';
import {Normalize} from '../../utils/normalize';
import {IApplicationProps} from '../../types/application';
import {ApplicationScreenId} from '../application/index';
import {goToScreen} from '../../utils/navigation';
import {getTopPaidApplications} from '../../service/services/rss.service';
import ApplicationCard from '../../components/ApplicationCard';
const {bottomTabsHeight} = Navigation.constantsSync();

const HomeScreen: NavigationFunctionComponent = ({componentId}) => {
  const [applicationList, setApplicationList] = React.useState<
    IApplicationProps[]
  >([]);

  useEffect(() => {
    getTopPaidApplications({})
      .then(({data}) => {
        setApplicationList(data?.feed.entry || []);
      })
      .catch(err => {
        console.error('Error during apiCall', err);
      });
  }, []);

  const viewApplication = (item: IApplicationProps) => {
    goToScreen(componentId, ApplicationScreenId, {item});
  };

  return (
    <Layout>
      <Header logo userActions />
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <View style={styles.upper}>
          <Input onChangeText={val => console.log(`Searching ${val}`)} />
        </View>
        <View style={styles.list}>
          {applicationList?.map(al => {
            return (
              <ApplicationCard
                {...al}
                key={al.id.label}
                onPress={() => viewApplication(al)}
              />
            );
          })}
        </View>
      </ScrollView>
    </Layout>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: Normalize(20),
    paddingTop: Normalize(20),
    marginBottom: bottomTabsHeight / 2,
    flex: 1,
  },
  upper: {
    marginBottom: Normalize(24),
  },
  list: {
    flex: 1,
  },
});
export default HomeScreen;
