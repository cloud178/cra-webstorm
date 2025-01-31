import React, {useState, KeyboardEvent, useEffect} from "react";
import s from './Select.module.css';

export type ItemType = {
    value: any
    title: string
    population?: number
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
};

const SelectSecret = (props: SelectPropsType) => {

    const [active, setActive] = useState(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value);


    const selectedItem = props.items.find(i => i.value === props.value);
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue);

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => {
        setActive(!active);
    }

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyUpPres = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false);
        }
    }

    const filteredByPopuolationCities = props.items.filter(i => i.population ? i.population > 2_000_000 : null);

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '80px'}}>
            <div className={s.select} tabIndex={0} onKeyUp={onKeyUpPres}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(i => {
                                return (
                                    <div
                                        onMouseEnter={() => setHoveredElementValue(i.value)}
                                        className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                                        key={i.value}
                                        onClick={() => onItemClick(i.value)}
                                    >{i.title}
                                    </div>
                                )
                            }
                        )}
                    </div>
                }
            </div>
            <div>
                <button>Show Cities with population more than 2_000_000</button>
                <button>Show Cities with letter 'a'</button>
                {filteredByPopuolationCities.map(i => (
                    <p key={i.value}>{`${i.value} - ${i.title}, ${i.population ?? 'N/A'}`}</p>
                ))}
            </div>
        </div>
    );
};
export const Select = React.memo(SelectSecret)
