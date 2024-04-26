import { FC, useState } from "react";
import { FlatList, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Product } from '../../../modules/shopping-cart/domain/Product';
import { useShopingContext } from "../context/ShopingContext";

export const ShopingList: FC = () => {
    const { products, productQuantities, updateProductQuantity } = useShopingContext();

    const renderProductItem = ({ item }: { item: Product }) => (
        <View style={styles.productItem}>
            <Image source={{ uri: item.imagen }} style={styles.productImage} />
            <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.nombre}</Text>
                <Text style={styles.productPrice}>Price: ${item.total}</Text>
                <Text>Cantidad: {productQuantities[item.idProducto.toString()] || 0}</Text>
            </View>
            <TouchableOpacity onPress={() => handleAdd(item)}>
                <Text style={styles.button}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSubtract(item)}>
                <Text style={styles.button}>-</Text>
            </TouchableOpacity>
        </View>
    );

    const handleAdd = (product: Product) => {
        updateProductQuantity(product.idProducto.toString(), (productQuantities[product.idProducto.toString()] || 0) + 1);
    };

    const handleSubtract = (product: Product) => {
        if (productQuantities[product.idProducto.toString()] && productQuantities[product.idProducto.toString()] > 0) {
            updateProductQuantity(product.idProducto.toString(), productQuantities[product.idProducto.toString()] - 1);
        }
    };

    return (
        <FlatList
            data={products}
            renderItem={renderProductItem}
        />
    );
};

const styles = StyleSheet.create({
    productItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    productImage: {
        width: 60,
        height: 80,
        marginRight: 10,
    },
    productInfo: {
        flex: 1,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 14,
        color: 'green',
    },
    button: {
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
});
