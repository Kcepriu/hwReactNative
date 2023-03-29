import { createStackNavigator } from '@react-navigation/stack';

// Import Screens
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

import useAuth from '../hooks/useAuth';
import { addListennerStateChangeAuth } from '../redux/auth/operation';
import { useEffect } from 'react';

const AuthStack = createStackNavigator(); // вказує на групу навігаторів

const Main = () => {
  const { isAuth, user } = useAuth();

  console.log('user', user);

  useEffect(() => {
    addListennerStateChangeAuth();
  }, []);

  if (isAuth) {
    return <HomeScreen />;
  } else {
    return (
      <AuthStack.Navigator>
        {/*  Login */}
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        {/*  Register */}
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegisterScreen}
        />
        {/* HomeScreen */}

        <AuthStack.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={HomeScreen}
        />
      </AuthStack.Navigator>
    );
  }
};

export default Main;
