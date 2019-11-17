import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel';

const ActorsSlider = ({ cast }) => {

    let width = Dimensions.get('window').width; 

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ 
                flex: 1,
                shadowColor: "black",
                shadowOpacity: 0.40,
                shadowOffset: { width: 0, height: 10 },
                shadowRadius: 10,
                paddingVertical: 20
                }}>
                <View style={{ overflow: "hidden",  borderTopLeftRadius: 15, borderTopRightRadius: 15, height: 250 }}>
                    <Image 
                        resizeMode="cover"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                        }}
                        source={{ uri: `https://image.tmdb.org/t/p/w500${item.profile_path}` }}
                    /> 
                </View>
                <View style={{
                    backgroundColor: "white",
                    paddingVertical: 10,
                    borderBottomLeftRadius: 15, 
                    borderBottomRightRadius: 15,
                }}>
                    <Text style={{
                        textAlign: "center",
                        fontFamily: 'montserrat-medium',
                        textTransform: "uppercase",
                        fontSize: 12,
                        color: "grey"
                    }}>{item.name}</Text>
                </View>
            </View>
        )
    }

    return (
        <Carousel
            layoutCardOffset={18}
            layout={'default'} 
            data={cast}
            renderItem={renderItem}
            sliderWidth={350}
            sliderHeight={600}
            itemWidth={200}
        />
    )
}

export default ActorsSlider
