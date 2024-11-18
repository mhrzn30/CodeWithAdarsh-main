import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const data = [
    {
        id: '1',
        name: 'Adarsh Ko Futsal',
        image: 'https://img.freepik.com/premium-photo/detailed-image-futsal-ball-indoor-court_1235831-68896.jpg',
        distance: '2.0 km away',
        price: 'NRP 600/hour',
        rating: 5,
    },
    {
        id: '2',
        name: 'Uchiha Futsal',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ly-OD8o4nW1T4tR9lnpfpaC2ioW3v3c8vJ6EP3KoNmNgA-dDleT7ohKURfYbENSz-AU&usqp=CAU',
        distance: '3.0 km away',
        price: 'NRP 500/hour',
        rating: 5,
    },
];

export default function FutsalList({ navigation }) {
    // Set the header title, background color, and text color
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Futsals Near You',
            headerStyle: {
                backgroundColor: '#0275d8', // Set header background color to blue
            },
            headerTintColor: '#fff', // Set header text color to white
        });
    }, [navigation]);


    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.detailsRow}>
                    <Ionicons name="location-outline" size={16} color="#666" />
                    <Text style={styles.details}>{item.distance}</Text>
                </View>
                <Text style={styles.details}>{item.price}</Text>
                <View style={styles.ratingRow}>
                    {Array.from({ length: 5 }, (_, index) => (
                        <Ionicons
                            key={index}
                            name={index < item.rating ? "star" : "star-outline"}
                            size={16}
                            color={index < item.rating ? "#FFD700" : "#CCC"} // Gold color for filled stars, gray for empty stars
                        />
                    ))}
                </View>
                <TouchableOpacity
                    style={styles.exploreButton}
                    onPress={() => navigation.navigate('Details', { futsal: item })}
                >
                    <Text style={styles.exploreButtonText}>Explore</Text>
                </TouchableOpacity>

            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8E8E8',  // Gray background
    },
    card: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginHorizontal: 12,
        marginVertical: 7,
        elevation: 3, // Shadow 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    image: {
        width: 135,
        height: 140,
        borderRadius: 8,
    },
    infoContainer: {
        marginLeft: 15,
        justifyContent: 'center',
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    detailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    details: {
        fontSize: 14,
        color: '#666',
        marginLeft: 5,
    },
    ratingRow: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    exploreButton: {
        marginTop: 10,
        backgroundColor: '#0275d8',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
        alignSelf: 'flex-start',
    },
    exploreButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});