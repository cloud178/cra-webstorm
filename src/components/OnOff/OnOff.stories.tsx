import React, {useState} from "react";
import { action } from '@storybook/addon-actions';
import { OnOff } from './OnOff';

export default {
    title: 'OnOff',
    component: OnOff
}

// 1 способ, показываем заглушки
// export const OnMode = () => <OnOff on={true} onClick={x => x} />
// export const OffMode = () => <OnOff on={false} onClick={x => x} />

// 2 способ, эта фигля выведится в консоли в actions сторибука
//todo storybook actions action
const callback = action('On or Off clicked');
export const OnMode = () => <OnOff on={true} onClick={callback} />
export const OffMode = () => <OnOff on={false} onClick={callback} />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);

    return (
        <OnOff on={value} onClick={x => setValue(x)} />
    )
}
