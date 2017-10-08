import { StackNavigator } from 'react-navigation';
import TweetsScreen from "../screens/TweetsScreen";
import MapScreen from "../screens/MapScreen";

export const MapScreenNav = StackNavigator({
  MapScreen: {screen: MapScreen},
  TweetsScreen: {screen: TweetsScreen},
});
