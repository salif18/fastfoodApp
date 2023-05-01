import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import MyTabs from "./src/components/MyTabs";
import COLORS from "./src/constants/Colors";
import { AddContextProvider } from "./src/context/addContext";
import store from "./src/redux/store/store";
import DetailProd from "./src/screens/DetailProd";
import Parametre from "./src/screens/Parametre";
import Search from "./src/screens/Search";
import Wellcom from "./src/screens/Wellcom";

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <AddContextProvider>
    <Provider store={store}>
       <NavigationContainer>
        <StatusBar backgroundColor={COLORS.white} barStyle='dark-none' />
         <Stack.Navigator initialRouteName="home" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Wellcom" component={Wellcom} />
          <Stack.Screen name='Home' component={MyTabs}/>
          <Stack.Screen  name="DetailProd" component={DetailProd}/>
          <Stack.Screen  name='Parametre' component={Parametre} />
          <Stack.Screen name='Search' component={Search} />
         </Stack.Navigator>
       </NavigationContainer>
    </Provider>
    </AddContextProvider>
  );
}


