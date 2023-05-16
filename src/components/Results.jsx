import {Text, View, Image, StyleSheet} from 'react-native'

const Results = ({movie}) => {
    return (
            <View>
                <Text>result</Text>
                <Image style={styles.image} source = {movie.Poster}/>
            </View>
    )
}

const styles = StyleSheet.create({
    card: {flex: 1},
    image: {height: 40, width: 40},
    titleText: {},
    subtitleText: {},
    descriptionText: {}
})


export default Results