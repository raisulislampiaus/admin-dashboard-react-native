import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './src/screen/SettingsScreen';
import ProfileScreen from './src/screen/ProfileScreen';
import HomeScreen from './src/screen/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


const MainScreen = (props: any) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return (
              <Ionicons
                name={
                   'home-outline'
                    
                }
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Profile') {
            return (
              <FontAwesome
                name={'user-o' }
                size={size}
                color={color}
              />
            );
          }
        },
        
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: '#0369a1',
        headerShown:false,
        
        tabBarStyle: {backgroundColor: '#fff', height: 70, borderTopColor: "#fff"},
        tabBarLabelStyle: {display: 'none'},
        tabBarIconStyle: {backgroundColor: '#9333ea'}
      })}

    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"
        screenOptions={({ route }) => ({
          drawerStyle: {
            backgroundColor: '#f5f5f5',
           
          },
         
          
          headerStyle: {
            backgroundColor: '#fff',
            

          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
            color: '#0369a1',
          },
          headerTintColor: "#0369a1",
         
          
        })}
      >
        <Drawer.Screen name="Home" component={MainScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App