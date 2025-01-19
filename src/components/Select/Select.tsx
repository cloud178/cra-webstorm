import {useState} from "react";
import s from './Select.module.css';

export type ItemType = {
    value: any
    title: string
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
};

export const Select = (props: SelectPropsType) => {
    const [value, setValue] = useState<any>(props.value);
    const [showOptions, setShowOptions] = useState(false)

    return (
        <div tabIndex={0} onBlur={() => setShowOptions(false)} className={s.select}>
            <div onClick={()=>setShowOptions(!showOptions)} >{value}</div>
            {showOptions && props.items.map(i => <div onClick={ () => {
                setValue(i.title)
                setShowOptions(false)
            } }>{i.title}</div>)}
        </div>
    );
};
