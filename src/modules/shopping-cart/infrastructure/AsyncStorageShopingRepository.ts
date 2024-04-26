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
            nombre: "Chompa 1",
            imagen: "https://frutocuatro.com/wp-content/uploads/2018/06/18500-negro.jpg",
            total: 310,
            peso: 5
        },
        {
            idProducto: "676e9668-7b94-4ee7-8be0-825bb4c2b251",
            nombre: "Chompa 2",
            imagen: "https://http2.mlstatic.com/chompas-para-hombre-busos-para-hombre-D_NQ_NP_707421-MCO20780329118_062016-O.jpg",
            total: 290,
            peso: 0.4
        },
        {
            idProducto: "676e9668-7b94-4ee7-8be0-825bb4c2b252",
            nombre: "Chompa 3",
            imagen: "https://tejidosacrochetpasoapaso.com/wp-content/uploads/2021/04/chompas-tejidas-para-hombres-1.jpg",
            total: 410,
            peso: 0.4
        },
        {
            idProducto: "676e9668-7b94-4ee7-8be0-825bb4c2b253",
            nombre: "Chompa 4",
            imagen: "https://th.bing.com/th/id/OIF.t55QYj4rc7Kx6qx7aDJEkA?rs=1&pid=ImgDetMain",
            total: 230,
            peso: 0.4
        },
        {
            idProducto: "676e9668-7b94-4ee7-8be0-825bb4c2b254",
            nombre: "Chompa 5",
            imagen: "https://cdn11.bigcommerce.com/s-lqiq2tqil5/images/stencil/3000w/products/625/7274/5106_FADED_CREW_FADED_BLACK_BACK__33478.1645399843.jpg?c=1",
            total: 250,
            peso: 0.4
        },
        {
            idProducto: "676e9668-7b94-4ee7-8be0-825bb4c2b255",
            nombre: "Chompa 6",
            imagen: "https://plazavea.vteximg.com.br/arquivos/ids/1567223-1000-1000/image-bfcbd068d7f04d62a658ac58e3aaf9d6.jpg?v=637559398450670000",
            total: 450,
            peso: 0.4
        },
    ];

    //products = products.concat(additionalProducts);
    await AsyncStorage.setItem("listaProductos", JSON.stringify(additionalProducts));
    return products;
}