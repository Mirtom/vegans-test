import React, {Suspense} from 'react';
import {Navigation} from 'react-native-navigation';
import {HomeScreenDef, HomeScreenId} from './home';
import {ApplicationScreenDef, ApplicationScreenId} from './application';

export const RegisterComponents = () => {
  Navigation.registerComponent(HomeScreenId, () =>
    WrappedComponent(HomeScreenDef),
  ); //HomeScreen
  Navigation.registerComponent(ApplicationScreenId, () =>
    WrappedComponent(ApplicationScreenDef),
  ); //ApplicationScreen
};

//Wrapper store
function WrappedComponent(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
      <Suspense fallback="loading">
        <Component {...props} />
      </Suspense>
    );

    return <EnhancedComponent />;
  };
}
