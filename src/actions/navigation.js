import { default as NAVIGATION } from '../constants/navigation';

export type NavigationPop = {
    type: 'NAVIGATION/POP'
};

export function navigationPop(): NavigationPop {
  return { type: NAVIGATION.POP };
}

export type NavigationPush = {
  type: 'NAVIGATION/PUSH',
  route: {
    key: string,
    title: ?string
  }
};

export function navigationPush(route: { key: string, title: ?string }): NavigationPush {
  return { type: NAVIGATION.PUSH, route };
}

export type NavigationSelectTab = {
    type: 'NAVIGATION/SELECT_TAB',
    tabKey: string
};

export function navigationSelectTab(tabKey: string): NavigationSelectTab {
  return { type: NAVIGATION.SELECT_TAB, tabKey };
}
