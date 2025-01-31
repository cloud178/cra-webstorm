import {ItemType, Select} from "./Select";
import {action} from "@storybook/addon-actions";
import {useState} from "react";

export default {
    title: 'SelectMemoHW18',
    component: Select
}

export const DifferentSelects = () => {
    const [value, setValue] = useState('2')

    return (
        <Select
            value={value}
            onChange={setValue}
            items={[
                {value: '1', title: 'Minsk', population: 1_800_000},
                {value: '2', title: 'Amsterdam', population: 4_000_000},
                {value: '3', title: 'LA', population: 7_000_000},
            ]}
        />
    )
}

