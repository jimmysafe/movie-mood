import React from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe'
import { useSelector } from 'react-redux'
import ScreenLayout from './ScreenLayout'
import BackButton from './BackButton'

let height = Dimensions.get('window').height; 
let width = Dimensions.get('window').width;

const Youtube = (props) => {
    const movie = useSelector(state => state.tab.movie)
    return (
        <ScreenLayout>
            <BackButton {...props} />
            <View style={styles.container}>
                <YoutubePlayer
                    height={300}
                    width={width}
                    videoId={`${movie.videos.results[0].key}`}
                    play={true}
                    volume={50}
                    playbackRate={1}
                />
            </View>
        </ScreenLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        height,
        width,
        justifyContent: 'center',
        alignItems: "center"
    }
})

export default Youtube
