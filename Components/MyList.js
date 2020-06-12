import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,
    Dimensions,
} from 'react-native';

import MyListItem from './MyListItem';

const MyList = (props) => {

    const { getTodoList } = props;
    return (

        <View style={styles.flatListContainer}>
            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => item.toString()}
                data={getTodoList}
                renderItem={({ item }) => <MyListItem item={item} />}

            />
        </View>
    );
};

const styles = StyleSheet.create({

    flatListContainer: {
    },
});

export default MyList;
