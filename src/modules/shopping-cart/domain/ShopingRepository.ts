import { Product } from "./Product";

export interface ShopingRepository {
    getAll: () => Promise<Product[]>;
}