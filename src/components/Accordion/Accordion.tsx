import React from "react";


type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return <div>
        <AccordionTitle title={props.titleValue}/>
        <AccordionBody collapsed={props.collapsed}/>
    </div>
}


type AccordionTitlePropsType = {
    title: string;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <div>
            <h3>---{props.title}---</h3>
        </div>
    )
}


type AccordionBodyPropsType = {
    collapsed: boolean;
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    if (props.collapsed) {
        return <></>;
    }
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
