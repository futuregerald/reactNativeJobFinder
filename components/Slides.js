import React, { Component } from 'react';
import { Button } from 'react-native-elements'
import { View, Text, ScrollView, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
    
    renderLastSlide(index){
        if (index === this.props.data.length - 1) {
            return (
                <Button
                    buttonStyle={styles.buttonStyle}
                    onPress={this.props.onComplete}
                    title="Onwards!"
                    raised
                />
            );
        }
    }

    renderSlides() {
        return this.props.data.map((slide, index) => {
            return (
                <View 
                    key={slide.text} 
                    style={[styles.slideStyle, {backgroundColor: slide.color}]}
                >
                    <Text style={styles.textStyle}> {slide.text} </Text>
                    {this.renderLastSlide(index)}
                </View>
            )
        })
    }

    render(){
        return (
            <ScrollView
                horizontal
                pagingEnabled
                style={{ flex: 1 }}
            >
                {this.renderSlides()}
            </ScrollView>
        
        )
    }
}

const styles = {
    slideStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    },
    textStyle: {
        fontSize: 30,
        color: 'white'
    },
    buttonStyle: {
        backgroundColor: '#0288D1',
        marginTop: 15
    }
};

export default Slides;