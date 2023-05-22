import { useState } from 'react'
import {View} from 'react-native'
import Banner from '../components/Banner'
import SearchField from '../components/SearchField'
import Results from '../components/Results'


const apiUrl = 'http://www.omdbapi.com/?apikey=5e302e6a&t='

const LandingPage = () => {

    const [movieResult, setMovieResult] = useState()

    const handleSearch = async (searchString) => {
        const result = await fetch(`http://www.omdbapi.com/?t=${searchString}&apikey=5e302e6a`).then((data) => data.json())
        setMovieResult(result)
        console.log(movieResult)
    }
    return (
        <View style={{flex: 1}}>
            {/* flex: 1 is something you'll use a lot for full screen responsivity */}
            <Banner/>
            <SearchField onSubmit={handleSearch}/>
            {movieResult && 
                <Results movie = {movieResult}/>
            }
        </View>
    )
}

export default LandingPage