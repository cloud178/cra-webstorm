import React from "react";

type OnOffType = {
    on: boolean
    onClick: (value: boolean) => void
}


function OnOffSecret(props: OnOffType) {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red',
    }

    const onClickOnHandler = () => {
        props.onClick(true)
    }

    const onClickOffHandler = () => {
        props.onClick(false)
    }

    return <div>
        <div style={onStyle} onClick={ onClickOnHandler }>On</div>
        <div style={offStyle} onClick={ onClickOffHandler }>Off</div>
        <div style={indicatorStyle} ></div>
    </div>
}
export const OnOff = React.memo(OnOffSecret)
