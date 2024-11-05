import React from "react";
import styled from "styled-components";


type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5;
}

export function Rating(props: RatingPropsType) {
    console.log('rating rendering')
    if (props.value === 0) {
        return (
            <div>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 1) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 2) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 3) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 4) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </div>
        )
    }
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean,
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

function Star(props: StarPropsType) {
    // debugger;
    console.log('star rendering');
    if (props.selected) {
        return <span><b>Star</b> </span>;
    } else {
        return <span>Star </span>;
    }
}
