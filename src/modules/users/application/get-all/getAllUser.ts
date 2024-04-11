import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";

export function getAllUsers(clienteRepository: UserRepository): Promise<User[]> {
    return clienteRepository.getAll();
}