import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: { count: number }) => {
    console.log('message')
    return (
        <div>{props.count}</div>
    )
}

const UsersSecret = (props: { users: string[] }) => {
    console.log(123)
    return (
        <div>{props.users.map((u, i) => {
            return (
                <div key={i}>{u}</div>
            )
        })}</div>
    )
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log('Example1')

    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<string[]>(['Dimych', 'Viktor', 'Igor'])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }
    users.push('aksdfjalskdjflkasdjf')

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add user</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}
