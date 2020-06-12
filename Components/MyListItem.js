import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native';


const MyListItem = (props) => {

    const [getComplete, setComplete] = useState('Tamamlanmadı!');

    const listItemHandler = () => {
        setComplete(getComplete == 'Tamamlanmadı!' ? 'Tamamlandı!' : 'Tamamlanmadı!')
    }


    const { item } = props;
    return (

        <View style={[styles.listItemContainer], { backgroundColor: getComplete == 'Tamamlanmadı!' ? '#77B71E' : '#CB413F',padding:24,marginVertical : 12}} >
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }} onPress={listItemHandler}>
                <Text style={styles.listItemText}>{item}</Text>
                <Text style={[styles.listItemComplete, {
                    textDecorationLine: getComplete == 'Tamamlanmadı!' ? 'none' : 'line-through',
                }]}>{getComplete}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    listItemContainer: {
        padding: 22,
    },
    listItemText: {
        color: '#F5F0E7',
    },
    listItemComplete: {
        color: '#F5F0E7',

    }
});

export default MyListItem;
