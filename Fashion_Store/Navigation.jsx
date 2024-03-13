import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Feather } from 'react-native-vector-icons';
import Home from './bottomNavs/Home';
import Search from './bottomNavs/Search';
import Bookmark from './bottomNavs/Bookmark';
import Profile from './bottomNavs/Profile';



const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MyTabs = () => {
    return (
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === 'home') {
              iconName = 'home';
            } else if (route.name === 'search') {
              iconName = 'search';
            } else if (route.name === 'bookmark') {
              iconName = 'bookmark';
            } else if (route.name === 'profile') {
              iconName = 'user';
            }
            return <Feather name={iconName} style={{ fontSize: 20, color: focused ? '#D9BE52' : '#CACCCE' }} />;
          },
          tabBarStyle: {
            backgroundColor: '#1F2123',
            borderTopColor: '#1F2123',
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
          headerShown: false,
        })}
      >
        <Tabs.Screen name="home" component={Home} options={{ headerShown: false }} />
        <Tabs.Screen name="search" component={Search} options={{ headerShown: false }} />
        <Tabs.Screen name="bookmark" component={Bookmark} options={{ headerShown: false }} />
        <Tabs.Screen name="profile" component={Profile} options={{ headerShown: false }} />
      </Tabs.Navigator>
    );
};
export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={MyTabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}