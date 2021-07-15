import { Image, TouchableOpacity } from "react-native";
import ListScreen from "./ListScreen";
import WebviewScreen from "./WebviewScreen";
import React from "react";
import scanIcon from "../assets/scan.png"
import CameraScreen from "./CameraScreen";
const screens = [
    {
        name: "listScreen",
        component: ListScreen,
        options: ({ navigation, route }) => ({
            headerTitleAlign: 'center',
            title: "List screen",
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("cameraScreen")}>
                    <Image source={scanIcon} style={{ width: 35, height: 35, resizeMode: 'contain' }} />
                </TouchableOpacity>
            )
        })
    },
    {
        name: "webviewScreen",
        component: WebviewScreen,
        options: {
            headerTitleAlign: 'center',
            title: "Webview Screen"
        }
    },
    {
        name: "cameraScreen",
        component: CameraScreen,
        options: {
            headerTitleAlign: 'center',
            title: "Camera Screen"
        }
    }
]
export default screens;