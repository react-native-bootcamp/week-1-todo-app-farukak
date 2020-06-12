import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
} from 'react-native';


const Header = (props) => {
    const { title } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        width: Dimensions.get('window').width,
        backgroundColor: '#77B71E',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 6,

    },
    text: {
        fontSize: 32,
        color: 'white',
        textAlign : 'center'
    }

});

export default Header;
