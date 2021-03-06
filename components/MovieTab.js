// import React, { useState, useRef } from 'react'
// import { View, Text, Dimensions, Button, ScrollView, Image, TouchableOpacity, WebView } from 'react-native'
// import { useSelector, useDispatch } from 'react-redux'
// import {closeTab} from '../actions'
// import { Title, Badge, Key } from '../styles'
// import ActorsSlider from './ActorsSlider'
// import StarRating from 'react-native-star-rating';

// import * as Animatable from 'react-native-animatable';
// const AnimatedView = Animatable.createAnimatableComponent(ScrollView);

// const MovieTab = ({ setYoutube }) => {
//     const dispatch = useDispatch()
//     const movie = useSelector(state => state.tab.movie)
//     const cast = useSelector(state => state.tab.cast)
//     const open = useSelector(state => state.tab.open)

//     let height = Dimensions.get('window').height; 
//     let width = Dimensions.get('window').width; 

//     let topImage = movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : `https://image.tmdb.org/t/p/w500${movie.poster_path}`

//     return (
//             <AnimatedView 
//                 transition="bottom"
//                 duration={500}
//                 style={{
//                     position: "absolute",
//                     bottom: open ? 0 : -height,
//                     left: 0,
//                     width,
//                     height: height - 40,
//                     padding: 10
//                 }}
//             >
//                 <View style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 15, borderTopRightRadius: 15  }}>
                    
//                     {/* TOP IMAGE */}
//                     <View style={{ flex: 1, overflow: "hidden", borderTopLeftRadius: 15, borderTopRightRadius: 15, height: 100 }}>
//                         <Image 
//                             resizeMode="cover"
//                             style={{
//                                 position: 'absolute',
//                                 top: 0,
//                                 left: 0,
//                                 bottom: 0,
//                                 right: 0,
//                             }}
//                             source={{ uri: topImage }}
//                         /> 
//                         {/* CLOSE BUTTON */}
//                         <TouchableOpacity
//                             onPress={() => {dispatch(closeTab())}}
//                             style={{
//                                 position: "absolute",
//                                 zIndex: 999,
//                                 top: 5,
//                                 right: 5,
//                                 padding: 2,
//                                 backgroundColor: 'white',
//                                 borderRadius: 50
//                             }}
//                         >
//                             <Image 
//                                 style={{
//                                     width: 35, height: 35
//                                 }}
//                                 source={require('../assets/close.png')}
//                             />
//                         </TouchableOpacity>
//                     </View>
//                     <ScrollView style={{ flex: 1 }}>
//                         {/* TITLE */}
//                         <Title style={{
//                             paddingVertical: 10
//                         }}>{movie.title}</Title>
                        
//                         {/* STARS */}
//                         <View style={{ flex: 1, justifyContent: "center", alignItems:"center" }}>
//                             <StarRating 
//                                 disabled={true}
//                                 maxStars={5}
//                                 rating={movie.vote_average / 2}
//                                 starSize={15}
//                                 starStyle={{ marginHorizontal: 3 }}
//                                 halfStarEnabled= {true}
//                                 fullStarColor="#F4442E"
//                                 emptyStarColor="#F4442E"
//                             />
//                         </View>
                        
//                         {/* GENRES LABELS */}
//                         <View style={{
//                             paddingVertical: 10,
//                             flexDirection: "row",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             flexWrap: 'wrap'
//                         }}>
//                             {movie.genres && movie.genres.map(genre => (
//                                 <Badge key={genre.id} style={{ borderRadius: 20, margin: 3 }}>
//                                     <Text style={{ color: "white" }}>{genre.name}</Text>
//                                 </Badge>
//                             ))}
//                         </View>

//                         {/* DESCRIPTION- OVERVIEW */}
//                         <View style={{ padding: 20 }}>
//                             <Text>{movie.overview}</Text>
//                         </View>

//                         {/* MOVIE INFO */}
//                         <View style={{ flex: 1, padding: 20 }}>
//                             {/* RELEASE DATE */}
//                             <View style={{ flex: 1, flexDirection: "row", alignItems: "center"}}>
//                                 <Key>Release Date: </Key> 
//                                 <Badge red style={{ borderRadius: 20, margin: 3 }}>
//                                     <Text style={{ color: "white" }}>{movie.release_date}</Text>
//                                 </Badge>
//                             </View>
//                             {/* DURATION */}
//                             <View style={{ flex: 1, flexDirection: "row", alignItems: "center"}}>
//                                 <Key>Duration: </Key> 
//                                 <Badge red style={{ borderRadius: 20, margin: 3 }}>
//                                     <Text style={{ color: "white" }}>{movie.runtime} min.</Text>
//                                 </Badge>
//                             </View>
//                             {/* BUDGET SPENT */}
//                             <View style={{ flex: 1, flexDirection: "row", alignItems: "center"}}>
//                                 <Key>Budget Spent: </Key> 
//                                 <Badge red style={{ borderRadius: 20, margin: 3 }}>
//                                     <Text style={{ color: "white" }}>${movie.budget ? movie.budget : 'Unknown'}</Text>
//                                 </Badge>
//                             </View>
//                             {/* REVENUE */}
//                             <View style={{ flex: 1, flexDirection: "row", alignItems: "center"}}>
//                                 <Key>Revenue: </Key> 
//                                 <Badge red style={{ borderRadius: 20, margin: 3 }}>
//                                     <Text style={{ color: "white" }}>${movie.revenue ? movie.revenue : 'Unknown'}</Text>
//                                 </Badge>
//                             </View>
//                         </View>
                        
//                         {movie && movie.videos && movie.videos.results.length > 0 &&
//                             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
//                                 <TouchableOpacity style={{ borderRadius: 20, margin: 3 }} onPress={() => setYoutube(true)}>
//                                     <Key>Watch Trailer</Key>
//                                 </TouchableOpacity>
//                             </View>
//                         }

//                         {/* ACTORS SLIDER */}
//                         <Title>Cast</Title>
//                         <ActorsSlider cast={cast && cast} />
                    
//                     </ScrollView>
//                 </View>
//             </AnimatedView>
//     )
// }

// export default MovieTab
