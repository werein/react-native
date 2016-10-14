import React from 'react';
import {
  NavigationExperimental,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { default as Home } from './containers/home/home';
import { HOME } from './reducers/navigation';
import { navigationPop, navigationPush, navigationSelectTab } from './actions/navigation';

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader,
  PropTypes: NavigationPropTypes,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
  stack: {
    flex: 20,
  },
  tapbar: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F9F9F9'
  }
});

const Tapbar = (props) => {
  const onPressHome = () => props.onSelectTab(HOME);

  return (
    <View style={styles.tapbar}>
      <TouchableOpacity onPress={onPressHome}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const Scene = (props) => {
  switch (props.scene.route.key) {
    case HOME:
      return <Home {...props} />
    default:
      return null;
  }
}

const Header = (props) =>
  <NavigationHeader {...props} />

export const Router = (props) => {
  const { tabs } = props.navigationState;
  const tabKey = tabs.routes[tabs.index].key;
  const scenes = props.navigationState[tabKey];
  const key = `stack_${tabKey}`;

  const onNavigateBack = () =>
    props.dispatch(navigationPop());

  const onNavigate = (params) =>
    props.dispatch(navigationPush(params));

  const onSelectTab = (tabKey) =>
    props.dispatch(navigationSelectTab(tabKey));

  const renderHeader = (sceneProps) =>
    <Header {...sceneProps} onNavigateBack={onNavigateBack} />

  const renderScene = (sceneProps) =>
    <Scene {...sceneProps} onNavigate={onNavigate} onNavigateBack={onNavigateBack} />

  return (
    <View style={styles.navigator}>
      <NavigationCardStack
        key={key}
        onNavigateBack={onNavigateBack}
        navigationState={scenes}
        renderHeader={renderHeader}
        renderScene={renderScene}
        style={styles.stack}
      />
      <Tapbar onSelectTab={onSelectTab} />
    </View>
  );
}

function mapStateToProps(state) {
  return ({
    navigationState: state.navigation
  })
}

export default connect(mapStateToProps)(Router);
