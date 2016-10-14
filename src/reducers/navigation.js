import { NavigationExperimental } from 'react-native';
import { default as NAVIGATION } from '../constants/navigation';

const { StateUtils: NavigationStateUtils } = NavigationExperimental;

type HomeType = 'home';
export const HOME: HomeType = 'home';

export type NavigationState = {
  active: HomeType,
  tabs: {
    index: number,
    routes: Array<{ key: string, title: string }>
  }
}

const initialState: NavigationState = {
  active: HOME,
  tabs: {
    index: 0,
    routes: [
      { key: HOME }
    ]
  },
  [HOME]: {
    index: 0,
    routes: [{ key: HOME, title: 'Welcome' }]
  }
};

export default function reducer(state: NavigationState = initialState, action) {
  switch (action.type) {
    case NAVIGATION.PUSH: {
      // Push a route into the scenes stack.
      const route: Object = action.route;
      const { tabs } = state;
      const tabKey = tabs.routes[tabs.index].key;
      const scenes = state[tabKey];
      const nextScenes = NavigationStateUtils.push(scenes, route);
      if (scenes !== nextScenes) {
        return {
          ...state,
          [tabKey]: nextScenes,
        };
      }
      return state;
    }
    case NAVIGATION.POP: {
      // Pops a route from the scenes stack.
      const { tabs } = state;
      const tabKey = tabs.routes[tabs.index].key;
      const scenes = state[tabKey];
      const nextScenes = NavigationStateUtils.pop(scenes);
      if (scenes !== nextScenes) {
        return {
          ...state,
          [tabKey]: nextScenes,
        };
      }
      return state;
    }
    case NAVIGATION.SELECT_TAB: {
      const tabKey: string = action.tabKey;
      const tabs = NavigationStateUtils.jumpTo(state.tabs, tabKey);
      if (tabs !== state.tabs) {
        return {
          ...state,
          tabs,
          active: action.tabKey
        };
      }
      // Reset position when clicking on the same tab as currently is
      return { ...state, [action.tabKey]: { index: 0, routes: [state[tabKey].routes[0]] } };
    }
    default:
      return state;
  }
}
