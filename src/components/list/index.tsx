import { useEffect, useState } from 'react';
import type { RestaurantProps } from '../../models/restaurant';
import { Text, View } from 'react-native';
import { RestaurantItem } from './restaurant';

export function RestaurantsVerticalList() {

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
        <View className='px-4 flex-1 w-full h-full mb-11 gap-4'>
            {restaurants.map(restaurant => (
                <RestaurantItem restaurant={restaurant} key={restaurant.id} />
            ))}
        </View>
    );
}