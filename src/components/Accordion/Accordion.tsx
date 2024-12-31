import React from "react";


type AccordionPropsType = {
    titleValue: string
    accordionCollapsed: boolean
    onClick: (value: boolean) => void
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return <div>
        <AccordionTitle title={props.titleValue} onClick={() => props.onClick(!props.accordionCollapsed)}/>
        {!props.accordionCollapsed && <AccordionBody/>}
    </div>
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <div onClick={props.onClick}>
            <h3>---{props.title}---</h3>
        </div>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}


export default Accordion;
