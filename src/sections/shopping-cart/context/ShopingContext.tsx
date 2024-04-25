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
}

export const ShopingContext = React.createContext({} as ContextState);

export const ShopingContextProvider = ({
    children,
    repository,
}: React.PropsWithChildren<{ repository: ShopingRepository }>) => {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [productQuantities, setProductQuantities] = useState<{ [productId: string]: number }>({});
    const [cantItems, setCantItems] = useState<number>(0);

    async function getProducts() {
        setLoading(true);
        const clientes = await getAllProducts(repository);
        setProducts(clientes);
        setLoading(false);
    }
    useEffect(() => {
        getProducts();
    }, []);

    const updateProductQuantity = (productId: string, quantity: number) => {
        setProductQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: quantity
        }));
        const uniqueProducts = Object.keys(productQuantities).length;
        setCantItems(uniqueProducts);
    };

    const storage: ContextState = {
        products,
        productQuantities,
        getProducts,
        loading,
        updateProductQuantity,
        cantItems
    };

    return (
        <ShopingContext.Provider value={storage}>
            {children}
        </ShopingContext.Provider>
    );
};

export const useShopingContext = () => useContext(ShopingContext);