import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { Controller, useForm } from 'react-hook-form';

interface NumericInputProps {
    name: string;
    control: any;
    rules?: any;
    placeholder?: string;
}

export const NumericInput: React.FC<NumericInputProps> = ({ name, control, rules, placeholder }) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            defaultValue={0}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <>
                    <View style={[{ borderColor: error ? 'red' : '#e8e8e8' }]}>
                        <TextInput
                            className={`pl-2 border-b border-l ${!error ? "border-gray-400" : "border-red-500"}`}
                            onChangeText={(text) => onChange(parseInt(text) || 0)}
                            onBlur={onBlur}
                            value={value.toString()}
                            placeholder={placeholder}
                            keyboardType="numeric"
                        />
                    </View>
                    {error && <Text style={{ color: 'red', fontSize: 12 }}>{error.message || 'Error'}</Text>}
                </>
            )}
        />
    );
};
