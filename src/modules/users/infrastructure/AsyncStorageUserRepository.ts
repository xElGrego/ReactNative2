import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../domain/User';
import { UserRepository } from '../domain/UserRepository';


export function createUserAsyncStorage(): UserRepository {
    return {
        saveUser,
        getAll,
        deleteUser,
        updateUser
    }
}

async function saveUser(user: User): Promise<string> {
    try {
        const listaUsuariosString = await AsyncStorage.getItem("listaUsuarios");
        let listaUsuarios: User[] = [];

        if (listaUsuariosString) {
            listaUsuarios = JSON.parse(listaUsuariosString);
        }

        if (!Array.isArray(listaUsuarios)) {
            listaUsuarios = [];
        }
        listaUsuarios.push(user);
        await AsyncStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
        return "Guardado correctamente";
    } catch (error: any) {
        console.log("Error", error)
        throw new Error("Error al guardar el usuario", error);
    }
}


async function updateUser(updatedUser: User): Promise<string> {
    try {
        const listaUsuariosString = await AsyncStorage.getItem("listaUsuarios");
        let listaUsuarios: User[] = [];

        if (listaUsuariosString) {
            listaUsuarios = JSON.parse(listaUsuariosString);
        }

        if (!Array.isArray(listaUsuarios)) {
            listaUsuarios = [];
        }

        const index = listaUsuarios.findIndex(user => user.idUser === updatedUser.idUser);
        if (index !== -1) {
            listaUsuarios[index] = updatedUser;
            await AsyncStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
            return "Usuario actualizado correctamente";
        } else {
            throw new Error("El usuario no existe en la lista");
        }
    } catch (error: any) {
        console.log("Error", error);
        throw new Error("Error al actualizar el usuario: " + error.message);
    }
}


async function getAll(): Promise<User[]> {
    const users = await AsyncStorage.getItem("listaUsuarios");
    if (users === null) {
        return [];
    }
    const map = (JSON.parse(users) as User[]);
    return map;
}


async function deleteUser(userId: Guid): Promise<string> {
    try {
        const listaUsuariosString = await AsyncStorage.getItem("listaUsuarios");
        let listaUsuarios: User[] = [];

        if (listaUsuariosString) {
            listaUsuarios = JSON.parse(listaUsuariosString);
        }

        if (!Array.isArray(listaUsuarios)) {
            listaUsuarios = [];
        }

        const updatedListaUsuarios = listaUsuarios.filter(user => user.idUser !== userId);
        await AsyncStorage.setItem("listaUsuarios", JSON.stringify(updatedListaUsuarios));
        return "Usuario eliminado correctamente";
    } catch (error: any) {
        console.log("Error", error);
        throw new Error("Error al eliminar el usuario");
    }
}