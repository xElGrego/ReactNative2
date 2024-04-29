import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { Controller } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import { CalendarIcon } from "react-native-heroicons/solid";

interface Props {
    name: string;
    control: any;
    onChange: (value: any) => void;
    rules?: any;
    placeholder?: string;
}

export const DateTimeInputForm: React.FC<Props> = ({ name, control, onChange, rules, placeholder }) => {
    const [showPicker, setShowPicker] = useState(false);
    const [date, setDate] = useState(new Date());

    const onDateChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate || date;
        setShowPicker(false);
        setDate(currentDate);
        onChange(currentDate);
    };

    const showDatepicker = () => {
        setShowPicker(true);
    };

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field: { value, onBlur }, fieldState: { error } }) => (
                <>
                    <View style={[{ borderColor: error ? 'red' : '#e8e8e8' }]}>
                        <TextInput
                            className={`pl-2 border-b border-l ${!error ? "border-gray-400" : "border-red-500"}`}
                            onChangeText={onChange}
                            value={date.toLocaleString()}
                            onBlur={onBlur}
                            placeholder={placeholder}
                        />
                        <TouchableOpacity onPress={showDatepicker} className='absolute  right-2' >
                            <CalendarIcon color={"black"} />
                        </TouchableOpacity>
                    </View>
                    {showPicker && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode="date"
                            is24Hour={true}
                            display="default"
                            onChange={onDateChange}
                        />
                    )}
                    {error && <Text style={{ color: 'red', fontSize: 12 }}>{error.message || 'Error'}</Text>}
                </>
            )}
        />
    );
};
