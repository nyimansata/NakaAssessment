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


    // const [userInfor, setUserInfor] = useState(user);
    // console.log(user);

    const deleteFavorite = () => {

    }

  
  return (
    <View>
        <Text>Favorites</Text>
        <TouchableOpacity style={Styles.container}>
            {
               Data.map((item) => {
                    return(
                        <View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                               <Text style={Styles.name}>{item.name}</Text>

                                <TouchableOpacity onPress={deleteFavorite}>
                                    <Text>Delete</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                <Text style={Styles.details}>{item.details}</Text>
                                <Image  source={item.image} style={{width: 100,height: 100 }}/>
                                {/*  */}
                               
                            </View>
                        </View>
                    )
                })
            }
        </TouchableOpacity>
    </View>
  )
}

const Styles = StyleSheet.create({
    container: {
        marginTop: '9%',
        // marginHorizontal: 10
        marginHorizontal: 20, 
        backgroundColor: 'pink', 
        // marginBottom: 40
    },
    image: {
        width: 150,
        height: 100
    },
    details: {
        marginLeft: 20
    },
    name: {
        fontWeight: 'bold',
        color: 'white'
    }

})
export default Favorites