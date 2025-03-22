import {ClockViewPropsType} from "./Clock";

export const formatTime = (time: number) => time.toString().padStart(2, "0")

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span>{formatTime(date.getHours())}</span>:
        <span>{formatTime(date.getMinutes())}</span>:
        <span>{formatTime(date.getSeconds())}</span>
    </>
}