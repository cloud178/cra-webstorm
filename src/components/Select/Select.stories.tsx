import {ItemType, Select} from "./Select";

export default {
    title: 'Select',
    component: Select
}

const items: ItemType[] = [
    {value: 1, title: 'React'},
    {value: 2, title: 'JS'},
    {value: 3, title: 'HTML&CSS'},
]

export const SelectModeChanging = () => {
    return <Select value={'chose the option'} onChange={ () => {} } items={items}/>
}
