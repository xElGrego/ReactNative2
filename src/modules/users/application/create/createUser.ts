import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";

export function saveUser(userRepository: UserRepository, user: User): Promise<string> {
    return userRepository.saveUser(user);
}