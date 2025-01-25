import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('collapsed value should be true', () => {
    const startState: StateType = {
        collapsed: false
    }

    const endState: StateType = reducer(startState, {type: TOGGLE_COLLAPSED})

    expect(endState.collapsed).toBe(true)
})

test('collapsed value should be false', () => {
    const startState: StateType = {
        collapsed: true
    }

    const endState: StateType = reducer(startState, {type: TOGGLE_COLLAPSED})

    expect(endState.collapsed).toBe(false)
})

test('unknown action type', () => {
    const startState: StateType = {
        collapsed: true
    }

    expect(() => reducer(startState, {type: 'FAKE-TYPE'})).toThrowError()
})
