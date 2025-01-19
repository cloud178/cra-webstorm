import {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'input',
}

export const UncontrolledInput = () => {
    return (
        <input/>
    );
};

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState<string>('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    return (
        <>
            <input onChange={onChange}/> - {value}
        </>
    );
};

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return (
        <>
            <input ref={inputRef}/>
            <button onClick={save}>save
            </button>
            actual value: {value}
        </>
    );
};

export const ControlledInput = () => {
    const [parrentValue, setParrentValue] = useState<string>('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParrentValue(e.currentTarget.value)

    return <input value={parrentValue} onChange={ onChange }  />
}

export const ControlledCheckbox = () => {
    const [parrentValue, setParrentValue] = useState<boolean>(true);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParrentValue(e.currentTarget.checked)

    return <input type={"checkbox"} checked={parrentValue} onChange={ onChange }  />
}

export const ControlledSelect = () => {
    const [parrentValue, setParrentValue] = useState<string | undefined>('2');

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParrentValue(e.currentTarget.value)
    }

    return <select value={parrentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Amsterdam</option>
        <option value={'3'}>LA</option>
    </select>
}

export const ControlledInputWithFixedValue = () => {
    return (
        <input value={'it-incubator'}/>
    );
};
