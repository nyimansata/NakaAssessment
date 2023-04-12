import {View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import {Feather} from '@expo/vector-icons';
import { data } from '../Components/Data';
import { useState } from 'react';

const HomeScreen = ({navigation}) => {
    const [search, setSearch] = useState('')
    // navigation
    const goToDetails = (item) => {
           navigation.navigate('Detail', {user:item});
    }
    const handleInput = (text) => {
        setSearch(text)
        // console.log(text)
    }

    const SerchForItems =  data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={Styles.container}>
        <Text style={Styles.text}>Recipes</Text>
        <View style={Styles.searchContainer}>
            <Feather name="search" size={24} color="black" />
            <TextInput placeholder='Search' 
                       style={Styles.input}
                       value={search}
                       onChangeText={handleInput}
            />
        </View>
        {/* items */}
        <View>
            <FlatList 
                data={SerchForItems}
                renderItem={({item}) => {
                    // console.log(data)
                    return(
                        <TouchableOpacity style={Styles.recipeContainer} onPress={() => goToDetails(item)}>
                            <Text style={Styles.name}>{item.name}</Text>
                            <Image source={item.image} style={Styles.image} />
                            <Text>{item.details ? '' : ''}</Text>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.id}
            />
           
        </View>
    </View>
  )
}

const Styles =  StyleSheet.create({
    searchContainer: {
           flexDirection: 'row',
           borderWidth: 0.5,
           padding: 7,
           borderRadius: 5,
           marginTop: 20,
           marginBottom: 20
    },
    container: {
        marginHorizontal: 10,
        marginTop: 50
    },
    text: {
        fontSize:  20,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    input: {
        marginLeft: 10
    },
    image: {
        width: 150,
        height: 100,
        marginLeft: 100
    },
    recipeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'pink',
        marginTop: 15,
        borderRadius: 10
    },
    name: {
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: 25
    }
})
export default HomeScreen