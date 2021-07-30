import React, {useEffect,useState} from 'react';
import { ScrollView } from 'react-native';
import {StyleSheet,Text,View,Image} from 'react-native';


const DetailScreen = ({route}) => {
    const {movie} = route.params;
    const [datos,setDatos] = useState([]);

    useEffect(()=>{

        const api_url = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=7d73b140`
        fetch(api_url)
        .then(data => {
            return data.json()
        }).then(resultado => 
            {
            setDatos(resultado);
            console.log(datos);
        });

    },[])
    return (
        <View style={styles.container}>
            <ScrollView>
            {
                datos.Poster==="N/A"
                ?
                <Image
                
                style={styles.images}
                source={require('../assets/images/nophoto.png')}
                />
                :
               <Image
               
               style={styles.images}
               source={{uri:datos.Poster}}

               />
            }
            <Text style={styles.texto2}>{datos.Released}</Text>
            <Text style={styles.texto2}>{datos.Actors}</Text>
            <Text style={styles.texto2}>{datos.Plot}</Text>
            <Text style={styles.texto2}>{datos.Genre}</Text>
            <Text style={styles.texto2}>{datos.Production}</Text>
            <Text style={styles.texto2}>{datos.Awards}</Text>
            </ScrollView>

        </View>
    );
}

export default DetailScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ffbfbf',
    },
    images:{
        width:200,
        height:300,
        margin:5,
        alignSelf:'center',
        borderRadius:5,
    },
    texto:{
        color:'black',
        textAlign:'center',
        fontSize:20,
        margin:10,
        fontWeight:'bold',
    },
    texto2:{
        color:'black',
        textAlign:'center',
        fontSize:15,
        margin:10,
    }
});