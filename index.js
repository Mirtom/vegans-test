import {Navigation} from 'react-native-navigation';
import {RegisterComponents} from './src/screens';
import {HomeScreenId} from './src/screens/home/index';

RegisterComponents();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: HomeScreenId,
            },
          },
        ],
      },
    },
  });
});

Navigation.setDefaultOptions({
  topBar: {
    visible: false,
    drawBehind: true,
    animate: false,
  },
});
