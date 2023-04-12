import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, TouchableOpacity } from 'react-native';
import { View , Text, StyleSheet} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

const Favorites = () => {
    const route = useRoute();
    const {user} = route.params;
    // console.log(user);
    const dispatch = useDispatch();
    const Data = useSelector(state => state.favoriteItem);

    const addFavirite = (item) => {
        dispatch({ type: 'ADD_FAVORITE', payload: item });
    }
     

    const deleteFavorite = (item) => {
        dispatch({ type: 'REMOVE_FAVORITE', payload: item });
    }

    const [userInfor, setUserInfor] = useState(user);
    // console.log(user);

  
  return (
    <View style={Styles.container}>
        <Text>Favorites</Text>
        <TouchableOpacity style={Styles.container}>
            {
             Data.length > 0 ?   Data.map((item) => {
                    return(
                        <View style={{marginHorizontal: 20, backgroundColor: 'pink', margin: 20}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                               <Text>{item.name}</Text>

                                <TouchableOpacity onPress={() => deleteFavorite(item)}>
                                    <Text>Delete</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                <Text>{item.details}</Text>
                                <Image  source={item.image} style={{width: 100,height: 100 }}/>
                                {/*  */}
                               
                            </View>
                        </View>
                    )
                }): (
                    <Text>No item found</Text>
                )
            }
        </TouchableOpacity>
    </View>
  )
}

const Styles = StyleSheet.create({
    container: {
        marginTop: '9%',
        marginHorizontal: 10
    },
    image: {
        width: 150,
        height: 100
    }

})
export default Favorites