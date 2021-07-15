import { SafeAreaView } from "react-native-safe-area-context";
import React, { useCallback, useEffect, useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { connect, useDispatch } from "react-redux";
import * as mainAction from "../actions/mainAction"
const ListScreen = (props) => {
    const navigation = useNavigation();
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    const dispatch = useDispatch();
    useEffect(() => {
        const subscription = navigation.addListener('focus', () => {
            forceUpdate();
        });
        forceUpdate();
        return (() => {
            if (subscription)
                subscription.remove();
        })
    }, [navigation])
    return (
        <SafeAreaView>
            <SwipeListView
                data={props.main.get("list")}
                renderItem={(data, rowMap) => (
                    <TouchableHighlight underlayColor="white" key={rowMap} style={styles.rowFront} onPress={() => { navigation.navigate("webviewScreen", { url: data.item.url }) }}>
                        <Text>{data.item.url}</Text>
                    </TouchableHighlight>
                )}
                renderHiddenItem={(data, rowMap) => (
                    <View key={rowMap} style={styles.rowBack}>
                        <Text></Text>
                        <Text>Swipe to remove</Text>
                    </View>
                )}
                rightActivationValue={200}
                onRightAction={(index) => {
                    dispatch(mainAction.removeItem(index))
                    forceUpdate();
                }}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    rowFront: {
        width: '100%',
        padding: 10,
        backgroundColor: 'lightgray',
        borderBottomColor: 'white',
        borderBottomWidth: 1
    },
    rowBack: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'red'
    }
});
const mapStateToProps = (state) => ({
    root: state.get("root"),
    main: state.get('main'),
});

export default connect(mapStateToProps)(ListScreen);