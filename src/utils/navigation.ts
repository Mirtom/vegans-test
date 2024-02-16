import {Navigation} from 'react-native-navigation';

export const goToScreen = (
  componentId: string,
  targetScreenId: string,
  passProps: unknown,
) => {
  Navigation.push(componentId, {
    component: {
      passProps,
      name: targetScreenId,
    },
  });
};
