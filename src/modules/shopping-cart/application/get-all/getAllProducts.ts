import { Product } from "../../domain/Product";
import { ShopingRepository } from "../../domain/ShopingRepository";

export function getAllProducts(shopingRepository: ShopingRepository): Promise<Product[]> {
    return shopingRepository.getAll();
}