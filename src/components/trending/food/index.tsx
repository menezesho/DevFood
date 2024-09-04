import { Ionicons } from '@expo/vector-icons';
import type { FoodProps } from '../../../models/food';
import { Image, Pressable, Text, View } from 'react-native';

export function CardHorizontalFood({ food }: { food: FoodProps }) {
    return (
        <Pressable className='flex flex-col rounded-xl relative'>
            <Image source={{ uri: food.image }}
                className='w-44 h-36 rounded-xl'
            />

            <View className='flex flex-row bg-neutral-900/90 w-fit gap-1 rounded-full absolute top-2 right-2 px-2 py-1'>
                <Ionicons name='star' size={14} color="#CA8A04" />
                <Text className='text-white text-sm'>{food.rating}</Text>
            </View>

            <Text className='text-green-700 font-medium text-lg'>R${food.price}</Text>
            <Text className='text-black mt-1'>R${food.name}</Text>
            <Text className='text-neutral-600 text-sm'>R$ {food.delivery}</Text>

            <Text>{food.name}</Text>
        </Pressable>
    );
}