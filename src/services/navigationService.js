import { NavigationActions } from '@react-navigation/native';
const config = {};
export function setNavigator(nav) {
    if (nav) {
        config.navigator = nav;
    }
}
export function navigate(routeName, params) {
    //   if (config.navigator && routeName) {
    //     let action = NavigationActions.navigate({ routeName, params });
    //     config.navigator.dispatch(action);
    //   }
    config.navigator.navigate(routeName, params)
}
export function goBack() {
    //   if (config.navigator) {
    //     let action = NavigationActions.back({});
    //     config.navigator.dispatch(action);
    //   }
}