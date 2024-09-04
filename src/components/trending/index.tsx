import { FlatList, View } from 'react-native';
import { CardHorizontalFood } from './food';
import { useEffect, useState } from 'react';
import type { FoodProps } from '../../models/food';

export function TrendingFoods() {
    const [foods, setFoods] = useState<FoodProps[]>([]);

    useEffect(() => {
        async function getFoods() {
            const response = await fetch('http://192.168.15.108:3000/foods')
            const data = await response.json()
            setFoods(data)
        }

        getFoods()
    }, [])

    return (
        <FlatList
            data={foods}
            renderItem={({ item }) => <CardHorizontalFood food={item} />}
            horizontal={true}
            contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
            showsHorizontalScrollIndicator={false}
        />
    );
}