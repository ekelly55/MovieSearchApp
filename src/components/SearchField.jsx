import {Pressable, Text, View, StyleSheet, TextInput} from 'react-native'
import { useState } from 'react'

const SearchField = ({onSubmit}) => {

    const [searchString, setSearchString] = useState('')

    const handleSearch = () => {
        onSubmit(searchString)
    }

    return (
        <View style={{
            flexDirection: 'row',
            padding: 10
        }}> 
            <TextInput 
                onChangeText = {setSearchString}
            style={{
                borderColor: 'gray',
                flex: 1,
                borderRadius: 5,
                borderWidth: 1,
                margin: 10,
                paddingVertical: 0
            }}/>
            <Pressable 
                onPress = {handleSearch}
            style={{
                padding: 10,
                backgroundColor: 'green',
                borderRadius: 5,
                marginVertical: 10,
            }}>
                <Text style={{
                    color: 'white',
                    fontWeight: '600',
                    fontSize: 14
                }}>Search</Text>
            </Pressable>
        </View>
    )
}

export default SearchField