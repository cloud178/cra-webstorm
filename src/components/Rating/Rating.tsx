import React from "react";
import styled from "styled-components";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
    onClick: (value: RatingValueType) => void
}

function RatingSecret(props: RatingPropsType) {
    console.log('rating rendering')

    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )
}
export const Rating = React.memo(RatingSecret);

type StarPropsType = {
    selected: boolean,
    onClick: (value: RatingValueType) => void
    value: RatingValueType
}


// const  av = styled.Star`
//     border: none;
//     background-color: #c748ff;
//     padding: 10px 20px;
//     border-radius: 5px;
//     color: snow;
//     font-size: 2rem;
//     font-weight: bold;
// `

function StarSecret(props: StarPropsType) {
    console.log('star rendering')
    return (
        <span onClick={() => props.onClick(props.value)}>{props.selected ? <b>Star </b> : 'Star '}</span>
    )
}
const Star = React.memo(StarSecret);