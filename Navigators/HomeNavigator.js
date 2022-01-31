import React from 'react'

import ProductContainer from '../Screens/Products/ProductsContainer'
import SingleProduct from '../Screens/Products/SingleProduct'
import { createStackNavigator } from "@react-navigation/stack"



const Stack = createStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Home'
                component={ProductContainer}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name='Detalles del Producto'
                component={SingleProduct}
                options={{
                    headerShown: true,
                }}
            />
        </Stack.Navigator>
    )
}

export default function HomeNavigator() {
    return <MyStack />;
}