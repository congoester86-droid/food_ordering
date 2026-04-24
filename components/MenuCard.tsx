import { MenuItem } from '@/type'
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native'

const MenuCard = ({item: {image_url, name, price}}: {item: MenuItem}) => {
    return (
        <TouchableOpacity className="menu-card" style={Platform.OS === 'android' ? { elevation: 10, shadowColor: '#878787'}: {}}>
            <Image 
                source={{ uri: image_url }} 
                className="size-32 absolute -top-10" resizeMode="contain" />
                  <Text className="text-center base-bold text-dark-100 mb-2" numberOfLines={1}>{name}</Text>
                  <Text className="body-regular text-gray-200 mb-4">{price}kz</Text>
                  <TouchableOpacity onPress={()=>{}}>
                     <Text className="paragraph-bold text-primary">Add no carinho +</Text>
                  </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default MenuCard