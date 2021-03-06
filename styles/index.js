import styled from 'styled-components'

export const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
`;

export const Heading = styled.Text`
    font-family:'montserrat-medium';
    text-transform: uppercase;
	font-size: ${props => props.xl ? '42px' : '18px'};
    font-weight: 500;
    text-align: center;
    color: white;
    line-height: ${props => props.lineHeight ? 45 : 42}
`;


export const Title = styled.Text`
    font-family:'montserrat-medium';
    text-transform: uppercase;
	font-size: 14px;
    font-weight: 500;
    text-align: ${props => props.left ? 'left' : 'center'};
	color: ${props => props.white ? 'white' : props.red ? '#F4442E' : 'grey'};
`;

export const Key = styled.Text`
    font-family:'montserrat-medium';
    text-transform: uppercase;
	font-size: ${props => props.nav ? '9px' : '11px'};
    font-weight: 500;
    text-align: center;
    color: ${props => props.white ? 'white' : props.red ? '#F4442E' : 'grey'};
    letter-spacing: ${props => props.nav ? '1px' : 0};
`;

export const Card = styled.View`
    flex: 1;
    border-radius: 15;
    justify-content: center;
    backgroundColor: white;
    shadow-color: #000;
    shadow-offset: 0px 1px;
    shadow-opacity: 0.4;
    shadow-radius: 5;
    elevation: 5;
`;


export const Badge = styled.View`
    padding: 3px 10px;
    border-radius: 20;
    color: white;
    background-color: ${props => props.red ? '#F4442E' : '#2d232e'};
`;