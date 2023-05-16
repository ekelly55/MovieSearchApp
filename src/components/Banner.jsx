import {Text, View, StyleSheet} from 'react-native'

const Banner = () => {
    return (
        <View style={styles.bannerContainer}> 
            <Text style={styles.bannerText}> OMDB API MOVIE SEARCH</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bannerContainer: {
        flex: 1,
        maxHeight: 100,
        //just use numbers, it's a ratio of pixel density
        //also, b/c this is nested in a scrollview component, it won't take up the space it should. so we have to fix that by adding some styles to the sscrollview component in app.tsx
        backgroundColor: 'black'
    },
    bannerText: {
        color: 'white',
        flex: 1,
        fontSize: 24,
        textAlign: 'center',
        textAlignVertical: 'center',

    },
})


export default Banner