import React, { useEffect } from 'react'
import { View, Dimensions, BackHandler } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe'
import { useSelector } from 'react-redux'
import Button from './Button'

const Youtube = ({ youtube, setYoutube }) => {
    const movie = useSelector(state => state.tab.movie)
    let height = Dimensions.get('window').height; 
    let width = Dimensions.get('window').width;
    
    const handlerBackButton = () => {
        setYoutube(false)
        return true
    }

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handlerBackButton);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handlerBackButton);
        }
    }, []) 

    
    return (
        <View style={{
            position: "absolute",
            top: 0,
            right: 0,
            padding: 2,
            backgroundColor: '#0000007a',
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
            <View style={{ margin: 10, justifyContent:"center", alignItems:"center" }}>
                <Button 
                    action={() => setYoutube(false)}
                    imgSource={require('../assets/favourites.png')}
                />
            </View>
        </View>
    )
}

export default Youtube
