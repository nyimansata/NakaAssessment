import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { useDispatch , useSelector} from 'react-redux';


const Details = ({navigation}) => {
    // const [userInfor, setUserInfor] = useState(user)
    const dispatch = useDispatch();
    // console.log(Data);
   

    const route = useRoute();
    const {user} = route.params;


    const addFavorite = (item) => {
        dispatch({ type: 'ADD_FAVORITE', payload: item });
      };
    // navigate
    const goToFavorite = (user) => {
        addFavorite(user)
          navigation.navigate('favorite', {user:user});
        // if(Data.user){
        //     navigation.navigate('favorite')
        // };
    }
    console.log(goToFavorite)

  return (
    <>    
    <TouchableOpacity style={Styles.container}>
        <Image source={user.image} style={Styles.image} />
        <Text style={Styles.name}>{user.name}</Text>
        <Text style={Styles.details}>{user.details}</Text>
    </TouchableOpacity>
    {/* button */}
    <TouchableOpacity onPress={() => goToFavorite(user)}>
        <Text style={Styles.save} >Save</Text>
    </TouchableOpacity>
    </>

  )
}

const Styles = StyleSheet.create({
    container: {
        marginTop: '15%',
        marginHorizontal: 10
    },
    name: {
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 15,
        fontSize: 20
    },
    image: {
        width: 320,
        height: 230,
        alignSelf: 'center'
    },
    details: {
        marginHorizontal: 10,
        marginTop: 20,
        lineHeight: 25
    },
    save: {
        backgroundColor: 'pink',
        padding: 15,
        marginTop: '20%',
        width: 200,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        borderRadius: 10
    }

})

export default Details