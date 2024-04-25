import { ShopingRepository } from "../../domain/ShopingRepository";

export function deleteProduct(userRepository: ShopingRepository, idUser: Guid): Promise<string> {
    return userRepository.deleteProduct(idUser);
}