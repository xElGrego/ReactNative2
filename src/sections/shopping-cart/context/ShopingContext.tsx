import React, { useContext, useEffect, useState } from "react";
import { Product } from "../../../modules/shopping-cart/domain/Product";
import { getAllProducts } from "../../../modules/shopping-cart/application/get-all/getAllProducts";
import { ShopingRepository } from "../../../modules/shopping-cart/domain/ShopingRepository";

interface ContextState {
    products: Product[];
    getProducts: () => Promise<void>;
    productQuantities: { [productId: string]: number };
    updateProductQuantity: (productId: string, quantity: number) => void;
    loading: boolean;
    cantItems: number;
    productsSelected: Product[];
    removeProduct: (productId: string) => void
}

export const ShopingContext = React.createContext({} as ContextState);

export const ShopingContextProvider = ({
    children,
    repository,
}: React.PropsWithChildren<{ repository: ShopingRepository }>) => {

    const [products, setProducts] = useState<Product[]>([]);
    const [productsSelected, setProductsSelected] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [productQuantities, setProductQuantities] = useState<{ [productId: string]: number }>({});
    const [cantItems, setCantItems] = useState<number>(0);

    async function getProducts() {
        setLoading(true);
        const clientes = await getAllProducts(repository);
        setProducts(clientes);
        setLoading(false);
    }


    const updateProductQuantity = (productId: string, quantity: number) => {
        setProductQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: quantity
        }));

        const productToAdd = products.find(product => product.idProducto.toString() === productId);
        if (productToAdd) {
            addProductToSelected(productToAdd);
        }
    };

    const addProductToSelected = (product: Product) => {
        const productExists = productsSelected.some(selectedProduct => selectedProduct.idProducto.toString() === product.idProducto.toString());
        if (!productExists) {
            setProductsSelected(prevProductsSelected => [...prevProductsSelected, product]);
        }
    };

    const removeProduct = (productId: string) => {
        setProductsSelected(prevProductsSelected =>
            prevProductsSelected.filter(selectedProduct => selectedProduct.idProducto.toString() !== productId)
        );
    };

    useEffect(() => {
        const uniqueProducts = Object.keys(productQuantities).length;
        setCantItems(uniqueProducts);
    }, [productQuantities]);


    useEffect(() => {
        getProducts();
    }, []);

    const storage: ContextState = {
        products,
        productQuantities,
        getProducts,
        loading,
        updateProductQuantity,
        cantItems,
        productsSelected,
        removeProduct
    };

    return (
        <ShopingContext.Provider value={storage}>
            {children}
        </ShopingContext.Provider>
    );
};

export const useShopingContext = () => useContext(ShopingContext);