import {useState} from "react";
import s from './Select.module.css';

export type ItemType = {
    value: any
    title: string
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
};

export const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState(false);

    const selectedItem = props.items.find(i => i.value === props.value);
    const toggleItems = () => {
        setActive(!active);
    }

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    return (
        <>
            <div className={s.select}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(i => {
                                return (
                                    <div
                                        className={s.item + ' ' + (selectedItem === i ? s.selected : '')}
                                        key={i.value}
                                        onClick={ () => onItemClick(i.value) }
                                    >{i.title}
                                    </div>
                                )
                            }
                        )}
                    </div>
                }
            </div>
        </>
    );
};
