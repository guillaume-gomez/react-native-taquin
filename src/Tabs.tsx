import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./routes/HomeScreen";
import DetailsScreen from "./routes/DetailsScreen";

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);