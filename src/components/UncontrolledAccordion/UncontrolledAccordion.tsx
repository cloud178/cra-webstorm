import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";


type AccordionPropsType = {
    titleValue: string;
}

function UncontrolledAccordionSecret(props: AccordionPropsType) {
    console.log('UncontrolledAccordion rendering')
    // const [collapsed, setCollapsed] = useState(false)
    const [state, dispatch] = useReducer(reducer, { collapsed: false })

    return <div>
        {/*<AccordionTitle title={props.titleValue} onClick={ () => { setCollapsed(!collapsed) } } />*/}
        <AccordionTitle title={props.titleValue} onClick={() => dispatch({type: TOGGLE_COLLAPSED})}/>
        {!state.collapsed && <AccordionBody/>}
    </div>
}
export const UncontrolledAccordion = React.memo(UncontrolledAccordionSecret)


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitleSecret(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <div>
            <h3 onClick={props.onClick}>---{props.title}---</h3>
        </div>
    )
}
const AccordionTitle = React.memo(AccordionTitleSecret)

function AccordionBodySecret() {
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
const AccordionBody = React.memo(AccordionBodySecret)
