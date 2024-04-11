import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";

export function updateUser(userRepository: UserRepository, user: User) {
    return userRepository.updateUser(user);
}