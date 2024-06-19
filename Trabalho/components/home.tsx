import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Sobre from './sobre';

export default function App(){
    const [page, setPage] =React.useState('home');

    const renderPage = () => {
        if (page === 'home') {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>Localiser </Text>
                   <Image style={styles.image} source={require('../assets/images/map.png')}/>
                   <Text style={styles.title}>Navegue pela cidade e nunca 
                        se perca novamente. Nosso aplicativo de localização
                        em tempo real oferece mapas detalhados, direções 
                        precisas e atualizações instantâneas para garantir que você sempre
                        saiba onde está e como chegar ao seu destino. Transforme sua jornada diária em uma experiência
                        tranquila e segura! </Text>
                    <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
                        <Text style={styles.buttonText}> Clique aqui</Text>
                    </TouchableOpacity>
                </View>
            );
        } else if (page === 'sobre'){
            return <Sobre/>;
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
        width:200,
        height:200,
        justifyContent: 'center',
        borderRadius: 5,
        

    },

    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
        marginTop: 'auto',
        justifyContent: 'center',
    },
    
    button: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
    },

    buttonText: {
        color:'#000',
        fontSize: 16,
    },
});