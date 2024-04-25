import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { ShoppingCartIcon } from 'react-native-heroicons/solid';
import { useShopingContext } from '../context/ShopingContext';

interface FloatingButtonProps {
    onPress: () => void;
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({ onPress }) => {
    const { cantItems } = useShopingContext();


    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <View>
                <ShoppingCartIcon size={24} color="white" />
                {cantItems > 0 && <Text style={styles.itemCount}>{cantItems}</Text>}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'black',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemCount: {
        position: 'absolute',
        top: -15,
        right: -15,
        backgroundColor: 'red',
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 2,
        color: 'white',
        fontSize: 12,
    },
});
