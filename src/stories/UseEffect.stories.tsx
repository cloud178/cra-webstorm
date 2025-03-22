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

export const SetIntervalExample = () => {
    const [fake, setFake] = useState<number>(0)
    const [seconds, setSeconds] = useState<number>(new Date().getSeconds())
    const minutes = new Date().getMinutes()
    const hours = new Date().getHours()

    console.log('SetTimeoutExample')

    // юзэффект срабатывает только после того, как компонента отрендерилась

    useEffect(() => {
        const intervalId =  setInterval(() => {
            // console.log('tick', counter)
            setSeconds(state => (state + 1) % 60)
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
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






export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('Component rendered')

    useEffect(() => {
        console.log('Effect occurred: ', counter)

        return () => {
            console.log('RESET EFFECT', counter)
        }
    }, [counter])

    const increaseCounter = () => {
        setCounter(counter + 1)
    }

    return (
        <>
            Hello, counter: {counter} <button onClick={increaseCounter}>+</button>
        </>
    )
}


export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered', text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            // setText(state => state + e.key)
            setText(text + e.key)
        }

        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return (
        <>
            Typed text: {text}
        </>
    )
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered', text)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('TIMEOUT EXPIRED')
            setText('3 seconds passed')
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])

    return (
        <>
            Typed text: {text}
        </>
    )
}