import React, {useMemo, useState, useEffect} from 'react'

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [fake, setFake] = useState<number>(0)
    const [counter, setCounter] = useState<number>(0)

    console.log('Simple example')

    // юзэффект срабатывает только после того, как компонента отрендерилась

    useEffect(() => {
        console.log('useEffect - every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect - only first render (componentDinMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect - useeffect first render and every counter changing')
        document.title = counter.toString()
    }, [counter])

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setFake(fake + 1)}>fake +</button>
            <button onClick={() => setCounter(counter + 1)}>counter +</button>
        </>
    )
}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState<number>(0)
    const [seconds, setSeconds] = useState<number>(new Date().getSeconds())
    const minutes = new Date().getMinutes()
    const hours = new Date().getHours()

    console.log('SetTimeoutExample')

    // юзэффект срабатывает только после того, как компонента отрендерилась

    useEffect(() => {
        setInterval(() => {
            // console.log('tick', counter)
            setSeconds(state => (state + 1) % 60)
        }, 1000)
    }, [])


    return (
        <>
            {/*Hello, counter: {counter}, fake: {fake}*/}
            Clocks: {hours}:{minutes}:{seconds}
            {/*<button onClick={() => setFake(fake + 1)}>fake +</button>*/}
            {/*<button onClick={() => setCounter(counter + 1)}>counter +</button>*/}
        </>
    )
}
