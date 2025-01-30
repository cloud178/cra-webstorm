import React, {useState} from "react";

type UncontrolledOnOffType = {
    onChange: (value: boolean) => void
    defaultOn?: boolean
}

function UncontrolledOnOffSecret(props: UncontrolledOnOffType) {
    console.log('rendering')
    const [on, setOn] = useState(props.defaultOn ? props.defaultOn : false);

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red',
    }

    const onCLickTrueHandler = () => {
        setOn(true)
        props.onChange(true)
    }

    const onCLickFalseHandler = () => {
        setOn(false)
        props.onChange(false)
    }

    return <div>
        <div style={onStyle} onClick={ onCLickTrueHandler }>On</div>
        <div style={offStyle} onClick={ onCLickFalseHandler }>Off</div>
        <div style={indicatorStyle} ></div>
    </div>
}
export const UncontrolledOnOff = React.memo(UncontrolledOnOffSecret)
