import { log } from "console"
import React from "react"
import { useMemo, useState } from "react"

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState(3)
    const [b, setB] = useState(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000)
                fake++
                const fakeValue = Math.random()
                tempResultA *= i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return (
        <>
            <input value={a} onChange={e => setA(Number(e.currentTarget.value))} />
            <input value={b} onChange={e => setB(+e.currentTarget.value)} />
            <hr />
            <div>Result for a: {resultA}</div>
            <div>Result for b: {resultB}</div>
        </>
    )
}

const UsersSecret = (props: { users: string[] }) => {
    console.log('USERS-SECRET')
    return (
        <div>{props.users.map((u, i) => {
            return (
                <div key={i}>{u}</div>
            )
        })}</div>
    )
}
const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')

    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<string[]>(['Dimych', 'Viktor', 'Igor', 'Vasua', 'Valera'])

    const newArray = useMemo(()=>{
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>+</button>
            {counter}
            <Users users={newArray}/>
        </>
    )
}
