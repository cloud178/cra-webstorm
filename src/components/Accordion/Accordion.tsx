import React from "react";


function Accordion() {
    console.log('Accordion rendering')
    return <div>
        <AccordionTitle/>
        <AccordionBody/>
    </div>
}

function AccordionTitle() {
    console.log('AccordionTitle rendering')
    return (
        <div>
            <h3>Menu</h3>
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
