import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import { StyleSheet, Text, View, Platform } from 'react-native'
import data from './DATA.json'


export default class App extends Component {
  state = {
      cards: data,
      swipedAllCards: false,
      cardIndex: 0
  }

  renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>{card.title}- {index}</Text>
      </View>
    )
  };

  onSwiped = (type) => {
    console.log(`on swiped ${type}`)
  }

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    })
  };


  render () {
    console.log(this.state.swipedAllCards)
    return (
        <View style={styles.wrap}>
        <Swiper
          useViewOverflow={Platform.OS === 'ios'}
          verticalSwipe={false}
          onSwiped={() => this.onSwiped('general')}
          onSwipedLeft={() => this.onSwiped('left')}
          onSwipedRight={() => this.onSwiped('right')}
          onTapCard={() => this.onSwiped('TAPPED')}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={80}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          stackSize={3}
          stackSeparation={20}
          overlayLabels={{
            left: {
              title: 'SEEN',
              style: {
                label: {
                  backgroundColor: 'red',
                  borderColor: 'red',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: -30
                }
              }
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: 'green',
                  borderColor: 'green',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: 30
                }
              }
            }
          }}
          animateOverlayLabelsOpacity={true}
          animateCardOpacity
          swipeBackCard
        >
                    {this.state.swipedAllCards && <Text style={{ fontSize: 40}}>Finished!</Text>}
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1
  },
  card: {
    flex: 1,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: 'white',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.7,
    // shadowRadius: 2,
    // elevation: 1,
    borderWidth: 2,
    borderColor: '#E8E8E8'
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  }
})
