import React, {useState} from "react";


type AccordionPropsType = {
    titleValue: string;
    // collapsed?: boolean;
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    const [collapsed, setCollapsed] = useState(true)
    return <div>
        <AccordionTitle title={props.titleValue}/>
        <button onClick={ () => { setCollapsed(!collapsed) } }>TOGLE</button>
        {collapsed && <AccordionBody/>}
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

export default UncontrolledAccordion;
