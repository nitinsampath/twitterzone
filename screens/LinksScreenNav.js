import { StackNavigator } from 'react-navigation';
import TweetsScreen from "../screens/TweetsScreen";
import LinksScreen from "../screens/LinksScreen";

export const LinksScreenNav = StackNavigator({
  LinksScreen: {screen: LinksScreen},
  TweetsScreen: {screen: TweetsScreen},
});
