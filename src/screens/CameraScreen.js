'use strict';
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import moment from "moment";
import { Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import * as mainAction from "../actions/mainAction";
let scannerRef;
const CameraScreen = () => {
    const dispath = useDispatch();
    const onSuccess = (e) => {
        let data = {
            time: moment(new Date()).format("YYYY-MM-DD HH:mm"),
            url: e.data
        }
        Alert.alert(
            "QR code has been detected",
            e.data,
            [
                {
                    text: "New",
                    onPress: () => { if (scannerRef) scannerRef.reactivate(); },
                    style: "cancel"
                },
                { text: "Add", onPress: () => addData(data) }
            ]
        )
    }
    const addData = (data) => {
        dispath(mainAction.addItem(data));
    }
    return (
        <SafeAreaView>
            <QRCodeScanner
                ref={(node) => { scannerRef = node }}
                onRead={(e) => { onSuccess(e) }}
                flashMode={RNCamera.Constants.FlashMode.torch}
            />
        </SafeAreaView>
    )
}

export default CameraScreen;