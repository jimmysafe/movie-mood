import React, { PureComponent } from 'react';
import {View, StyleSheet, Dimensions, Animated, Easing, TouchableOpacity} from 'react-native';

class BouncingBalls extends PureComponent {

  static defaultProps = {
    animationDuration: 5000,
    minSpeed: 30,
    maxSpeed: 200,
    minSize: 40,
    maxSize: 100,
    animationType: Easing.linear,
  };

  constructor(props) {
    super(props);

    this.screenWidth = Dimensions.get('window').width;
    this.screenHeight = Dimensions.get('window').height - 50;
    this.circles = this.generateCircles();

    this.state = {
      position: new Animated.ValueXY({x: 0, y: 0}),
    };
  }



  componentDidMount() {
    this.traverseCircles();
  }

  componentWillUnmount() {
    this.circles.forEach((item, index) => {
      this.state[`position${index}`].stopAnimation();
    });
  }

  traverseCircles() {
    this.circles.forEach((circle, index) => {
      this.setState({
        [`position${index}`]: new Animated.ValueXY({x: circle.props.x, y: circle.props.y}),
      }, () => {
        const _circle = this.updateCirclePosition(circle.props, index);
        this.circleStartAnimation(_circle, index);
      });
    });
  }

  circleStartAnimation(circle, index) {
    const {animationDuration, animationType} = this.props;
    Animated.timing(
      this.state[`position${index}`],
      {
        toValue: {x: circle.x, y: circle.y},
        duration: animationDuration,
        easing: animationType,
      },
    ).start(() => {
      const currentPosition = this.state[`position${index}`];
      currentPosition.stopAnimation(() => {
        currentPosition.setValue({x: circle.x, y: circle.y});
        let _circle = this.updateCirclePosition(circle, index);
        requestAnimationFrame(() => this.circleStartAnimation(_circle, index));
      });
    });
  }

  updateCirclePosition(circle) {
    const _circle = Object.assign({}, circle);
    const height = width = circle.style[1].width;
    const maxWidth = this.screenWidth - width;
    const maxHeight = this.screenHeight - height;

    _circle.x = _circle.x + _circle.speedX;
    _circle.y = _circle.y + _circle.speedY;

    if (_circle.x <= 0) {
      _circle.x = 0;
      _circle.speedX *= (-1);
    } else if (_circle.x >= maxWidth) {
      _circle.x = maxWidth;
      _circle.speedX *= (-1);
    }

    if (_circle.y <= 0) {
      _circle.y = 0;
      _circle.speedY *= (-1);
    } else if (_circle.y >= maxHeight) {
      _circle.y = maxHeight;
      _circle.speedY *= (-1);
    }

    return _circle;
  }

  getRangeFromMinToMax(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  generateCircles() {
    const {minSpeed, maxSpeed, minSize, maxSize, navigate, ...restProps} = this.props;
    const circles = [];
    let width, height, borderRadius, innerStyle, restStyles, item, direction;

    const moods = [
      { color: "red", hex: "#e81d18" },
      { color: "pink", hex: "#fdc9de" },
      { color: "orange", hex: "#f9711a" },
      { color: "yellow", hex: "#fee316" },
      { color: "green", hex: "#25725f" },
      { color: "blue", hex: "#38a1c1" },
      { color: "purple", hex: "#685ab2" }
    ]

    const onClickAction = (color) => {
      navigate('Swiper', { color });
    }

    for (var i = 0; i < moods.length; i++) {
      height = width = this.getRangeFromMinToMax(minSize, maxSize);
      borderRadius = height * 0.5;
      direction = Math.round(Math.random()) === 0 ? -1 : 1;

      innerStyle = {
        height,
        width,
        borderRadius,
      };

      restStyles = {
        x: this.getRangeFromMinToMax(0, this.screenWidth - width),
        y: this.getRangeFromMinToMax(0, this.screenHeight - height),
        speedX: direction * this.getRangeFromMinToMax(minSpeed, maxSpeed),
        speedY: direction * this.getRangeFromMinToMax(minSpeed, maxSpeed),
      };

      let newStyle = { backgroundColor: moods[i].hex }
      let clr = moods[i].color

      item = <TouchableOpacity onPress={() => onClickAction(clr)} style={[styles.circle, {...innerStyle}, {...newStyle}]} {...restStyles} {...restProps} />
      // item = <Ball clr={clr} styles={[styles.circle, {...innerStyle}, {...newStyle}]} {...restStyles} {...restProps} />
      circles.push(item);
    }

    return circles;
  }

  render() {
    return <View style={styles.container}>
      {
        this.circles.map(((item, index) => {
          return (
            <Animated.View key={index} style={[this.state[`position${index}`] && this.state[`position${index}`].getLayout()]}>
              {item}
            </Animated.View>
          );
        }))
      }
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  circle: {
    position: 'absolute',
  },
  circlePosition: {
    position: 'absolute',
  },
});

export default BouncingBalls;