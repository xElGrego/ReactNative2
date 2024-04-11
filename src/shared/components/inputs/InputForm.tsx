import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { Controller, useForm } from 'react-hook-form';

interface Props {
    name: string;
    control: any;
    rules?: any;
    placeholder?: string;
}

export const TextInputForm: React.FC<Props> = ({ name, control, rules, placeholder }) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <>
                    <View style={[{ borderColor: error ? 'red' : '#e8e8e8' }]}>
                        <TextInput
                            className={`pl-2 border-b border-l ${!error ? "border-gray-400" : "border-red-500"}`}
                            onChangeText={(text) => onChange(text)}
                            value={value}
                            onBlur={onBlur}
                            placeholder={placeholder}
                        />
                    </View>
                    {error && <Text style={{ color: 'red', fontSize: 12 }}>{error.message || 'Error'}</Text>}
                </>
            )}
        />
    );
};