import {ItemType, Select} from "./Select";
import {action} from "@storybook/addon-actions";
import {memo, useMemo, useState} from "react";

// todo нормально сделать домашку по инструкции

export default {
    title: 'SelectMemoHW18',
    component: Select
}

export const DifferentSelects = () => {
    const [value, setValue] = useState('2')
    let [counter, setCounter] = useState(0);

    const items = [
        {value: '1', title: 'Minsk', population: 1_800_000},
        {value: '2', title: 'Amsterdam', population: 4_000_000},
        {value: '3', title: 'LA', population: 7_000_000},
    ]

    const itemsWithLetterM = useMemo(() => {
       return items.filter(i => i.title.toLowerCase().indexOf('m') !== -1)
    }, [])

    const itemsWithPopulationMoreThanTwoMillion = useMemo(() => {
       return items.filter(i => i.population > 2_000_000)
    }, [])

    // const itemsWithLetterM = items.filter(i => i.title.toLowerCase().indexOf('m') !== -1)
    //
    //
    // const itemsWithPopulationMoreThanTwoMillion = items.filter(i => i.population > 2_000_000)



    return (
        <>
            <Select
                value={value}
                onChange={setValue}
                items={itemsWithLetterM}
            />
            <Select
                value={value}
                onChange={setValue}
                items={itemsWithPopulationMoreThanTwoMillion}
            />
            {counter}
            <button onClick={() => setCounter(counter = counter + 1)}>increase counter</button>
        </>
    )
}

