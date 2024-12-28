import React from "react";
import styled from "styled-components";

type RatingPropsType = 0 | 1 | 2 | 3 | 4 | 5

// export function UncontrolledRating(props: RatingPropsType) {
export function UncontrolledRating() {
    console.log('rating rendering')

    const [value, setValue] = React.useState<RatingPropsType>(0);

    return (
        <div>
            <Star selected={value > 0}/>
            <button onClick={() => setValue(1)}>setStars</button>
            <Star selected={value > 1}/>
            <button onClick={() => setValue(2)}>setStars</button>
            <Star selected={value > 2}/>
            <button onClick={() => setValue(3)}>setStars</button>
            <Star selected={value > 3}/>
            <button onClick={() => setValue(4)}>setStars</button>
            <Star selected={value > 4}/>
            <button onClick={() => setValue(5)}>setStars</button>
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
