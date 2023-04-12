import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, TouchableOpacity } from 'react-native';
import { View , Text, StyleSheet} from 'react-native'

const Favorites = () => {
    const route = useRoute();
    const {user} = route.params;
    // console.log(user);

    const [userInfor, setUserInfor] = useState(user);
    // console.log(user);
  return (
    <View style={Styles.container}>
        <TouchableOpacity style={Styles.container}>
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