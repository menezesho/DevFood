import type { RestaurantProps } from '../../models/restaurant';
import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { RestaurantItem } from './horizontal';

export function Restaurants() {

    const [restaurants, setRestaurants] = useState<RestaurantProps[]>([]);

    useEffect(() => {
        async function getRestaurants() {
            const response = await fetch('http://192.168.15.108:3000/restaurants')
            const data = await response.json()
            setRestaurants(data)
        }

        getRestaurants()
    }, [])

    return (
        <FlatList
            data={restaurants}
            renderItem={({ item }) => <RestaurantItem restaurant={item} />}
            horizontal={true}
            contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
            showsHorizontalScrollIndicator={false}
        />
    );
}