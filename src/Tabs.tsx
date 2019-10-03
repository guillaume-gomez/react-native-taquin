import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./routes/HomeScreen";
import DetailsScreen from "./routes/DetailsScreen";
import GameScreen from "./routes/GameScreen";
import EndGameModal from "./routes/EndGameModal";

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
    Game: GameScreen
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: AppNavigator,
    },
    MyModal: {
      screen: EndGameModal,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default createAppContainer(RootStack);