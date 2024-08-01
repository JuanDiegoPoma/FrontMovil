import React, { useState } from "react";
import { TextInput, View, StyleSheet, Text, Button } from "react-native";

const Chat = () => {
    const [prompt, setPrompt] = useState('');
    const [text, setText] = useState('');
    const [binaryResult, setBinaryResult] = useState('');
    const [vowelResult, setVowelResult] = useState('');

    const getclasificar = async () => {
        try {
            const response = await fetch('http://192.168.100.51:9012/clasificartexto', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({ text })
            });
            const jsonData = await response.json();

            console.log('Respuesta del servidor:', jsonData); // Verificar la respuesta del servidor

           setVowelResult(jsonData.result);
            setVowelResult(`${jsonData.result} y los token utilizados fueron ${jsonData.tokens}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
 
            <Text style={styles.text}>
                {'Ingrese el texto para clasificarlo'}
            </Text>
            <TextInput style={styles.input} value={text} onChangeText={setText} />
            <Button title={'Clasificar'} onPress={getclasificar} />
            <Text style={styles.text}>
                {vowelResult}
            </Text>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold'
    }
});

export default Chat;
