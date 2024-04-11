import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { User } from "../../../modules/users/domain/User";
import { UserRepository } from "../../../modules/users/domain/UserRepository";
import uuid from 'react-native-uuid';
import { saveUser } from "../../../modules/users/application/create/createUser";
import { getAllUsers } from "../../../modules/users/application/get-all/getAllUser";
import { deleteUser } from "../../../modules/users/application/delete/deleteUser";
import { updateUser } from "../../../modules/users/application/update/updateUser";

interface ContextState {
    createUser: (data: User) => Promise<void>;
    users: User[];
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
    getUsers: () => Promise<void>;
    removeUser: (idUser: Guid) => Promise<void>;
    editUser: (data: User) => Promise<void>;
    idUser: Guid | null;
    setIdUser: Dispatch<SetStateAction<Guid | null>>;
    loading: boolean;
}

export const UserContext = React.createContext({} as ContextState)

export const UserContextProvider = ({
    children,
    repository,
}: React.PropsWithChildren<{ repository: UserRepository }>) => {

    const [users, setUsers] = useState<User[]>([]);
    const [visible, setVisible] = useState(false);
    const [idUser, setIdUser] = useState<Guid | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    async function createUser(user: User) {
        const id = uuid.v4();
        user.idUser = id.toString();
        await saveUser(repository, user);
        await getUsers();
    }

    async function editUser(user: User) {
        await updateUser(repository, user);
        await getUsers();
    }

    async function getUsers() {
        setLoading(true);
        const clientes = await getAllUsers(repository);
        setUsers(clientes);
        setLoading(false);
    }

    async function removeUser(idUser: Guid): Promise<void> {
        await deleteUser(repository, idUser);
        await getUsers();
    }

    useEffect(() => {
        getUsers();
    }, []);

    const storage: ContextState = {
        createUser,
        users,
        visible,
        setVisible,
        getUsers,
        removeUser,
        idUser,
        setIdUser,
        editUser,
        loading
    };

    return (
        <UserContext.Provider value={storage}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);