import { FC, useEffect, useState } from "react";
import { useShopingContext } from "../context/ShopingContext";
import { FlatList, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Product } from "../../../modules/shopping-cart/domain/Product";


export const PagosPage: FC = () => {
    const { productsSelected, products, removeProduct } = useShopingContext();

    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const selectedTotal = productsSelected.reduce((acc, product) => acc + product.total, 0);
        setTotal(selectedTotal);
    }, [productsSelected]);


    const renderProductItem = ({ item }: { item: Product }) => (
        <View style={styles.productItem} >
            <Image source={{ uri: item.imagen }} style={styles.productImage} />
            <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.nombre}</Text>
                <Text style={styles.productPrice}>Price: ${item.total}</Text>
            </View>
            <View className="h-full">
                <TouchableOpacity onPress={() => removeProduct(item.idProducto)}>
                    <Text className="font-semibold">x</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View className="flex-1 w-full h-full" >
            <View>
                <Text className="font-semibold text-xl">Carrito</Text>
            </View>
            <FlatList
                data={productsSelected}
                renderItem={renderProductItem}
            />
            <View className="p-2">
                <Text>Total: ${total.toFixed(2)}</Text>
            </View>
            <View>
                <TouchableOpacity className="p-2 bg-gray-200 rounded-2xl">
                    <Text className="text-sm text-center font-semibold">Pagar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    productItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
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
        fontSize: 12,
        color: 'black',
    },
    button: {
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
});