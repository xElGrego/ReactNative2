import { UserRepository } from "../../domain/UserRepository";

export function deleteUser(userRepository: UserRepository, idUser: Guid): Promise<string> {
    return userRepository.deleteUser(idUser);
}