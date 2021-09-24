import React from "react";
import { TouchableOpacity, View, Text, FlatList, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="App" component={AppWithModals} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const AppWithModals = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, presentation: "modal" }}>
            <Stack.Screen name="Tabs" component={TabNavigator} />
            {/* paywalls, info modals and others */}
        </Stack.Navigator>
    );
};

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="FirstTab" component={FirstTab} />
            <Tab.Screen name="SecondTab" component={SecondTab} />
            <Tab.Screen name="ThirdTab" component={ThirdTab} />
        </Tab.Navigator>
    );
};

const FirstTab = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="StackWithLists" component={StackWithLists} />
        </Stack.Navigator>
    );
};

const SecondTab = () => {
    return <View style={{ flex: 1, backgroundColor: "blue" }} />;
};

const ThirdTab = () => {
    return <View style={{ flex: 1, backgroundColor: "orange" }} />;
};

const StackWithLists = () => (
    <View testID="wrapper" style={{ flex: 1 }}>
        <FlatList
            style={{ flex: 1 }}
            data={Array(10)}
            numColumns={1}
            initialNumToRender={3}
            windowSize={6}
            renderItem={() => {
                return <HorizontalList />;
            }}
        />
    </View>
);

const HorizontalList = () => {
    return (
        <View testID="wrapper" style={{ flex: 1, marginBottom: 20 }}>
            <FlatList
                style={{ flex: 1 }}
                data={Array(10)}
                horizontal
                numColumns={1}
                initialNumToRender={3}
                windowSize={6}
                renderItem={() => {
                    return (
                        <>
                            <View
                                testID="element"
                                style={{
                                    width: 100,
                                    height: 100,
                                    marginTop: 20,
                                    marginRight: 8,
                                    backgroundColor: "black",
                                }}
                            >
                                <Image
                                    style={{ flex: 1 }}
                                    source={{
                                        uri: "https://picsum.photos/100/100",
                                    }}
                                />
                            </View>
                        </>
                    );
                }}
            />
        </View>
    );
};

export default App;
