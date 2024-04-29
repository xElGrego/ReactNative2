import React, { FC, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { useForm, FormProvider } from "react-hook-form";
import { User } from "../../../modules/users/domain/User";
import { useUserForm } from "../hooks/useUserForm";
import { useUserContext } from "../context/UserContext";
import { TextInputForm } from "../../../shared/components/inputs/InputForm";
import { NumericInput } from "../../../shared/components/inputs/InputNumericForm";
import DateTimePicker from '@react-native-community/datetimepicker';

export const UserForm: FC = () => {
    const { control, setValue, handleSubmit, formState: { errors } } = useForm<User>();
    const { submitUser, updateUser } = useUserForm();
    const { setVisible, users, idUser } = useUserContext();

    const initialStateForm: User = {
        nombre: "",
        edad: 0,
        apellido: ""
    };

    const methods = useForm<User>({
        defaultValues: initialStateForm,
    });

    const onSubmit = async (data: User) => {
        if (idUser) {
            const updatedUser = { ...data, idUser: idUser };
            await updateUser(updatedUser);
            setVisible(false);
        } else {
            await submitUser(data);
            setVisible(false);
        }
    };

    useEffect(() => {
        if (idUser) {
            const user = users.find(
                (m) => m.idUser === idUser
            );
            if (user) {
                setValue("nombre", user.nombre);
                setValue("edad", Number(user.edad));
                //methods.reset(user);
            }
        }
    }, [idUser]);

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode: string) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <FormProvider {...methods}>
            <View className="flex">
                <View className="form mb-4">
                    <Text className="text-xs text-gray-700">Nombre</Text>
                    <TextInputForm
                        name="nombre"
                        control={control}
                        rules={{ required: 'El nombre es requerido' }}
                        placeholder="Ingrese su nombre"
                    />
                </View>
                <View className="form mb-4">
                    <Text className="text-xs text-gray-700">Apellido</Text>
                    <TextInputForm
                        name="apellido"
                        control={control}
                        rules={{ required: 'El apellido es requerido' }}
                        placeholder="Ingrese su apellido"
                    />
                </View>
                <View className="form mb-4">
                    <Text className="text-xs text-gray-700">Edad</Text>
                    <NumericInput
                        name="edad"
                        control={control}
                        rules={{
                            required: 'La edad es requerida',
                            min: {
                                value: 1,
                                message: 'La edad debe ser mayor que 0',
                            },
                        }}
                        placeholder="Ingrese su edad"
                    />
                </View>
                <View className="form mb-4">
                    <Text className="text-xs text-gray-700">Fecha de Nacimiento</Text>
                    <Button onPress={showDatepicker} title="Show date picker!" />
                    <Text>selected: {date.toLocaleString()}</Text>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={"date"}
                            is24Hour={true}
                            onChange={onChange}
                        />
                    )}
                </View>
                <View className="flex-row gap-2 justify-end items-center">
                    <TouchableOpacity
                        className="bg-yellow-400 py-2 rounded-xl px-4"
                        onPress={handleSubmit(onSubmit)}
                    >
                        <Text className="text-center">
                            {idUser ? "Editar" : "Guardar"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="bg-white py-2 rounded-xl px-4 border border-gray-400 "
                        onPress={() => setVisible(false)}
                    >
                        <Text className="text-center text-black">
                            Cancelar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </FormProvider>
    );
}