import { FC, useEffect, useState } from "react";
import s from './clock.module.css';

const formatTime = (time: number) => time.toString().padStart(2, "0");

export const ClockAnalog: FC = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const hours = date.getHours() % 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return (
        <div className={s.clockContainer}>
            {/* Аналоговые часы */}
            <div className={s.clockFace}>
                <div className={`${s.hand} ${s.hourHand}`}
                     style={{transform: `rotate(${hours * 30 + minutes / 2}deg)`}}/>
                <div className={`${s.hand} ${s.minuteHand}`} style={{transform: `rotate(${minutes * 6}deg)`}}/>
                <div className={`${s.hand} ${s.secondHand}`} style={{transform: `rotate(${seconds * 6}deg)`}}/>
                <div className={s.centerDot}/>
            </div>

            {/* Цифровые часы */}
            <div className={s.digitalClock}>
                {formatTime(date.getHours())}:{formatTime(date.getMinutes())}:{formatTime(date.getSeconds())}
            </div>
        </div>
    );
};
