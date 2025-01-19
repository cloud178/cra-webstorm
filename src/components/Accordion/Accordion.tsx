import React from "react";

export type ItemType = {
    value: any
    title: string
}

type AccordionPropsType = {
    titleValue: string
    accordionCollapsed: boolean
    onChange: () => void
    items: ItemType[]
    onCLick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return <div>
        <AccordionTitle title={props.titleValue} onClick={props.onChange}/>
        {!props.accordionCollapsed && <AccordionBody items={props.items} onCLick={props.onCLick}/>}
    </div>
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={(e) => props.onClick()}>---{props.title}---</h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onCLick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return (
        <div>
            <ul>
                {props.items.map((i, index) => <li key={index} onClick={ () => { props.onCLick(i.value) }}>{i.title}</li>)}
            </ul>
        </div>
    )
}
