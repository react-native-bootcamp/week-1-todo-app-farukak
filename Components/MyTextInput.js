import React from 'react';
import {
    StyleSheet,
    View,
    Text, TextInput, Dimensions, TouchableOpacity
} from 'react-native';



const MyTextInput = (props) => {

    const { setTodo, getTodo, setTodoList, getTodoList } = props;


    const onPressHandler = () => {
        setTodoList([...getTodoList, getTodo])
    }

    const todoInputHandler = (text) => {
       setTodo(text);
    }
    return (
        <View style={styles.container}>
            <View style={styles.textInputContainer}>
                <TextInput
                    style={{ marginLeft: 6 }}
                    placeholder="Aklında ne var ?"
                    placeholderTextColor="#76B61E"
                    onChangeText={todoInputHandler} />
            </View>

            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={{ color: 'white' }} onPress={onPressHandler}>Ekle</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        margin: 16,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        backgroundColor: '#F5F0E7',
    },
    textInputContainer: {
        flex: 3,
        width: Dimensions.get("window").width / 3,
        justifyContent: 'center',
        borderWidth: 0.4,
        color: '#76B61E',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
    },
    buttonContainer: {
        flex: 1,
        width: Dimensions.get("window").width / 2,
        borderWidth: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#76B61E',
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    }
});

export default MyTextInput;
