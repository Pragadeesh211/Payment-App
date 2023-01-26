import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Getstarted from './Screens/Getstarted';
import Login from './Screens/Login';
import Tabs from './navigations/Tabs';
import TransactionDetails from './Screens/TransactionDetails';
import TransactionHistory from './Screens/TransactionHistory';
import Pay from './Screens/Pay';
import Bill from './Screens/Bill';
import Account from './Screens/Account';

export default function App() {
const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Getstarted" component={Getstarted} 
        options={{headerShown:false}} 
        />
        <Stack.Screen name="Login" component={Login} 
        options={{headerShown:false}} 
        />
        
        <Stack.Screen name="Homepage" component={Tabs} options={{headerShown:false}}/>
        <Stack.Screen name="TransactionHistory" component={TransactionHistory} 
        options={{headerShown:false}} 
        />
        <Stack.Screen name="TransactionDetails" component={TransactionDetails} 
        options={{headerShown:false}} 
        />
        <Stack.Screen name="Pay" component={Pay} 
        options={{headerShown:false}} 
        />
        
        <Stack.Screen name="Bill" component={Bill} 
        options={{headerShown:false}} 
        />
        <Stack.Screen name="Account" component={Account} 
        options={{headerShown:false}} 
        />
        
      </Stack.Navigator>
      
      
    </NavigationContainer>
  );
}
