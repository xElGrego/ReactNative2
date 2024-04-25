import AsyncStorage from "@react-native-async-storage/async-storage";
import { Product } from "../domain/Product";
import { ShopingRepository } from "../domain/ShopingRepository";

export function createShopingAsyncStorage(): ShopingRepository {
    return {
        getAll
    }
}

async function getAll(): Promise<Product[]> {
    let products: Product[] = [];

    const storedProducts = await AsyncStorage.getItem("listaProductos");
    if (storedProducts !== null) {
        products = JSON.parse(storedProducts) as Product[];
    }
    const additionalProducts: Product[] = [
        {
            idProducto: "06931fe8-afe8-43ef-bf0b-fa7d2d88fb0a",
            nombre: "Chompa negra",
            imagen: "https://frutocuatro.com/wp-content/uploads/2018/06/18500-negro.jpg",
            total: 10,
            peso: 5
        },
        {
            idProducto: "676e9668-7b94-4ee7-8be0-825bb4c2b259",
            nombre: "Chompa negra 2 ",
            imagen: "https://http2.mlstatic.com/chompas-para-hombre-busos-para-hombre-D_NQ_NP_707421-MCO20780329118_062016-O.jpg",
            total: 15,
            peso: 0.4
        }
    ];

    //products = products.concat(additionalProducts);
    await AsyncStorage.setItem("listaProductos", JSON.stringify(additionalProducts));
    return products;
}