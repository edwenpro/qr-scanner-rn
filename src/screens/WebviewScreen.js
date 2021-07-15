import { SafeAreaView } from "react-native-safe-area-context";
import WebView from "react-native-webview";
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

const WebviewScreen = ({ route }) => {
    const { url } = route.params;
    return (
        <SafeAreaView style={{ width: '100%', height: '100%' }}>
            <WebView source={{ uri: url }}>
            </WebView>
        </SafeAreaView>
    )
}
export default WebviewScreen;