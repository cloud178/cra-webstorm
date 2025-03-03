import {FC, useEffect, useState} from "react";

const formatTime = (time: number) => time.toString().padStart(2, "0")

type PropsType = {}

export const Clock: FC<PropsType> = (porps) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, []);

    return (
        <div>
            <span>{formatTime(date.getHours())}</span>:
            <span>{formatTime(date.getMinutes())}</span>:
            <span>{formatTime(date.getSeconds())}</span>
        </div>
    )
}