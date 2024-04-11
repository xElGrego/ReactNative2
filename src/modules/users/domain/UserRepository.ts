import { User } from "./User";

export interface UserRepository {
    //saveDistribuidor: (data: Distribuidor) => Promise<string>;
    saveUser: (data: User) => Promise<string>;
    getAll: () => Promise<User[]>;
    deleteUser: (userId: Guid) => Promise<string>;
    updateUser: (data: User) => Promise<string>;
}