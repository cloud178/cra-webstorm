import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
}

export const OnMode = () => {
    return <UncontrolledOnOff defaultOn={true} onChange={()=>{}}/>
}

export const OffMode = () => {
    return <UncontrolledOnOff defaultOn={false} onChange={()=>{}}/>
}

export const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>

export const DefaultInputValue = () => {
    return <input defaultValue={'yo'}/>
}
