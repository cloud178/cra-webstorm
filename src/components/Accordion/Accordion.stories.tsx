// // из самого первого видео про сторибук
// import type { Meta, StoryObj } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
//
// import { Accordion } from './Accordion';
// import React from "react";
//
//
// // синтаксис 1
// // const meta: Meta<typeof Accordion> = {
// //     component: Accordion,
// // };
// //
// // export default meta;
//
// //синтаксис 2
// export default {
//     component: Accordion
// }





// пока не юзаем
// type Story = StoryObj<typeof Accordion>
//
// export const FirstStory: Story = {
//     args: {
//         titleValue: 'hello',
//         accordionCollapsed: true,
//         // onChange: () => {}
//     }
// }



// const onChangeHandler = action('on Change');
//
// export const CollapsedAccordion = () => {
//     return <Accordion
//         titleValue={'Collapsed Accordion'}
//         accordionCollapsed={true}
//         // onChange={() => {}}
//         onChange={onChangeHandler}
//     />
// }
//
// export const OpenedAccordion = () => {
//     return <Accordion
//         titleValue={'Opened Accordion'}
//         accordionCollapsed={false}
//         onChange={() => {}}
//     />
// }
//
// export const AccordionDemo = () => {
//     const [collapsed, setCollapsed] = React.useState<boolean>(false)
//
//     return <Accordion
//         titleValue={'Accordion Demo'}
//         accordionCollapsed={collapsed}
//         onChange={() => {
//             setCollapsed(!collapsed)
//         }}
//     />
// }







// второе видео про сторибук
import React, {useState} from "react";
import { action } from '@storybook/addon-actions';
import {Accordion, ItemType} from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion
}

const items: ItemType[] = [
    {
        value: 1,
        title: 'Dimych',
    },
    {
        value: 2,
        title: 'Valera',
    },
    {
        value: 3,
        title: 'Artem',
    },
    {
        value: 4,
        title: 'Viktor',
    },
]

const callback = action('accordion mode change event fired');
const onClickCallback = action('some item was clicked');
export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} onChange={callback} accordionCollapsed={true} items={[]} onCLick={onClickCallback}/>
export const UsersUncollapsedMode = () => <Accordion titleValue={'Users'} onChange={callback} accordionCollapsed={false} items={items}  onCLick={onClickCallback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);

    return (
        <Accordion titleValue={'Users'} onChange={() => setValue(!value)} accordionCollapsed={value} items={items} onCLick={id => alert(`user with id ${id} is selected`)}/>
    )
}
