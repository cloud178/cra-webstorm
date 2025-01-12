import React from "react";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
}

export const OnOff = () => {
    return <UncontrolledOnOff onChange={()=>{}}/>
}
