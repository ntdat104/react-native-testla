import React from 'react';
import { View, FlatList, Dimensions, StyleSheet } from 'react-native';
import CarItem from './CarItem';

const cars = [
    {
        id: 1,
        name: 'Model S',
        tagline: 'Starting at $69,420',
        image: require('../assets/images/ModelS.jpeg'),
    },
    {
        id: 2,
        name: 'Model 3',
        tagline: 'Order Online for',
        taglineCTA: 'Touchless Delivery',
        image: require('../assets/images/Model3.jpeg'),
    },
    {
        id: 3,
        name: 'Model X',
        tagline: 'Order Online for',
        taglineCTA: 'Touchless Delivery',
        image: require('../assets/images/ModelX.jpeg'),
    },
    {
        id: 4,
        name: 'Model Y',
        tagline: 'Order Online for',
        taglineCTA: 'Touchless Delivery',
        image: require('../assets/images/ModelY.jpeg'),
    },
];

export default function CarsList() {
    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={cars}
                renderItem={({ item }) => <CarItem car={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
});
