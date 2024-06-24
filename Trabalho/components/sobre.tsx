import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Home from './home';

export default function App(){
    const [page, setPage] =React.useState('sobre');

    const renderPage = () => {
        if (page === 'sobre') {
            return ( <View style={styles.container}>
                    <Text style={styles.title}>Localiser</Text>
                    <Image style={styles.image} source={require('../assets/images/mapinha.png')}/> 
                    <Text style={styles.title}> Localização atual </Text>
                    <TouchableOpacity style={styles.button}>  
                        <Text style={styles.buttonText1}> Latitude: 00.00</Text>
                    </TouchableOpacity> <br></br>
                    <TouchableOpacity style={styles.button}>  
                        <Text style={styles.buttonText1}> Longitude: 00.00</Text>
                    </TouchableOpacity><br></br>
                    <Image style={styles.image1} source={require('../assets/images/paris.png')}/>  <br></br>
                    <TouchableOpacity style={styles.button}>  
                        <Text style={styles.buttonText}> Obter localização </Text>
                    </TouchableOpacity> <br></br>
                    <TouchableOpacity style={styles.button} onPress={() => setPage('home')}>  
                        <Text style={styles.buttonText}> Voltar para pagina inicial </Text>
                    </TouchableOpacity> </View>
            );
        } else if (page === 'home'){
            return <Home/>;
        }
    };

    return <View style={styles.container}>{renderPage()}</View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D1CCF3',
    },
    image:{
        width:300,
        height:300,
        justifyContent: 'center',
        borderRadius: 5,
    },
    image1:{
        width:300,
        height:200,
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 10,
        borderColor: "#000",
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
        justifyContent: 'center',
    }, 
    button: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: "#000",
    },
    buttonText: {
        color:'#000',
        fontSize: 16,
    },
    buttonText1: {
        color:'#2F006C',
        fontSize: 16,
    },

});