import { Feather, Ionicons } from '@expo/vector-icons';
import type { RestaurantProps } from '../../../models/restaurant';
import { Image, Pressable, Text, View } from 'react-native';

export function RestaurantItem({ restaurant }: { restaurant: RestaurantProps }) {
    return (
        <Pressable className='flex flex-row items-center justify-start gap-2'>
            <Image
                source={{ uri: restaurant.image }}
                className='w-20 h-20 rounded-full'
            />

            <View className='flex gap-2'>

                <Text
                    numberOfLines={2}
                    className='text-base text-black leading-4 font-bold'>
                    {restaurant.name}
                </Text>

                <View className='flex-row items-center gap-1'>
                    <Ionicons name='star' size={14} color='#CA8A04' />
                    <Text className='text-sm'>4.5</Text>
                </View>
            </View>
        </Pressable>
    );
}