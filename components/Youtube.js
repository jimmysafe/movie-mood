import React, { useEffect } from 'react'
import { View, Dimensions } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe'
import { useSelector } from 'react-redux'

const Youtube = () => {
    const movie = useSelector(state => state.tab.movie)
    let height = Dimensions.get('window').height; 
    let width = Dimensions.get('window').width; 

    return (
        <View style={{
            position: "absolute",
            top: 0,
            right: 0,
            padding: 2,
            backgroundColor: 'black',
            height,
            width,
            justifyContent: 'center',
            alignItems: "center"
        }}>
            <YoutubePlayer
                height={300}
                width={width}
                videoId={`${movie.videos.results[0].key}`}
                play={true}
                volume={50}
                playbackRate={1}
            />
        </View>
    )
}

export default Youtube
