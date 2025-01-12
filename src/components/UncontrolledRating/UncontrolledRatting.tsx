import React from "react";

type RatingPropsType = 0 | 1 | 2 | 3 | 4 | 5

// export function UncontrolledRating(props: RatingPropsType) {
export function UncontrolledRating() {
    console.log('rating rendering')

    const [value, setValue] = React.useState<RatingPropsType>(0);

    return (
        <div>
            <Star selected={value > 0} setValue={() => setValue(1)} />
            <Star selected={value > 1} setValue={() => setValue(2)} />
            <Star selected={value > 2} setValue={() => setValue(3)} />
            <Star selected={value > 3} setValue={() => setValue(4)} />
            <Star selected={value > 4} setValue={() => setValue(5)} />

        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
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

    return (
       <span onClick={props.setValue}>
           { props.selected ? <b>Star </b> : 'Star ' }
       </span>
    )
}
