import { User } from "../../../modules/users/domain/User";
import { useUserContext } from "../context/UserContext";
import Toast from 'react-native-toast-message';

export function useUserForm(): {
    submitUser: (data: User) => Promise<boolean>;
    deleteUser: (idUser: Guid) => Promise<boolean>;
    updateUser: (data: User) => Promise<boolean>;
} {
    const { createUser, removeUser, editUser } = useUserContext();

    async function submitUser(data: User) {
        try {
            await createUser(data);
            Toast.show({
                type: 'success',
                text1: 'Guardado correctamente',
            });
            return true;
        }
        catch (e: any) {
            Toast.show({
                type: 'error',
                text1: 'Error al guardar el usuario',
            });
            return false;
        }
    }

    async function updateUser(data: User) {
        try {
            await editUser(data);
            Toast.show({
                type: 'success',
                text1: 'Editado correctamente',
            });
            return true;
        }
        catch (e: any) {
            Toast.show({
                type: 'error',
                text1: 'Error al editar el usuario',
            });
            return false;
        }
    }

    async function deleteUser(idDistribuidor: Guid) {
        try {
            await removeUser(idDistribuidor);
            Toast.show({
                type: 'success',
                text1: 'Eliminado correctamente',
            });
            return true;
        }
        catch (e: any) {
            Toast.show({
                type: 'error',
                text1: 'Error al guardar el usuario',
            });
            return false;
        }
    }

    return {
        submitUser,
        deleteUser,
        updateUser
    }
}