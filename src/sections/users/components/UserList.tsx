import React, { FC, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Modal, Pressable, ActivityIndicator } from "react-native";
import { useUserContext } from "../context/UserContext";
import { DataTable, Dialog, Portal } from "react-native-paper";
import { Bars3Icon } from "react-native-heroicons/solid";
import SelectDropdown from "react-native-select-dropdown";
import { UserForm } from "./UserFom";
import { useUserForm } from "../hooks/useUserForm";
import { User } from "../../../modules/users/domain/User";

interface Icono {
    title: string;
    icon: string;
}

export const UserList: FC = () => {
    const { users, visible, setVisible, getUsers, setIdUser, idUser, loading } = useUserContext();
    const [page, setPage] = useState<number>(0);
    const { deleteUser } = useUserForm();

    const emojisWithIcons: Icono[] = [
        { title: 'Editar', icon: 'PencilIcon' },
        { title: 'Borrar', icon: 'TrashIcon' },
    ];

    const handleOptionClick = (selectedItem: Icono, item: User) => {
        switch (selectedItem.title) {
            case 'Borrar':
                handleDelete(item.idUser!);
                break;
            case 'Editar':
                handleEdit(item.idUser!);
                break;
            default:
                break;
        }
    };

    const handleDelete = async (idUser: Guid) => {
        await deleteUser(idUser);
    };

    const handleEdit = (idUser: Guid) => {
        setIdUser(idUser);
        setVisible(!visible);
    };

    const handlerAgregar = () => {
        setIdUser(null);
        setVisible(true)
    };

    return (
        <View >
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    setVisible(!visible);
                }}>
                <View style={stylesModal.centeredView}>
                    <View style={stylesModal.modalView}>
                        <Text style={stylesModal.modalTitle}> {idUser ? "Editar" : "Agregar"}  </Text>
                        <UserForm />
                    </View>
                </View>
            </Modal>
            <Text className="mb-2 font-semibold text-base">Lista de usuarios</Text>
            <View className="flex-row gap-2 justify-end items-center">
                <TouchableOpacity
                    className="bg-white py-2 rounded-xl px-4 border border-gray-400"
                    onPress={getUsers}
                >
                    <Text className="text-center text-black">
                        Consultar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="bg-yellow-400 py-2 rounded-xl px-4"
                    onPress={handlerAgregar}
                >
                    <Text className="text-center">
                        Agregar
                    </Text>
                </TouchableOpacity>

            </View>
            {
                !loading ? users.length > 0 ? (
                    <ScrollView style={{ maxHeight: 600 }}
                        overScrollMode="never"
                    >
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title style={{ flex: 0.5 }}>Id</DataTable.Title>
                                <DataTable.Title style={{ flex: 1.5 }}>Nombre</DataTable.Title>
                                <DataTable.Title style={{ flex: 1.5 }}>Apellido</DataTable.Title>
                                <DataTable.Title style={{ flex: 0.5 }}>Edad</DataTable.Title>
                                <DataTable.Title style={{ flex: 1.5 }}>Fecha</DataTable.Title>
                                <DataTable.Title style={{ flex: 0.5 }} > </DataTable.Title>
                            </DataTable.Header>
                            {users.map((item) => (
                                <DataTable.Row key={item.idUser}>
                                    <DataTable.Cell style={{ flex: 0.5 }}>{1}</DataTable.Cell>
                                    <DataTable.Cell style={{ flex: 1.5 }}>{item.nombre}</DataTable.Cell>
                                    <DataTable.Cell style={{ flex: 1.5 }}>{item.apellido}</DataTable.Cell>
                                    <DataTable.Cell style={{ flex: 0.5 }}>{item.edad}</DataTable.Cell>
                                    <DataTable.Cell style={{ flex: 0.5 }}>{item.fechaNacimiento?.toString()}</DataTable.Cell>
                                    <DataTable.Cell style={{ flex: 0.8 }} className="justify-center items-center">
                                        <SelectDropdown
                                            data={emojisWithIcons}
                                            onSelect={(selectedItem, index) => handleOptionClick(selectedItem, item)}
                                            renderButton={(selectedItem, isOpened) => {
                                                return (
                                                    <View style={styles.dropdownButtonStyle}>
                                                        <Bars3Icon size="18" color="black" />
                                                    </View>
                                                );
                                            }}
                                            renderItem={(item, index, isSelected) => (
                                                <View style={styles.dropdownItemStyle}>
                                                    <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                                                </View>
                                            )}
                                            dropdownStyle={styles.dropdownMenuStyle}
                                        />
                                    </DataTable.Cell>
                                </DataTable.Row>
                            ))}
                            <DataTable.Pagination
                                page={page}
                                numberOfPages={Math.ceil(3)}
                                onPageChange={(page) => setPage(page)}
                                label={`1 - 6 de 6`}
                                numberOfItemsPerPage={2}
                                showFastPaginationControls
                                selectPageDropdownLabel={'Rows per page'}
                            />
                        </DataTable>
                    </ScrollView>
                ) : (
                    <View className="flex justify-center border my-2 border-gray-300 p-2">
                        <Text className="text-center"> No hay datos.</Text>
                    </View>
                ) :
                    <View className="flex justify-center my-2 p-2">
                        <ActivityIndicator size="large" color="#ffcd38" />
                    </View>
            }
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 60,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 12,
    },
    headerTxt: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    dropdownButtonStyle: {
        flex: 1,
        height: 6,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 6,
    },
    dropdownButtonTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
    },
    dropdownMenuStyle: {
        borderRadius: 8,
        height: 100,
    },
    dropdownItemStyle: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#B1BDC8',
    },
    dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 10,
        fontWeight: '500',
        textAlign: 'center',
    },
});

const stylesModal = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
        paddingTop: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "500",
        marginBottom: 20
    }
});