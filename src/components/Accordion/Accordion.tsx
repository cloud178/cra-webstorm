import React from "react";


type AccordionPropsType = {
    titleValue: string
    accordionCollapsed: boolean
    onChange: () => void
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return <div>
        <AccordionTitle title={props.titleValue} onClick={props.onChange}/>
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
        <h3 onClick={props.onClick}>---{props.title}---</h3>
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
