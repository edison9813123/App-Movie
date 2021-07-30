import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';
import { TabRouter } from '@react-navigation/native';
//import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

export default function StackNavigator1(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown:false}}
            />

            <Stack.Screen
            name="DetailScreen"
            component={DetailScreen}
            options={({route}) =>({
                title:route.params.movie.Title
            })

            }
            />

        </Stack.Navigator>
    )
};